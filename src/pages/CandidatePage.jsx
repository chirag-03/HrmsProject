import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "../styles/Candidate.css";

const CandidatePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("/candidates", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCandidates(res.data);
    };
    fetchCandidates();
  }, []);

  const filtered = candidates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="candidate-page">
      <h2>Candidates</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="candidate-list">
        {filtered.map((c) => (
          <div className="candidate-card" key={c._id}>
            <h3>{c.name}</h3>
            <p>Email: {c.email}</p>
            <p>Position: {c.position}</p>
            <a href={c.resumeUrl} target="_blank" rel="noreferrer">Download Resume</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatePage;

// === /client/src/styles/Candidate.css ===

// .candidate-page {
//   padding: 2rem;
//   max-width: 960px;
//   margin: 0 auto;
// }

// .candidate-page h2 {
//   text-align: center;
//   margin-bottom: 1rem;
// }

// .search-input {
//   width: 100%;
//   padding: 0.75rem;
//   margin-bottom: 2rem;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   font-size: 1rem;
// }

// .candidate-list {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 1rem;
// }

// .candidate-card {
//   background: #fff;
//   border-radius: 10px;
//   padding: 1.5rem;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// }

// .candidate-card h3 {
//   margin-top: 0;
// }

// .candidate-card a {
//   display: inline-block;
//   margin-top: 0.5rem;
//   color: #007bff;
//   text-decoration: none;
// }

// .candidate-card a:hover {
//   text-decoration: underline;
// }

// @media screen and (max-width: 600px) {
//   .candidate-page {
//     padding: 1rem;
//   }

//   .search-input {
//     font-size: 0.9rem;
//   }

//   .candidate-card {
//     padding: 1rem;
//   }
// }