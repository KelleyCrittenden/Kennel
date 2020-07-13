import React, { useState, useEffect } from 'react';
  //Need both so that state is declared and effect to monitor any changes
  //effect is a reaction to an event, this is a reaction to an API call
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'
import {firstLetterCase} from '../../modules/helpers'


          //1. comes into existence but is empty
const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "", picture: ""});

  //setting a state so that the User cannot continue to click on buttons while loading
  const [isLoading, setIsLoading] = useState(true);



          //3. looks at state and runs return again
  useEffect(() => {
          //get(id) from AnimalManager and hang on to the data; put it into state
          OwnerManager.get(props.ownerId).then(owner => {
      setOwner({
        name: owner.name,
        phoneNumber: owner.phoneNumber,
        picture: owner.picture
      });
      setIsLoading(false);
          });
      }, [props.ownerId]);
          //if props.animalId if the ID is ever changed go back and get the updated animal

  const handleDelete = () => {
            //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
        OwnerManager.delete(props.ownerId).then(() =>
            props.history.push("/owners")
    );
  };          


      //2. Look at AnimalDetail, it's empty so use effect
  return (
    <div className="card">
      <div className="card-content">

         {(owner.picture !== "") &&
          <picture> 
              <img className="ownerImage" src={require (`${owner.picture}`)} alt="Owner" />
          </picture>
          }

         <h3>
          <span style={{ color: "darkslategrey" }}>{firstLetterCase(owner.name)}</span>
        </h3>

        <p>Phone Number: {owner.phoneNumber}</p>

        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove
        </button>

      </div>
    </div>
  );
};

export default OwnerDetail;