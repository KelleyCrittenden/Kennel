import React, { useState, useEffect } from 'react';
  //Need both so that state is declared and effect to monitor any changes
  //effect is a reaction to an event, this is a reaction to an API call
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'


          //1. comes into existence but is empty
const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });

          //3. looks at state and runs return again
  useEffect(() => {
          //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
        });
      });
  }, [props.animalId]);

        //2. Look at AnimalDetail, it's empty so use effect
  return (
    <div className="card">
      <div className="card-content">

      <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>

        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>

        <p>Breed: {animal.breed}</p>

      </div>
    </div>
  );
}

export default AnimalDetail;