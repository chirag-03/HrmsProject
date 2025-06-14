// === /server/models/Employee.js ===
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, default: "Employee" },
  resumePath: String,
});

module.exports = mongoose.model("Employee", employeeSchema);