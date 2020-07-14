import React, { useState, useEffect } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

        //Number 2. just setting the state of the items we are going to be changing
const LocationEditForm = props => {
  const [location, setLocation] = useState({ name: "", address: "", city: "", state: "", picture: "" });
  const [isLoading, setIsLoading] = useState(false);
        //waiting for input into input fields
  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

        //actually happens when we click the save button
  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

        // This is an edit, so we need the id
    const editedLocation = {
      id: props.match.params.locationId,
      name: location.name,
      address: location.address,
      city: location.city,
      state: location.state,
      picture: location.picture
    };

    LocationManager.update(editedLocation)
      .then(() => props.history.push("/locations"))
  }
        //Number 4. going outside our application to database to get details about specific location
  useEffect(() => {
    LocationManager.get(props.match.params.locationId)
      .then(location => {
        setLocation(location);
        //controlling button so it isn't pressed repeatedly
        setIsLoading(false);
      });
  }, []);

        //Number 3. then bounces back to useEffect 
        //Number 5. then runs after useEffect
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={location.name}
            />
            <label htmlFor="name">Name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={location.address}
            />
            <label htmlFor="address">Address</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="city"
              value={location.city}
            />
            <label htmlFor="city">City</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="state"
              value={location.state}
            />
            <label htmlFor="state">State</label>

          </div>
          
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >Submit</button>
          </div>


        </fieldset>
      </form>
    </>
  );
}

export default LocationEditForm