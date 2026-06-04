const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  bookAppointment,
  getAppointments,
  getAllAppointments,
  deleteAppointment,
} = require("../controllers/appointmentController");

router.post("/", authMiddleware, bookAppointment);
router.get("/", authMiddleware, getAppointments);
router.get("/all", authMiddleware, adminMiddleware, getAllAppointments);
router.delete("/:id", authMiddleware, adminMiddleware, deleteAppointment);

module.exports = router;