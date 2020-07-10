import React, { useState, useEffect } from 'react';
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = () => {

  const [owner, setOwner] = useState([]);


  const getOwner = () => {
    return OwnerManager.getAll().then(ownerFromAPI => {
      setOwner(ownerFromAPI)
    });
  };

  const deleteOwner = id => {
    OwnerManager.delete(id)
      .then(() => OwnerManager.getAll().then(setOwner));
  };

  useEffect(() => {
    getOwner();
  }, []);

 
  return (
    <div className="container-cards">
      {owner.map(owner => <OwnerCard 
                          key={owner.id} 
                          owner={owner} 
                          id={owner.id}
                          deleteOwner={deleteOwner} />)}
    </div>
  );
};
export default OwnerList