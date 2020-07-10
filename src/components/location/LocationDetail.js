import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" , city: "", state: ""});

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          city: location.city,
          state: location.state
        });
      });
  }, [props.locationId]);

  return (
        <div className="card">
            <div className="card-content">

            <h3>
                <span className="card-locationName" style={{ color: 'darkslategrey' }}>{location.name}</span>
                </h3>

                <p>Address: {location.address}
                </p>

                <p>City: {location.city}
                </p>

                <p>State: {location.state}
                </p>

            </div>
        </div>
);
};

export default LocationDetail;