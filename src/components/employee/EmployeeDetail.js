import React, { useState, useEffect } from 'react';
  //Need both so that state is declared and effect to monitor any changes
  //effect is a reaction to an event, this is a reaction to an API call
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'
import {firstLetterCase} from '../../modules/helpers'


          //1. comes into existence but is empty
const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({ name: "", position: "", picture: ""});

  //setting a state so that the User cannot continue to click on buttons while loading
  const [isLoading, setIsLoading] = useState(true);



          //3. looks at state and runs return again
  useEffect(() => {
          //get(id) from AnimalManager and hang on to the data; put it into state
          EmployeeManager.get(props.employeeId)
          .then(employee => {
            setEmployee({
                name: employee.name,
                position: employee.position,
                picture: employee.picture
            });
      setIsLoading(false);
          });
      }, [props.employeeId]);
          //if props.animalId if the ID is ever changed go back and get the updated animal

  const handleDelete = () => {
            //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    EmployeeManager.delete(props.employeeId).then(() =>
        props.history.push("/employees")
    );
  };          


      //2. Look at AnimalDetail, it's empty so use effect
  return (
    <div className="card">
      <div className="card-content">

         {(employee.picture !== "") &&
          <picture> 
              <img className="employeeImage" src={require (`${employee.picture}`)} alt="Worker" />
          </picture>
          }

         <h3>
          <span style={{ color: "darkslategrey" }}>{firstLetterCase(employee.name)}</span>
        </h3>

        <p>Position: {employee.position}</p>

        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Terminate
        </button>

      </div>
    </div>
  );
};

export default EmployeeDetail;