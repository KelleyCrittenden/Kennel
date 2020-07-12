import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "./dog.svg"});
  const [isLoading, setIsLoading] = useState(false);

            // An Event that everytime a charector is entered into an input field it is stored into the state of this object, and sets a new state
  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

            /*  Local method for validation, set loadingStatus, create animal object, invoke the AnimalManager post method, and redirect to the full animal list
            */
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
            // Create the animal and redirect user to animal list
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
