import { useParams, Link } from "react-router-dom";

function DoctorDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Doctor Details</h2>

      <p>Doctor ID: {id}</p>

      <Link to={`/book/${id}`}>
        <button>Book Appointment</button>
      </Link>
    </div>
  );
}

export default DoctorDetails;