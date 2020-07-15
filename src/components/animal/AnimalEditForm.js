import React, { useState, useEffect } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"
import EmployeeManager from "../../modules/EmployeeManager";

        //Number 2. just setting the state of the items we are going to be changing
const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "", employeeId:"" });
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

            //waiting for input into input fields
  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

            //actually happens when we click the save button
  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

            // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      picture: animal.picture,
        //any kind of input coming back as string
      employeeId: parseInt(animal.employeeId)
    };

    AnimalManager.update(editedAnimal)
      .then(() => props.history.push("/animals"))
  }
            //Number 4. going outside our application to database to get details about specific animal
  useEffect(() => {
    AnimalManager.get(props.match.params.animalId)
      .then(animal => {
            //getting all of the employees using API call
          EmployeeManager.getAll()
          .then(employees => {
            setEmployees(employees);
                //get employees before you set animals
            setAnimal(animal);
                //controlling button
            setIsLoading(false);
        })
      });
  }, [props.match.params.animalId]);

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
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          

          <label htmlFor="employeeId">Employee </label>

          <select
            className="form-control"
                //current employee, value equals whatever comes back on animal
            id="employeeId"
            value={animal.employeeId}
            onChange={handleFieldChange}
           >

            {employees.map(employee =>
            //map through for list of employees for drop down menu
            <option 
            key={employee.id} 
            value={employee.id}>
                {/* what displays in list */}
                {employee.name}
        </option>
            )}
        </select>
        </div>

          <div className="alignRight">
            <button
              type="button" 
              disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>

          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm