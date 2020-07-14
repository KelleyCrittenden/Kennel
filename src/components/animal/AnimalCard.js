import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'

//create a card that pulls specific data from the database

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

        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button> </Link>

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
