// === /client/src/components/Candidate/CreateCandidateForm.jsx ===
import React, { useState } from "react";
import axios from "../../api/axios";
import "../../styles/Candidate.css";

const CreateCandidateForm = ({ onCreated }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/candidates", { name, email, position });
      setName("");
      setEmail("");
      setPosition("");
      onCreated();
    } catch (err) {
      console.error("Create candidate failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Add Candidate"}
      </button>
    </form>
  );
};

export default CreateCandidateForm;
