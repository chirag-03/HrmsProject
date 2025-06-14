// === /client/src/components/Employee/EmployeeList.jsx ===
import React from "react";
import EmployeeCard from "./EmployeeCard";
import "../../styles/Employee.css";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="employee-list">
      {employees.map((emp) => (
        <EmployeeCard
          key={emp._id}
          employee={emp}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
