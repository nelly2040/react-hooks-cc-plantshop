import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import NewPlantForm from './NewPlantForm';

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error fetching plants:', error));
  }, []);

  const handleAddPlant = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then(response => response.json())
      .then(data => {
        setPlants([...plants, data]);
      })
      .catch(error => console.error('Error adding plant:', error));
  };

  return (
    <div>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <ul className="cards">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ul>
    </div>
  );
}

export default PlantList;