import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";

import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'

import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail";
import EmployeeForm from './employee/EmployeeForm';

import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetail";
import OwnerForm from "./owner/OwnerForm";

import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";




const ApplicationViews = () => {
  return (
    <React.Fragment>

      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      
      <Route
        exact
        path="/animals"
        render={props => {
          return <AnimalList {...props}/>;
        }}
      />

      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList {...props}/>;
        }}
      />

    <Route
      exact
      path="/employees"
      render={props => {
          return <EmployeeList {...props}/>;
      }}
    />

    <Route
      exact
      path="/owners"
      render={props => {
          return <OwnerList {...props}/>;
      }}
      />

    <Route 
        //change URL to match location id for bookmarking single animal
      path="/animals/:animalId(\d+)" 
      render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt
            (props.match.params.animalId)} {...props}/>
        }} 
    />

    <Route 
        //change URL to match location id for bookmarking single location
      path="/locations/:locationId(\d+)" 
      render={(props) => {
          return <LocationDetail locationId={parseInt
            (props.match.params.locationId)} {...props}/>
        }} 
    />
    
    
    <Route 
        //change URL to match location id for bookmarking single employee
      path="/employees/:employeeId(\d+)" 
      render={(props) => {
            // Pass the employeeId to the EmployeeDetailComponent
          return <EmployeeDetail employeeId={parseInt
            (props.match.params.employeeId)} {...props}/>
        }} 
    />

    <Route 
        //change URL to match location id for bookmarking single employee
      path="/owners/:ownerId(\d+)" 
      render={(props) => {
            // Pass the employeeId to the EmployeeDetailComponent
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
          // Route for new owner form
      path="/locations/new" 
      render={(props) => {
      return <LocationForm {...props} />
        }} 
    />


    </React.Fragment>
  );
};

export default ApplicationViews;
