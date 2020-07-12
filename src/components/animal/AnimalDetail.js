import React, { useState, useEffect } from 'react';
  //Need both so that state is declared and effect to monitor any changes
  //effect is a reaction to an event, this is a reaction to an API call
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'
import {firstLetterCase} from '../../modules/helpers'


          //1. comes into existence but is empty
const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: ""});

  //setting a state so that the User cannot continue to click on buttons while loading
  const [isLoading, setIsLoading] = useState(true);



          //3. looks at state and runs return again
  useEffect(() => {
          //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        picture: animal.picture
      });
      setIsLoading(false);
          });
      }, [props.animalId]);
          //if props.animalId if the ID is ever changed go back and get the updated animal

  const handleDelete = () => {
            //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
      AnimalManager.delete(props.animalId).then(() =>
        props.history.push("/animals")
    );
  };          


      //2. Look at AnimalDetail, it's empty so use effect
  return (
    <div className="card">
      <div className="card-content">

         {(animal.picture !== "") &&
          <picture> 
              <img className="animalImage" src={require (`${animal.picture}`)} alt="Dog" />
          </picture>
          }

         <h3>
          <span style={{ color: "darkslategrey" }}>{firstLetterCase(animal.name)}</span>
        </h3>

        <p>Breed: {animal.breed}</p>

        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>

      </div>
    </div>
  );
};

export default AnimalDetail;