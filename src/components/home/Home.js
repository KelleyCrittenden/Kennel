import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import AnimalManager from "../../modules/AnimalManager";

      //Number 1. taking spotlightId, relates to one animal so that we can grab it, useState set to 0 as a placeholder, means that it is false bc we will never have a 0 id
const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);


      //4. Number new function, then sets state value, gets random id then sets state when this changes it cause the return to run again
  const refreshSpotlightAnimal = () => {
    AnimalManager.getRandomId().then(setSpotlightId);
  };

      //Number 3. calling and running function, with empty depency array
  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);


    //Number 2. new button added to reload and display a different animal, calls the function on useEffect

    //Number 5. sets new value, when new value appears it re-renders, 
  return (
    <>
      <div className="homeInfo">
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>

      <h1>Animal Spotlight</h1>

      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
             //if spotlight and animal id matches then it runs, truthy where it was false earlier with the 0
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
      
    </div>

    </>
  );
};

export default Home;
