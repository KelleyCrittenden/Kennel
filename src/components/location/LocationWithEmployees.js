import React, { useState, useEffect } from 'react'
import LocationManager from '../../modules/LocationManager'
import EmployeeCard from '../employee/EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'


        //setting state with props from application views
const LocationWithEmployees = props => {
  const [location, setLocation] = useState({});
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (id) => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    setIsLoading(true);
    EmployeeManager.delete(id)
    .then(() =>
        props.history.push("/locations")
        );
    };

    useEffect(() => {
        //go here now make call to get location with employee
    LocationManager.getWithEmployees(props.match.params.locationId)
      .then(APIResult => {
          //gets results and sets location and employee
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      });
        setIsLoading(false);
    }, [props.match.params.locationId]);

  return (
    <div className="card">

      <p>Location: {location.name}</p>

        {/* mapping through the employees and grabing ones with matching ids to location chosen */}
      {employees.map(employee =>
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={handleDelete}
          disabled={isLoading}
          {...props}

        />
      )}
    </div>
  );
};

export default LocationWithEmployees;