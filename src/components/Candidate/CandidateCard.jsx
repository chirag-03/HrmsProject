// === /client/src/components/Candidate/CandidateCard.jsx ===
import React from "react";
import "../../styles/Candidate.css";
import axios from "../../api/axios";

const CandidateCard = ({ candidate, onMove }) => {
  const handleDownload = async () => {
    try {
      const res = await axios.get(`/candidates/${candidate._id}/resume`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${candidate.name}_resume.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <div className="candidate-card">
      <h3>{candidate.name}</h3>
      <p>Email: {candidate.email}</p>
      {candidate.position && <p>Position: {candidate.position}</p>}
      <div className="card-actions">
        <button onClick={handleDownload}>Download Resume</button>
        <button onClick={onMove}>Hire</button>
      </div>
    </div>
  );
};

export default CandidateCard;