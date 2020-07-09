import React from "react";
import "./Employee.css";

//create a card that pulls specific data from the database

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <picture>
          <img src={require (`${props.employee.picture}`)} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-employeeName">{props.employee.name}</span>
        </h3>
        <p>Position: {props.employee.position}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;






