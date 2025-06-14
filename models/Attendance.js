// === /server/models/Attendance.js ===
const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  date: Date,
  status: { type: String, enum: ["Present", "Absent"], default: "Present" },
});

module.exports = mongoose.model("Attendance", attendanceSchema);