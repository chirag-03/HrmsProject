// === /client/src/components/Employee/EmployeeCard.jsx ===
import React from "react";
import "../../styles/Employee.css";

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Role: {employee.role}</p>
      <div className="card-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default EmployeeCard;