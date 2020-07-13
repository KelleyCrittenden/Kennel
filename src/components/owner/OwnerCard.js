import React from "react";
import "./Owner.css";
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'

//create a card that pulls specific data from the database

const OwnerCard = (props) => {
  return (
    <div className="card">

      <div className="card-content">

        <picture>
          <img className="ownerImage" src={require (`${props.owner.picture}`)} alt="Owner" />
        </picture>

        <h3>
          <span className="card-ownerName">{firstLetterCase(props.owner.name)}</span>
        </h3>

        <Link to={`/owners/${props.owner.id}`}>
          <button>Details</button> </Link>

        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
        

      </div>
    </div>
  );
};

export default OwnerCard;