const Attendance = require("../models/Attendance");

exports.getAllAttendance = async (req, res) => {
  try {
    const records = await Attendance.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAttendance = async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;
    const attendance = new Attendance({ employeeId, date, status });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
