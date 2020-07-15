import React from "react";
import "./Location.css";
import {firstLetterCase} from '../../modules/helpers'


//create a card that pulls specific data from the database

const LocationCard = (props) => {
  return (
    <div className="card">

      <div className="card-content">

      <picture>
          <img className="locationImage" src={require (`${props.locations.picture}`)} alt="Building" />
        </picture>

        <h3>
          <span className="card-locationName">{firstLetterCase(props.locations.name)}</span>
        </h3>

        <button type="button"
        onClick={() => { props.history.push(`/locations/${props.locations.id}/employees`) }}>Staff</button>

        <button 
          type="button" 
          onClick={() => props.deleteLocation(props.locations.id)}>
          Close Location</button>
        

        <button 
            type="button"
            onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
          Edit
        </button>

      </div>
    </div>
  );
};

export default LocationCard;