import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'
import {firstLetterCase} from '../../modules/helpers'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" , city: "", state: "", picture: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          city: location.city,
          state: location.state,
          picture: location.picture
        });
        setIsLoading(false);
      });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
        <div className="card">
            <div className="card-content">


            {(location.picture !== "") &&
              <picture> 
                  <img className="locationImage" src={require (`${location.picture}`)} alt="Location" />
              </picture>
              }

            <h3>
                <span className="card-locationName" style={{ color: 'darkslategrey' }}>{firstLetterCase (location.name)}</span>
                </h3>

                <p>Address: {location.address}
                </p>

                <p>City: {location.city}
                </p>

                <p>State: {location.state}
                </p>

                <button type="button" disabled={isLoading} onClick={handleDelete}>
                Close Location
                </button>

            </div>
        </div>
);
};

export default LocationDetail;