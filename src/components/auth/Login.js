import React, { useState } from "react"

//defining component
const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

        // Update state whenever an input field is edited
        //whenever a change is made, state is updated with the value
        //... means spread operator, spread it apart so we can define it, email and password
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    //dont merge new state, over ride it, happens everytime a key is pressed
    setCredentials(stateToChange);
  };

        //goes into session storage to set it into the credential state, then we go see the animalList

        //what happens when the login button is pressed, going to session storage and plugging in the credentials, once that's in session storage
  const handleLogin = (e) => {
      //stops it from refreshing after action of onSubmit
    e.preventDefault();
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
    // sessionStorage.setItem(
    //   "credentials",
    //   JSON.stringify(credentials)
    // );
    props.setUser(credentials)
    props.history.push("/");
  }

  return (
      //action applied to entire form, onSubmit call the function handleLogin
      //no onClick b/c this version is onSubmit
    <form onSubmit={handleLogin}>
      <fieldset>

        <h3>Please sign in</h3>

        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />

          <label htmlFor="inputEmail">Email address</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />

          <label htmlFor="inputPassword">Password</label>
        </div>

        <button type="submit">Sign in</button>

      </fieldset>
    </form>
  );
};

export default Login;
