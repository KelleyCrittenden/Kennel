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

        <h5 className="card-locationName">{props.locations.address}
        </h5>

        <h5 className="card-locationName">{props.locations.city}, {props.locations.state}
        </h5>

        {props.hasUser
        ? <button type="button"
        onClick={() => { props.history.push(`/locations/${props.locations.id}/employees`) }}>Staff</button>
        : null}

        {props.hasUser
        ?<button 
          type="button" 
          onClick={() => props.deleteLocation(props.locations.id)}>
          Close Location</button>
               : null}
        
        {props.hasUser
        ?<button 
            type="button"
            onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
          Edit
        </button>
           : null}


      </div>
    </div>
  );
};

export default LocationCard;