import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  const imageUrl =
    doctor.image ||
    doctor.photo ||
    doctor.avatar ||
    `https://via.placeholder.com/420x260?text=${encodeURIComponent(doctor.name || "Doctor")}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 16,
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 14px 30px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
      }}
    >
      <div style={{ minHeight: 180, overflow: "hidden" }}>
        <img
          src={imageUrl}
          alt={doctor.name || "Doctor"}
          style={{ width: "100%", height: 180, objectFit: "cover" }}
        />
      </div>

      <div style={{ padding: 18, flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ margin: 0, marginBottom: 10 }}>{doctor.name}</h3>
        <p style={{ margin: 0, color: "#555", marginBottom: 16 }}>
          {doctor.specialization}
        </p>

        <div style={{ marginTop: "auto" }}>
          <Link to={`/doctor/${doctor._id}`}>
            <button
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 10,
                border: "none",
                background: "#007bff",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;