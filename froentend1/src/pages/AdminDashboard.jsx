function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      <p>Welcome, Admin. Manage doctors, appointments, and site settings from here.</p>

      <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
        <div style={{ padding: 18, borderRadius: 12, background: "#f4f7ff", border: "1px solid #dbe4ff" }}>
          <h3>Doctor Management</h3>
          <p>Add, edit, or remove doctor profiles and availability.</p>
        </div>
        <div style={{ padding: 18, borderRadius: 12, background: "#f4f7ff", border: "1px solid #dbe4ff" }}>
          <h3>Appointment Control</h3>
          <p>Review bookings, approve appointment requests, and view schedules.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;