const router = require("express").Router();

const {
  getDoctors,
  getDoctorById,
  addDoctor,
} = require("../controllers/doctorController");

router.get("/", getDoctors);
router.get("/:id", getDoctorById);
router.post("/", addDoctor);

module.exports = router;