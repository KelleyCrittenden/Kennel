//Empty Form that is created when a user clicks the Add New Animal Button in the Animals page

import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'

const AnimalForm = props => {
          //setting properties as empty with default image
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "./dog.svg"});
          //disabiling buttong while it's loading
  const [isLoading, setIsLoading] = useState(false);

            //waiting for User input into input fields, updates animal state everytime a charector is entered
  const handleFieldChange = evt => {
            //changing props of animal, spreads data array
    const stateToChange = { ...animal };
            //value of the input fields
    stateToChange[evt.target.id] = evt.target.value;
            //takes value of stateToChange and sets the Animal as that value
    setAnimal(stateToChange);
  };

            /*  Local method for validation, set loadingStatus, create animal object, invoke the AnimalManager post method, and redirect to the full animal list
            */
  const constructNewAnimal = evt => {
    evt.preventDefault();
        //if user leaves any field empty, window alert appears
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
            // Create the animal with the API call post(animal) in the AnimalManager and redirect user to animal list
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
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
              placeholder="Animal name"
            />

            <label htmlFor="name">Name</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />

            <label htmlFor="breed">Breed</label>
            
          </div>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}>Submit
            </button>
          </div>

        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm
