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

  const imageUrl =
    doctor.image ||
    doctor.photo ||
    doctor.avatar ||
    `https://via.placeholder.com/520x520?text=${encodeURIComponent(doctor.name || "Doctor")}`;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Doctor Details</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          marginTop: 20,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            flex: "1 1 320px",
            maxWidth: 360,
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 16px 32px rgba(0, 0, 0, 0.08)",
            background: "#ffffff",
          }}
        >
          <img
            src={imageUrl}
            alt={doctor.name || "Doctor"}
            style={{ width: "100%", height: 320, objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            flex: "2 1 420px",
            minWidth: 280,
            maxWidth: 760,
          }}
        >
          <div
            style={{
              padding: 24,
              borderRadius: 18,
              background: "#ffffff",
              boxShadow: "0 14px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <p style={{ marginBottom: 12 }}>
              <strong>Name:</strong> {doctor.name || "N/A"}
            </p>
            <p style={{ marginBottom: 12 }}>
              <strong>Specialization:</strong> {doctor.specialization || "N/A"}
            </p>
            <p style={{ marginBottom: 12 }}>
              <strong>Experience:</strong>{" "}
              {doctor.experience ? `${doctor.experience} years` : "N/A"}
            </p>
            <p style={{ marginBottom: 20 }}>
              <strong>Fees:</strong>{" "}
              {doctor.fees ? `₹${doctor.fees}` : "N/A"}
            </p>

            {Object.keys(doctor)
              .filter(
                (k) =>
                  !["_id", "id", "name", "specialization", "experience", "fees", "__v", "image", "photo", "avatar"].includes(k)
              )
              .map((key) => (
                <p key={key} style={{ marginBottom: 10 }}>
                  <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                  {String(doctor[key] ?? "N/A")}
                </p>
              ))}

            <Link to={`/book/${doctor._id}`}>
              <button
                style={{
                  marginTop: 16,
                  padding: "12px 18px",
                  borderRadius: 10,
                  border: "none",
                  background: "#007bff",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;