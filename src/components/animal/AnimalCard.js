import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";


const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="animalImage" src={require (`${props.animal.picture}`)} alt="Running Dog" />
        </picture>
        <h3>
          Name: <span className="card-petName">{props.animal.name}</span>
        </h3>

        <p>Breed: {props.animal.breed}
        </p>

        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>

        <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>

        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;
