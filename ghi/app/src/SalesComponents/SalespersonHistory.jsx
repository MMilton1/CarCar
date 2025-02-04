import React, { useState, useEffect } from "react";

const SalespersonHistory = () => {
  const [salespeople, setSalespeople] = useState([]);
  const [selectedSalesperson, setSelectedSalesperson] = useState("");
  const [salesHistory, setSalesHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8090/api/salespeople/")
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== undefined) {
          setSalespeople(data);
        } else {
          console.error("Unexpected data format for salespeople:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching salespeople:", error);
        setError("Failed to fetch salespeople");
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8090/api/sales/")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.sales)) {
          const filteredSales = data.sales.filter(
            (sale) => sale.salesperson.employee_id === selectedSalesperson
          );
          setSalesHistory(filteredSales);
        } else {
          setSalesHistory([]);
        }
      })
      .catch((error) => console.error("Error fetching sales data:", error));
  }, [selectedSalesperson]);

  const handleSalespersonChange = (event) => {
    setSelectedSalesperson(event.target.value);
  };

  return (
    <div>
      <h2>Salesperson History</h2>
      <select value={selectedSalesperson} onChange={handleSalespersonChange}>
        <option value="">Select a Salesperson</option>
        {salespeople.map((sp) => (
          <option key={sp.employee_id} value={sp.employee_id}>
            {`${sp.first_name} ${sp.last_name}`}
          </option>
        ))}
      </select>
      {isLoading ? (
        <p>Loading sales history...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Automobile</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {salesHistory.map((sale) => (
              <tr key={sale.id}>
                <td>{`${sale.customer.first_name} ${sale.customer.last_name}`}</td>
                <td>{sale.automobile.vin}</td>
                <td>${sale.price}</td>
                <td>{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SalespersonHistory;
