const Candidate = require("../models/Candidate");
const path = require("path");

exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCandidate = async (req, res) => {
  try {
    const { name, email } = req.body;
    const candidate = new Candidate({ name, email, resumePath: "resumes/sample.pdf" });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.downloadResume = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate || !candidate.resumePath) return res.status(404).send("Resume not found");
    const filePath = path.join(__dirname, "..", candidate.resumePath);
    res.download(filePath);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
