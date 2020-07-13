import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "", picture: "./owner.jpg"});
  const [isLoading, setIsLoading] = useState(false);

            // An Event that everytime a charector is entered into an input field it is stored into the state of this object, and sets a new state
  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

            /*  Local method for validation, set loadingStatus, create animal object, invoke the AnimalManager post method, and redirect to the full animal list
            */

            //window alert for empty input fields
  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.phoneNumber === "") {
      window.alert("Please input owner name and phone number");
    } else {
      setIsLoading(true);
            // Create the employee and redirect user to employee list
            OwnerManager.post(owner)
        .then(() => props.history.push("/owners"));
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
              placeholder="Owner Name"
            />

            <label htmlFor="name">Name</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phoneNumber"
              placeholder="Phone Number"
            />

            <label htmlFor="phoneNumber">Phone Number</label>

          </div>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}>Submit
            </button>
          </div>
          
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm