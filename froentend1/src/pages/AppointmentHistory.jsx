import { useEffect, useState } from "react";
import axios from "axios";

function AppointmentHistory() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hospital-api-back.onrender.com/api/appointments",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setAppointments(res.data || []);
      } catch (err) {
        setError("Failed to load appointments.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Loading appointments...</div>;
  if (error) return <div style={{ padding: 20 }}>{error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Appointment History</h2>

      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Patient</th>
              <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Doctor</th>
              <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Specialization</th>
              <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Date</th>
              <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Time</th>
              <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a._id}>
                <td style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>{a.patientId?.name || "-"}</td>
                <td style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>{a.doctorId?.name || "-"}</td>
                <td style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>{a.doctorId?.specialization || "-"}</td>
                <td style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>{a.date}</td>
                <td style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>{a.time}</td>
                <td style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AppointmentHistory;