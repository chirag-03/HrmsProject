// === /server/models/Candidate.js ===
const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  resumePath: String,
});

module.exports = mongoose.model("Candidate", candidateSchema);