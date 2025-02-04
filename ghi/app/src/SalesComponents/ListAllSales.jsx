import React, { useState, useEffect } from "react";

const ListAllSales = () => {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8090/api/sales/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSales(data.sales || []);
        setIsLoading(false);
      })

      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>List of All Sales</h2>
      <table>
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>Automobile</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>
                {sale.salesperson.first_name} {sale.salesperson.last_name}
              </td>
              <td>
                {sale.customer.first_name} {sale.customer.last_name}
              </td>
              <td>{sale.automobile.vin}</td>
              <td>${sale.price}</td>
              <td>{new Date(sale.date_of_sale).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAllSales;
