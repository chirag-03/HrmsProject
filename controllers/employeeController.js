const Employee = require("../models/Employee");
const Candidate = require("../models/Candidate");

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.convertFromCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) return res.status(404).json({ error: "Candidate not found" });

    const employee = new Employee({
      name: candidate.name,
      email: candidate.email,
      role: "New Hire",
      resumePath: candidate.resumePath,
    });

    await employee.save();
    await candidate.deleteOne();

    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};