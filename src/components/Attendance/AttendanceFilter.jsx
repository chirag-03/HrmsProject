// === /client/src/components/Attendance/AttendanceFilter.jsx ===
import React from "react";
import "../../styles/Attendance.css";

const AttendanceFilter = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      className="attendance-search"
      placeholder="Search by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default AttendanceFilter;
