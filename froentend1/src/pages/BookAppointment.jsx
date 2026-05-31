import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

function BookAppointment() {
  const { id } = useParams();

  const [date, setDate] = useState("");

  const bookAppointment = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://hospital-api-back.onrender.com/api/appointments",
        {
          doctorId: id,
          date,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Appointment</h2>

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      <button onClick={bookAppointment}>
        Confirm Appointment
      </button>
    </div>
  );
}

export default BookAppointment;