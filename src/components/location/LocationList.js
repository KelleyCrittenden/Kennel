import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';


const LocationList = (props) => {
  // The initial state is an empty array
  //   what I'm keeping track of, then what function using to update the state of the itme I'm keepting track of
  const [locations, setLocations] = useState([]);


//getting all the locations from the API
  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the set Locations function to update state
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const deleteLocation = id => {
    LocationManager.delete(id)
      .then(() => LocationManager.getAll().then(setLocations));
  };

      // got the locations from the API on the component's first render
      // react hook function what happens when a change is made to state
  useEffect(() => {
    getLocations();
  }, []);

      // Finally we use map() to "loop over" the locations array to show a list of location cards
  return (
    <>
    <section className="section-content">
      <button type="button"
        className="btn"
        onClick={() => {props.history.push("/locations/new")}}>
        Add New Location
     </button>
    </section>
    
    <div className="container-cards">
      {locations.map(location => <LocationCard 
                              key={location.id} 
                              locations={location} 
                              id={location.id}
                              deleteLocation={deleteLocation}
                              {...props} />)}
    </div>
    </>
  );
  
};

export default LocationList