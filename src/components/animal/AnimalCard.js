import React from "react";
import "./Animal.css";


const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="animalImage" src={require (`${props.animal.picture}`)} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petName">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}
        </p>
      </div>
    </div>
  );
};

export default AnimalCard;
