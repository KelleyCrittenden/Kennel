import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'
import {firstLetterCase} from '../../modules/helpers'


          //1. comes into existence but is empty
const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" , city: "", state: "", picture: ""});

          //setting a state so that the User cannot continue to click on buttons while loading
  const [isLoading, setIsLoading] = useState(true);


          //3. looks at state and runs return again
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
            //if props. employeed if the ID is ever changed go back and get the updated employee

  const handleDelete = () => {
                //invoke the delete function in employeeManger and re-direct to the employee list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };
          //2. Look at employeeDetail, it's empty so use effect
  return (
        <div className="card">
            <div className="card-content">

                {/* If employee is an empty string, don't run lines */}
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