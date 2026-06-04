import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

function BookAppointment() {
  const { id } = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const formatTimeToAmPm = (value) => {
    if (!value) return "";
    const [hours, minutes] = value.split(":");
    const h = parseInt(hours, 10);
    const suffix = h >= 12 ? "PM" : "AM";
    const adjusted = ((h + 11) % 12) + 1;
    return `${adjusted}:${minutes} ${suffix}`;
  };

  const bookAppointment = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://hospital-api-back.onrender.com/api/appointments",
        {
          doctorId: id,
          date,
          time: formatTimeToAmPm(time),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("Appointment booked successfully.");
    } catch (error) {
      console.log(error);
      alert("Could not book the appointment. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: 420 }}>
      <h2>Book Appointment</h2>

      <label style={{ display: "block", marginBottom: 14 }}>
        Date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: "100%", marginTop: 8 }}
        />
      </label>

      <label style={{ display: "block", marginBottom: 20 }}>
        Time
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{ width: "100%", marginTop: 8 }}
        />
      </label>

      <button onClick={bookAppointment} style={{ padding: "10px 20px" }}>
        Confirm Appointment
      </button>
    </div>
  );
}

export default BookAppointment;