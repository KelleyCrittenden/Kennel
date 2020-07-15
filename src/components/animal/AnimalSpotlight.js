import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

        //2. bringing in props from parent, defining useState
const AnimalSpotlight = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: ""});


        //4. Looking at props, new props being passed everytime the button is pushed. Grabbing from the database, run this everytime we see a change in props.animalId, causes returns to run again
  useEffect(() => {
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        picture: animal.picture
      });
    });
  }, [props.animalId]);


        //Step 3. displays image, Looking for required info, goes back to useEffect

        //Step 5. Runs after data is grabbed from useEffect 
  return (
    <div className="animal-spotlight">
         {(animal.picture !== "") &&
          <picture> 
              <img className="animalImage" src={require (`${animal.picture}`)} alt="Dog" />
          </picture>
          }
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;