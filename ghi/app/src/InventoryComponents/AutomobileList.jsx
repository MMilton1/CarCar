import React, { useState, useEffect } from "react";

const AutomobileList = () => {
  const [automobiles, setAutomobiles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAutomobiles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8100/api/automobiles/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAutomobiles(data.autos);
      } catch (error) {
        setError(error.message);
        console.error("There was an error fetching the automobiles", error);
      }
      setIsLoading(false);
    };

    getAutomobiles();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Automobile List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {automobiles.map((auto) => (
            <tr key={auto.id}>
              <td>{auto.vin}</td>
              <td>{auto.color}</td>
              <td>{auto.year}</td>
              <td>{auto.model.name}</td>
              <td>{auto.model.manufacturer.name}</td>
              <td>
                <span>{auto.sold ? "Sold" : "Not Sold"}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AutomobileList;
