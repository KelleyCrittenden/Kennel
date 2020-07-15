import React, { useState, useEffect } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"
import LocationManager from "../../modules/LocationManager"

      //Number 2. just setting the state of the items we are going to be changing
const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({ name: "", position: "", picture: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([]);

      //waiting for input into input fields
  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

      //actually happens when we click the save button
  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

        // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      position: employee.position,
      picture: employee.picture,
        //any kind of input coming back as string
      locationId: parseInt(employee.locationId)
    };

    EmployeeManager.update(editedEmployee)
      .then(() => props.history.push("/employees"))
  }

          //Number 4. going outside our application to database to get details about specific employee
   useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId)
      .then(employee => {
              //getting all of the locations using API call
          LocationManager.getAll()
          .then(locations => {
            setLocations(locations);
                //get locations before you set employees
            setEmployee(employee);
                //controlling button
            setIsLoading(false);
        })
      });
  }, [props.match.params.employeeId]);


            //Number 3. then bounces back to useEffect 
            //Number 5. then runs after useEffect
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="position"
              value={employee.position}
            />
            <label htmlFor="position">Position</label>
          </div>

          <label htmlFor="locationId">Location</label>

          <select
            className="form-control"
                //current location, value equals whatever comes back on employee
            id="locationId"
            value={employee.locationId}
            onChange={handleFieldChange}
           >

            {locations.map(location =>
                //map through for list of locations for drop down menu
            <option 
            key={location.id} 
            value={location.id}>
                {/* what displays in list */}
                {location.name}
        </option>
            )}
        </select>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>

        </fieldset>
      </form>
    </>
  );
}

export default EmployeeEditForm