const Leave = require("../models/Leave");

exports.getApprovedLeaves = async (req, res) => {
  try {
    const approved = await Leave.find({ status: "Approved" });
    res.json(approved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLeave = async (req, res) => {
  try {
    const { employeeId, date, reason, docPath, status } = req.body;
    const leave = new Leave({ employeeId, date, reason, docPath, status });
    await leave.save();
    res.status(201).json(leave);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLeave = async (req, res) => {
  try {
    const updated = await Leave.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
