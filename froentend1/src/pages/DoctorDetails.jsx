import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDoctor(null);
    setError(null);
    setLoading(true);

    const fetchDoctor = async () => {
      try {
        const res = await fetch("https://hospital-api-back.onrender.com/api/doctors");
        if (!res.ok) {
          const errBody = await res.json().catch(() => ({}));
          throw new Error(errBody.message || "Doctor not found");
        }

        const data = await res.json();

        // Backend may incorrectly return an array; handle both cases
        let doc = data;
        if (Array.isArray(data)) {
          doc = data.find((d) => d._id === id || d.id === id) || null;
        }

        if (!doc) throw new Error("Doctor not found");

        setDoctor(doc);
      } catch (err) {
        console.error(err);
        setError(err.message || "Unable to load doctor details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (error) return <div style={{ padding: "20px" }}><h3>{error}</h3></div>;
  if (loading) return <div style={{ padding: "20px" }}><h3>Loading...</h3></div>;
  if (!doctor) return <div style={{ padding: "20px" }}><h3>No doctor details available.</h3></div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Doctor Details</h2>

      <p><strong>Name:</strong> {doctor.name || "N/A"}</p>
      <p><strong>Specialization:</strong> {doctor.specialization || "N/A"}</p>
      <p><strong>Experience:</strong> {doctor.experience ? `${doctor.experience} years` : "N/A"}</p>
      <p><strong>Fees:</strong> {doctor.fees ? `₹${doctor.fees}` : "N/A"}</p>

      {/* show any other fields present */}
      <div style={{ marginTop: 12 }}>
        {Object.keys(doctor)
          .filter((k) => !["_id", "id", "name", "specialization", "experience", "fees", "__v"].includes(k))
          .map((key) => (
            <p key={key}><strong>{key.replace(/_/g, " ")}:</strong> {String(doctor[key] ?? "N/A")}</p>
          ))}
      </div>

      <Link to={`/book/${doctor._id}`}>
        <button style={{ marginTop: 14 }}>Book Appointment</button>
      </Link>
    </div>
  );
}

export default DoctorDetails;