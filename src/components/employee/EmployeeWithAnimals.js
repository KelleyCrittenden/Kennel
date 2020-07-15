import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from '../../modules/AnimalManager'


        //setting state with props from application views
const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (id) => {
        //invoke the delete function in EmployeeManger and re-direct to the employee list.
    setIsLoading(true);
    AnimalManager.delete(id)
    .then(() =>
    props.history.push("/employees")
        );
    }; 

  useEffect(() => {
        //go here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.employeeId)
      .then(APIResult => {
          //gets results and sets employee and animal
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
      setIsLoading(false);
  }, [props.match.params.employeeId]);



  return (
    <div className="card">

      <p>Employee: {employee.name}</p>

        {/* mapping through the animals and grabing ones with matching ids to employee chosen */}
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          deleteAnimal={handleDelete}
          disabled={isLoading}
          {...props}
        />

      )}
    </div>
  );
};

export default EmployeeWithAnimals;