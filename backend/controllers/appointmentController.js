const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  try {
    const appointmentData = {
      doctorId: req.body.doctorId,
      date: req.body.date,
      time: req.body.time,
      patientId: req.user?.id,
    };

    const appointment = await Appointment.create(appointmentData);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.user?.id })
      .populate("patientId")
      .populate("doctorId");

    res.json(appointments);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patientId")
      .populate("doctorId");

    res.json(appointments);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};