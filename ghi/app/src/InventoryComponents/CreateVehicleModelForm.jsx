import React, { useState, useEffect } from 'react';

const CreateVehicleModelForm = () => {
  const [modelName, setModelName] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [manufacturers, setManufacturers] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState('');

  useEffect(() => {
    fetch('http://localhost:8100/api/manufacturers/')
      .then(response => response.json())
      .then(data => setManufacturers(data.manufacturers))
      .catch(error => console.error('Error fetching manufacturers:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const vehicleModelData = {
      name: modelName,
      picture_url: pictureUrl,
      manufacturer_id: selectedManufacturer,
    };

    fetch('http://localhost:8100/api/models/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicleModelData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      alert('Vehicle Model created successfully!');
      setModelName('');
      setPictureUrl('');
      setSelectedManufacturer('');
    })
    .catch(error => {
      alert(`Failed to create Vehicle Model: ${error.message}`);
    });
  };

  return (
    <div>
      <h2>Create a vehicle model</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Model name:</label>
          <input
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            placeholder="Model name..."
            required
          />
        </div>
        <div>
          <label>Picture URL:</label>
          <input
            type="url"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            placeholder="Picture URL..."
            required
          />
        </div>
        <div>
          <label>Choose a manufacturer:</label>
          <select
            value={selectedManufacturer}
            onChange={(e) => setSelectedManufacturer(e.target.value)}
            required
          >
            <option value="">Choose a manufacturer...</option>
            {manufacturers.map(manufacturer => (
              <option key={manufacturer.id} value={manufacturer.id}>
                {manufacturer.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateVehicleModelForm;
