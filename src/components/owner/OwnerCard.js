import React from "react";
import "./Owner.css";

//create a card that pulls specific data from the database

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <picture>
          <img className="ownerImage" src={require (`${props.owner.picture}`)} alt="My Dog" />
        </picture>
          
        <h3>
          Owner: <span className="card-ownerName">{props.owner.name}</span>
        </h3>

        <p>Phone Number: {props.owner.phoneNumber}
        </p>

        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Delete</button>

      </div>
    </div>
  );
};

export default OwnerCard; 