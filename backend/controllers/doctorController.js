const Doctor = require("../models/Doctor");

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.json(doctors);

  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    res.json(doctor);

  } catch (error) {
    res.status(500).json(error);
  }
};

exports.addDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json(doctor);

  } catch (error) {
    res.status(500).json(error);
  }
};