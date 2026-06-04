import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    fees: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const headers = { Authorization: token };

  const fetchDoctors = async () => {
    try {
      const res = await axios.get("https://hospital-api-back.onrender.com/api/doctors");
      setDoctors(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load doctor list.");
    }
  };

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("https://hospital-api-back.onrender.com/api/appointments/all", {
        headers,
      });
      setAppointments(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load appointment history.");
    }
  };

  useEffect(() => {
    fetchDoctors();
    fetchAppointments();
  }, []);

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "https://hospital-api-back.onrender.com/api/doctors",
        {
          name: form.name,
          specialization: form.specialization,
          experience: form.experience,
          fees: Number(form.fees),
        },
        { headers }
      );

      setMessage(`Doctor ${res.data.name} added successfully.`);
      setForm({ name: "", specialization: "", experience: "", fees: "" });
      fetchDoctors();
    } catch (err) {
      console.error(err);
      setError("Could not add doctor. Please check the details and try again.");
    }
  };

  const handleDeleteDoctor = async (id) => {
    try {
      await axios.delete(`https://hospital-api-back.onrender.com/api/doctors/${id}`, {
        headers,
      });
      setMessage("Doctor deleted successfully.");
      fetchDoctors();
    } catch (err) {
      console.error(err);
      setError("Unable to delete doctor.");
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      await axios.delete(`https://hospital-api-back.onrender.com/api/appointments/${id}`, {
        headers,
      });
      setMessage("Appointment removed successfully.");
      fetchAppointments();
    } catch (err) {
      console.error(err);
      setError("Unable to delete appointment.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      <p>Welcome, Admin. Manage doctors and appointment history from here.</p>

      {message && <div style={{ marginBottom: 16, color: "green" }}>{message}</div>}
      {error && <div style={{ marginBottom: 16, color: "red" }}>{error}</div>}

      <section style={{ marginBottom: 30 }}>
        <h3>Doctor Management</h3>
        <form onSubmit={handleAddDoctor} style={{ display: "grid", gap: 12, maxWidth: 500 }}>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Doctor Name"
            required
          />
          <input
            value={form.specialization}
            onChange={(e) => setForm({ ...form, specialization: e.target.value })}
            placeholder="Specialization"
            required
          />
          <input
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
            placeholder="Experience (years)"
            required
          />
          <input
            value={form.fees}
            onChange={(e) => setForm({ ...form, fees: e.target.value })}
            placeholder="Consultation Fees"
            type="number"
            required
          />
          <button type="submit" style={{ width: "fit-content", padding: "10px 18px" }}>
            Add Doctor
          </button>
        </form>

        <div style={{ marginTop: 24 }}>
          <h4>Existing Doctors</h4>
          {doctors.length === 0 ? (
            <p>No doctors found.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, maxWidth: 760 }}>
              {doctors.map((doc) => (
                <li key={doc._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12, borderBottom: "1px solid #eee" }}>
                  <span>{doc.name} — {doc.specialization} ({doc.experience} yrs, ₹{doc.fees})</span>
                  <button onClick={() => handleDeleteDoctor(doc._id)} style={{ padding: "6px 12px" }}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section>
        <h3>Appointment History Management</h3>
        {appointments.length === 0 ? (
          <p>No appointments available.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", maxWidth: 1000 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Patient</th>
                <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Doctor</th>
                <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Specialization</th>
                <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Date</th>
                <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Time</th>
                <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Status</th>
                <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Action</th>
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
                  <td style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>
                    <button onClick={() => handleDeleteAppointment(a._id)} style={{ padding: "6px 12px" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;