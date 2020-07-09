import React from "react";
import "./Location.css";

//create a card that pulls specific data from the database

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">

        <h3>
          <span className="card-locationName">{props.location.name}</span>
        </h3>

        <p>Address: {props.location.address}
        </p>

        <p>City: {props.location.city}
        </p>

        <p>State: {props.location.state}
        </p>

      </div>
    </div>
  );
};

export default LocationCard;