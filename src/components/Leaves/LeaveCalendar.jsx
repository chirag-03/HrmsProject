// === /client/src/components/Leaves/LeaveCalendar.jsx ===
import React from "react";
import "../../styles/Leave.css";

const LeaveCalendar = ({ approvedLeaves }) => {
  return (
    <div className="leave-calendar">
      <h3>Approved Leaves Calendar</h3>
      <ul>
        {approvedLeaves.map((leave, index) => (
          <li key={index}>{leave.date} - {leave.employeeName}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveCalendar;
