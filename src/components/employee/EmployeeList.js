import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = () => {
  // The initial state is an empty array
  //   what I'm keeping track of, then what function using to update the state of the itme I'm keepting track of
  const [employees, setEmployees] = useState([]);


//getting all the employees from the API
  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return EmployeeManager.getAll().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  // react hook function what happens when a change is made to state
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} id={employee.id}/>)}
    </div>
  );
};
export default EmployeeList