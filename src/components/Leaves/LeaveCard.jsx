// === /client/src/components/Leave/LeaveCard.jsx ===
import React from "react";
import "../../styles/Leave.css";

const LeaveCard = ({ leave, onDownload }) => {
  return (
    <div className="leave-card">
      <h4>{leave.employeeName}</h4>
      <p>Status: {leave.status}</p>
      <p>From: {leave.startDate}</p>
      <p>To: {leave.endDate}</p>
      <button onClick={() => onDownload(leave._id)}>Download Doc</button>
    </div>
  );
};

export default LeaveCard;