//Card that is created when user clicks detail button on Animal card

import React, { useState, useEffect } from 'react';
  //Need both so that state is declared and effect to monitor any changes
  //effect is a reaction to an event, this is a reaction to an API call
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'
import {firstLetterCase} from '../../modules/helpers'


          //1. comes into existence but is empty, 
const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: ""});

        //setting a state so that the User cannot continue to click on buttons while loading
  const [isLoading, setIsLoading] = useState(true);



            //3. looks at state and runs return again
  useEffect(() => {
            //get(id) from AnimalManager and hang on to the data from the API; put it into state
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        picture: animal.picture
      });
            //disables so User cannot keep clicking buttons while loading
      setIsLoading(false);
          });
      }, [props.animalId]);
              //if props.animalId if the ID is ever changed go back and get the updated animal, if user clicks on different animal repeat process


              //invoke the delete function in AnimalManger and re-direct to the animal list.
  const handleDelete = () => {
    setIsLoading(true);
      AnimalManager.delete(props.animalId).then(() =>
              //after delete is clicked the URL is changed so that the new animal list containing all of the animals is visible
        props.history.push("/animals")
    );
  };          


            //2. Look at AnimalDetail, it's empty so use effect
  return (
    <div className="card">
      <div className="card-content">

            {/*If it's not empty and it contains this picture property continue, if it's empty then it stops stop */}
         {(animal.picture !== "") &&
          <picture> 
              <img className="animalImage" src={require (`${animal.picture}`)} alt="Dog" />
          </picture>
          }

         <h3>
          <span style={{ color: "darkslategrey" }}>{firstLetterCase(animal.name)}</span>
        </h3>

        <p>Breed: {animal.breed}</p>
              {/* invoke delete function from above and redirect to updated animaList that does not contain deleted animal */}
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>

      </div>
    </div>
  );
};

export default AnimalDetail;