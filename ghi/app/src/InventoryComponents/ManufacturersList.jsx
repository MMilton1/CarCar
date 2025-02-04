import React, { useState, useEffect } from 'react';

const ManufacturersList = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8100/api/manufacturers/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setManufacturers(data.manufacturers);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Manufacturers</h2>
      <ul>
        {manufacturers.map((manufacturer, index) => (
          <li key={index}>{manufacturer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManufacturersList;
