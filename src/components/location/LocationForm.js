import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'

const LocationForm = props => {
  const [location, setLocation] = useState({ name: "", position: "", picture: "./location.jpg"});
  const [isLoading, setIsLoading] = useState(false);

            // An Event that everytime a charector is entered into an input field it is stored into the state of this object, and sets a new state
  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

            /*  Local method for validation, set loadingStatus, create location object, invoke the LocationsManager post method, and redirect to the full location list
            */

            //window alert for empty input fields
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.name === "" || location.address === "" || location.city === "" || location.state === "") {
      window.alert("Please input location name, address, city and state");
    } else {
      setIsLoading(true);
            // Create the location and redirect user to employee list
            LocationManager.post(location)
        .then(() => props.history.push("/locations"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Location Name"
            />

            <label htmlFor="name">Name</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Location Address"
            />

            <label htmlFor="address">Address</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="city"
              placeholder="Location City"
            />

            <label htmlFor="city">City</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="state"
              placeholder="Location State"
            />

            <label htmlFor="state">State</label>

          </div>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}>Add Location
            </button>
          </div>
          
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm