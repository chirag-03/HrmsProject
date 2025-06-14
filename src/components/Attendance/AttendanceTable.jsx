// === /client/src/components/Attendance/AttendanceTable.jsx ===
import React from "react";
import AttendanceRow from "./AttendanceRow";
import "../../styles/Attendance.css";

const AttendanceTable = ({ employees, attendanceMap, onToggle }) => {
  return (
    <div className="attendance-table">
      {employees.map((employee) => (
        <AttendanceRow
          key={employee._id}
          employee={employee}
          present={attendanceMap[employee._id] || false}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default AttendanceTable;
