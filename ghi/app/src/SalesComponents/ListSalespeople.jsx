import React, { useState, useEffect } from 'react';

const ListSalespeople = () => {
  const [salespeople, setSalespeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalespeople = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:8090/api/salespeople/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSalespeople(data);
      } catch (error) {
        setError(error.message);
        console.error("There was an error fetching the salespeople", error);
      }
      setIsLoading(false);
    };

    fetchSalespeople();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Salespeople</h2>
      <ul>
        {salespeople.map(salesperson => (
          <li key={salesperson.employee_id}>
            {salesperson.first_name} {salesperson.last_name} - {salesperson.employee_id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSalespeople;
