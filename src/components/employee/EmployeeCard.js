import React from "react";
import "./Employee.css";
import {firstLetterCase} from '../../modules/helpers'

//create a card that pulls specific data from the database

const EmployeeCard = (props) => {
  return (
    <div className="card">

      <div className="card-content">

        <picture>
          <img className="employeeImage" src={require (`${props.employee.picture}`)} alt="Worker" />
        </picture>

        <h3>
          <span className="card-employeeName">{firstLetterCase(props.employee.name)}</span>
        </h3>

        <button 
          type="button"
          onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Animals</button>

        <button 
          type="button" 
          onClick={() => props.deleteEmployee(props.employee.id)}>Terminate</button>

        <button 
          type="button"
          onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
          Edit
        </button>

        

      </div>
    </div>
  );
};

export default EmployeeCard;






