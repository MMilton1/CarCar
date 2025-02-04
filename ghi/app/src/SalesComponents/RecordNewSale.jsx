import React, { useState, useEffect } from "react";

const RecordNewSale = () => {
  const [automobiles, setAutomobiles] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedAutomobileVIN, setSelectedAutomobileVIN] = useState("");
  const [selectedSalespersonID, setSelectedSalespersonID] = useState("");
  const [selectedCustomerID, setSelectedCustomerID] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("http://localhost:8100/api/automobiles/")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.autos) {
          setAutomobiles(data.autos);
        }
      })
      .catch((error) => console.error("Error fetching automobiles:", error));

    fetch("http://localhost:8090/api/salespeople/")
      .then((response) => response.json())
      .then((data) => {
        setSalespeople(data);
      })
      .catch((error) => console.error("Error fetching salespeople:", error));

    fetch("http://localhost:8090/api/customers/")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.customers) {
          setCustomers(data.customers);
        }
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const saleData = {
      automobile: selectedAutomobileVIN,
      salesperson: selectedSalespersonID,
      customer: selectedCustomerID,
      price: parseFloat(price).toFixed(2),
      date_of_sale: new Date().toISOString(),
    };

    fetch("http://localhost:8090/api/sales/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(saleData),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `HTTP error! status: ${response.status} - ${errorText}`
          );
        }
        return response.json();
      })
      .then(() => {
        alert("Sale recorded successfully!");
        setSelectedAutomobileVIN("");
        setSelectedSalespersonID("");
        setSelectedCustomerID("");
        setPrice("");
      })
      .catch((error) => {
        console.error("There was an error:", error);
        alert(`Failed to record the sale: ${error.message}`);
      });
  };

  return (
    <div>
      <h2>Record a New Sale</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Automobile VIN:</label>
          <select
            value={selectedAutomobileVIN}
            onChange={(e) => setSelectedAutomobileVIN(e.target.value)}
            required
          >
            <option value="">Select an Automobile</option>
            {automobiles.map((auto) => (
              <option key={auto.vin} value={auto.vin}>
                {auto.vin}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Salesperson:</label>
          <select
            value={selectedSalespersonID}
            onChange={(e) => setSelectedSalespersonID(e.target.value)}
            required
          >
            <option value="">Select a Salesperson</option>
            {salespeople.map((sp) => (
              <option
                key={sp.employee_id}
                value={sp.employee_id}
              >{`${sp.first_name} ${sp.last_name}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Customer:</label>
          <select
            value={selectedCustomerID}
            onChange={(e) => setSelectedCustomerID(e.target.value)}
            required
          >
            <option value="">Select a Customer</option>
            {customers.map((customer) => (
              <option key={customer.phone_number} value={customer.phone_number}>
                {customer.first_name} {customer.last_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Price"
          />
        </div>
        <button type="submit">Submit Sale</button>
      </form>
    </div>
  );
};

export default RecordNewSale;
