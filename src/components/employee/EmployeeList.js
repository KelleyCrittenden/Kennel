import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';


const EmployeeList = (props) => {
  // The initial state is an empty array
  //   what I'm keeping track of, then what function using to update the state of the itme I'm keepting track of
  const [employees, setEmployees] = useState([]);


//getting all the employees from the API
  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return EmployeeManager.getAll().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  const deleteEmployee = id => {
    EmployeeManager.delete(id)
      .then(() => EmployeeManager.getAll().then(setEmployees));
  };

      // got the employees from the API on the component's first render
      // react hook function what happens when a change is made to state
  useEffect(() => {
    getEmployees();
  }, []);

      // Finally we use map() to "loop over" the employees array to show a list of employee cards
  return (
    <>
    <section className="section-content">
      <button type="button"
        className="btn"
        onClick={() => {props.history.push("/employees/new")}}>
        Add New Employee
     </button>
    </section>
    
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard 
                              key={employee.id} 
                              employee={employee} 
                              id={employee.id}
                              deleteEmployee={deleteEmployee} 
                              {...props}/>)}
    </div>
    </>
  );
  
};

export default EmployeeList