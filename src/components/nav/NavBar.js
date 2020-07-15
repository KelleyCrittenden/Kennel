import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
//gives us the ability to click on a link and change URL without having to leave application
import "./NavBar.css";

const NavBar = props => {
         //clear the user then change the URL
  const handleLogout = () => {
        //came from the parent in kennel.js
    props.clearUser();
    props.history.push('/');
  }

  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/"> Home </Link>
          </li>

                  {/* javascript, evaluate to true or false if someone is logged in. Has User? asking question, if true then display the list item, if it is not true display null */}
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/animals"> Animals </Link>
              </li>
            : null}

                    {/* everyone can view */}
            <li>
            <Link className="nav-link" to="/locations"> Locations </Link>
          </li>

                    {/* user must be logged in */}
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/employees"> Employees </Link>
              </li>
            : null}

                  {/* user must be logged in */}
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/owners"> Owners </Link>
              </li>
            : null}

                {/* Bang negates props: has user not? if its not true then display login, if they are a user display Logout */}
                {props.hasUser
            ? <li>
                <span className="nav-link" onClick={handleLogout}> Logout </span>
              </li>
            : <li>
                <Link className="nav-link" to="/login">Login</Link>
              </li>}


        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);