import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>

      <Link to={`/doctor/${doctor._id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default DoctorCard;