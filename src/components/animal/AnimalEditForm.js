//Form that is created when a user clicks on the edit button on the Animal Card

import React, { useState, useEffect } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"
import EmployeeManager from "../../modules/EmployeeManager";

        //Number 2. just setting the state of the items we are going to be changing comes into existence but is empty, 
const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "", employeeId:"" });
          //setting a state so that the User cannot continue to click on buttons while loading
  const [isLoading, setIsLoading] = useState(false);
      //setting state for employees that will be attatched to animals, set as an empty arrray so it can be mapped through looking for matching employee to animal
  const [employees, setEmployees] = useState([]);

            //waiting for User input into input fields, updates animal state everytime a charector is entered
  const handleFieldChange = evt => {
            //changing props of animal, spreads data array
    const stateToChange = { ...animal };
            //value of the input fields
    stateToChange[evt.target.id] = evt.target.value;
            //takes value of stateToChange and sets the Animal as that value
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
            //any kind of input coming back as string, empty string set up above, parses a string into an integer
      employeeId: parseInt(animal.employeeId)
    };

          //using the update(editedAnimal) API call from AnimalManager and edit the animal
    AnimalManager.update(editedAnimal)
          //returning back to the animal list with updated animal list that contains the edits
      .then(() => props.history.push("/animals"))


  }
            //Number 4. going outside our application to database to get details about specific animal
  useEffect(() => {
            //going to AnimalManger using the get API call to get animal by the Id selected by user, just grabbing properties of the single animal id that the user chose to edit
    AnimalManager.get(props.match.params.animalId)
      .then(animal => {
              //getting all of the employee using API call getAll, get employee before you set animal
          EmployeeManager.getAll()
          .then(employees => {
            setEmployees(employees);
                //setting the state of the single animal with attatched employee
            setAnimal(animal);
                //controlling button
            setIsLoading(false);
        })
      });
            //properties match parameter of selected animalid
  }, [props.match.params.animalId]);

            //Number 3. then bounces back to useEffect 
            //Number 5. then runs after useEffect
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
                  //area where user can change name
              type="text"
              //className set for CSS
              required
              className="form-control"
                  //any change entered will trigger the handleFieldChange function
              onChange={handleFieldChange}
              id="name"
                //populates the input field wtih name that matches the animalId
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
                //when submit button is clicked, updateExistingAnimal runs
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