import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";

import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from "./animal/AnimalEditForm";

import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail";
import EmployeeForm from './employee/EmployeeForm';
import EmployeeEditForm from "./employee/EmployeeEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";

import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetail";
import OwnerForm from "./owner/OwnerForm";
import OwnerEditForm from "./owner/OwnerEditForm";

import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm";
import LocationWithEmployees from "./location/LocationWithEmployees"



          //going to now be equal to what was passed into in kennel.js
const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;


  return (
    <React.Fragment>

          {/* pass the setUser function from the kennel, recieve setUser then any additional props. Use login and pass it props */}
      <Route 
        path="/login" 
        render={props => {
          return <Login 
          {...props}
        setUser={setUser} />
        }} 
      />

      <Route
        exact
        path="/"
        render={props => {
          return <Home />
        }}
      />

       <Route 
          exact 
          path="/animals" 
          render={props => {
            if (hasUser) {
              return <AnimalList {...props} />
            } else {
              return <Redirect to="/login" />
            }
        }} 
      />

      <Route 
        exact 
        path="/locations" 
        render={props => {
          if (hasUser) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} 
      />

    <Route
      exact
      path="/employees"
      render={props => {
        if (hasUser) {
          return <EmployeeList {...props}/>
        } else {
          return <Redirect to="/login" />
        }
      }}
    />

    <Route
      exact
      path="/owners"
      render={props => {
        if (hasUser) {
          return <OwnerList {...props}/>
        } else {
          return <Redirect to="/login" />
        }
      }}
    />

    <Route 
        //change URL to match animal id for bookmarking single animal
      exact
      path="/animals/:animalId(\d+)" 
      render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt
            (props.match.params.animalId)} {...props}/>
        }} 
    />

    <Route 
        //change URL to match location id for bookmarking single location
      exact  
      path="/locations/:locationId(\d+)" 
      render={(props) => {
        // Pass the locationId to the LocationDetailComponent
          return <LocationDetail locationId={parseInt
            (props.match.params.locationId)} {...props}/>
        }} 
    />
    
    
    <Route 
        //change URL to match employee id for bookmarking single employee
      exact  
      path="/employees/:employeeId(\d+)" 
      render={(props) => {
            // Pass the employeeId to the EmployeeDetailComponent
          return <EmployeeDetail employeeId={parseInt
            (props.match.params.employeeId)} {...props}/>
        }} 
    />

    <Route 
        //change URL to match owner id for bookmarking single owner
      exact  
      path="/owners/:ownerId(\d+)" 
      render={(props) => {
            // Pass the ownerId to the OwnerDetailComponent
          return <OwnerDetail ownerId={parseInt
            (props.match.params.ownerId)} {...props}/>
        }} 
    />

    <Route 
          // Route for new animal form
      path="/animals/new" 
      render={(props) => {
        return <AnimalForm {...props} />
        }} 
    />


    <Route 
          // Route for new employee form
      path="/employees/new" 
      render={(props) => {
      return <EmployeeForm {...props} />
        }} 
    />

    <Route 
          // Route for new owner form
      path="/owners/new" 
      render={(props) => {
      return <OwnerForm {...props} />
        }} 
    />

    <Route 
          // Route for new locations form
      path="/locations/new" 
      render={(props) => {
      return <LocationForm {...props} />
        }} 
    />
    

    <Route 
        // Route for the edit animal form
      path="/animals/:animalId(\d+)/edit" 
      render={props => {
       if (hasUser) {
          return <AnimalEditForm {...props} />
      } else {
          return <Redirect to="/login" />
          }
        }} 
    />

    <Route 
        // Route for the edit employee form
      path="/employees/:employeeId(\d+)/edit" 
      render={props => {
        if (hasUser) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} 
    />

    <Route 
        // Route for the edit location form
      path="/locations/:locationId(\d+)/edit" 
      render={props => {
        if (hasUser) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} 
    />

    <Route 
        // Route for the edit owner form
      path="/owners/:ownerId(\d+)/edit" 
      render={props => {
        if (hasUser) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} 
    />

    <Route 
        // Route that looks for employeeId then creates new component looking for animals
      path="/employees/:employeeId(\d+)/details" 
      render={(props) => {
        return <EmployeeWithAnimals {...props} />
      }} 
    />

      <Route 
        // Route that looks for locationId then creates new component looking for employees
      path="/locations/:locationId(\d+)/employees" 
      render={(props) => {
        return <LocationWithEmployees {...props} />
      }} 
    />

  </React.Fragment>
  );
};

export default ApplicationViews;
