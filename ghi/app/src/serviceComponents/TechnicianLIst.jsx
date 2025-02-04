import React, { useEffect, useState } from "react";

function TechnicianList(props) {
  const [technicians, setTechnicians] = useState([]);

  async function getTechnicians() {
    const response = await fetch("http://localhost:8080/api/technicians/");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setTechnicians(data.technicians);
    } else {
      console.error(response);
    }
  }

  useEffect(() => {
    getTechnicians();
  }, []);

  return (
    <div className="container mt-5">
      <h2
        className="text-center mb-4"
        style={{
          color: "#539165", // Adjust to match dealership's theme color
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          borderBottom: "2px solid #539165",
          paddingBottom: "10px",
          marginBottom: "30px",
          width: "fit-content",
          margin: "0 auto", // Ensures the border is centered under the text
        }}
      >
        Technician Personnel
      </h2>
      <table className="table table-striped table-hover">
        <thead
          className=""
          style={{
            backgroundColor: "#539165",
            color: "white",
            padding: "10px 20px",
          }}
        >
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map((technician) => {
            return (
              <tr key={technician.employee_id}>
                <td>{technician.first_name}</td>
                <td>{technician.last_name}</td>
                <td>{technician.employee_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TechnicianList;
