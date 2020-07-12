import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: "", position: "", picture: "./employee.jpg"});
  const [isLoading, setIsLoading] = useState(false);

            // An Event that everytime a charector is entered into an input field it is stored into the state of this object, and sets a new state
  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

            /*  Local method for validation, set loadingStatus, create animal object, invoke the AnimalManager post method, and redirect to the full animal list
            */
  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employee.name === "" || employee.position === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
            // Create the animal and redirect user to animal list
            EmployeeManager.post(employee)
        .then(() => props.history.push("/employees"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee name"
            />

            <label htmlFor="name">Name</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="position"
              placeholder="Position"
            />

            <label htmlFor="position">Position</label>

          </div>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}>Add Employee
            </button>
          </div>
          
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm