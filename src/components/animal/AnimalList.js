import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';


const AnimalList = (props) => {
  // The initial state is an empty array
  //   what I'm keeping track of, then what function using to update the state of the itme I'm keepting track of
  const [animals, setAnimals] = useState([]);


//getting all the animals from the API
  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  const deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll().then(setAnimals));
  };

  // got the animals from the API on the component's first render
  // react hook function what happens when a change is made to state
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
    <section className="section-content">
      <button type="button"
        className="btn"
        onClick={() => {props.history.push("/animals/new")}}>
        Admit Animal
     </button>
    </section>
    
    <div className="container-cards">
      {animals.map(animal => <AnimalCard 
                              key={animal.id} 
                              animal={animal} 
                              id={animal.id}
                              deleteAnimal={deleteAnimal} />)}
    </div>
    </>
  );
  
};

export default AnimalList