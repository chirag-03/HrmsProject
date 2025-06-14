// === /client/src/components/Leaves/LeaveForm.jsx ===
import React, { useState } from "react";
import "../../styles/Leave.css";

const LeaveForm = ({ onSubmit }) => {
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, reason });
    setDate("");
    setReason("");
  };

  return (
    <form className="leave-form" onSubmit={handleSubmit}>
      <h3>Request Leave</h3>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeaveForm;

