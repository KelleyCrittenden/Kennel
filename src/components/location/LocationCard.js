import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'

//create a card that pulls specific data from the database

const LocationCard = (props) => {
  return (
    <div className="card">

      <div className="card-content">

      <picture>
          <img className="locationImage" src={require (`${props.location.picture}`)} alt="Location" />
        </picture>

        <h3>
          <span className="card-locationName">{firstLetterCase(props.location.name)}</span>
        </h3>

        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>

        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
        </Link>

      </div>
    </div>
  );
};

export default LocationCard;