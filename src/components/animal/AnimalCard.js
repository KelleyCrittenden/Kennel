//Creates a single animal card

import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'

//create a main card that pulls specific data from the database

//function that calls props then returns the props into the card using JSX
const AnimalCard = (props) => {
  return (
    <div className="card">

      <div className="card-content">

        <picture>
          <img className="animalImage" src={require (`${props.animal.picture}`)} alt="Dog" />
        </picture>

        <h3>
          <span className="card-petName">{firstLetterCase(props.animal.name)}</span>
        </h3>

              {/* changing the URL in the brownser to http://localhost:3000/animals/1, and the detail component for the animal will render. Link to the detail form, not a functional button like delete */}

        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button> </Link>

              {/* Deleting animal using the delete function from animalList */}
              
        <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
        

        <button 
          type="button"
          onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
          Edit
        </button>
        
      </div>
    </div>
  );
};

export default AnimalCard;
