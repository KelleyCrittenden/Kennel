//Main Page for Site

import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {

        //making sure someone is logged in
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;


        //setting the state of user, call isAuthenticated and make sure there's a value, that someone is logged in
  const [hasUser, setHasUser] = useState(isAuthenticated());

        //set a user that passes in the user, enables us to call setting the state, changes wether or not someone is logged in, can only change state where it lives, creating function
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

        //Function that clears the user and updates state, clears out session storage, calling session storage then calling isAuthenticated
  const clearUser = () => {
    sessionStorage.clear();
        //passing down to all of the children
    setHasUser(isAuthenticated());
  }


          //are not routes just displaying
  return ( 
    <>
          {/* has user is just looking into session storage to give us a true or false answer */}
      <NavBar 
        hasUser={hasUser}
        clearUser={clearUser}/>
          {/* able to pass function and change state in application views now*/}
      <ApplicationViews 
        hasUser={hasUser} 
        setUser={setUser} />
    </>
  );
};

export default Kennel;

