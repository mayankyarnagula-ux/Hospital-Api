const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    const doctors = await Doctor.find();
    const appointments = await Appointment.find()
      .populate("patientId")
      .populate("doctorId");

    res.json({
      users,
      doctors,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});