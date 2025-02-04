import React, { useEffect, useState } from "react";

function CreateAppointmentForm() {
  const [dateTime, setDateTime] = useState("");
  const [reason, setReason] = useState("");
  const [vin, setVin] = useState("");
  const [customer, setCustomer] = useState("");
  const [selectedTechnician, setSelectedTechnician] = useState("");
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/technicians/");
        if (!response.ok) {
          throw new Error("Failed to fetch technicians");
        }
        const data = await response.json();
        setTechnicians(data.technicians || []);
      } catch (error) {
        console.error("Error fetching technicians:", error);
      }
    };
    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      date_time: dateTime,
      reason: reason,
      vin: vin,
      customer: customer,
      technician: selectedTechnician,
    };

    try {
      const response = await fetch("http://localhost:8080/api/appointments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to create appointment");
      }
      console.log("Appointment created successfully");
      setDateTime("");
      setReason("");
      setVin("");
      setCustomer("");
      setSelectedTechnician("");
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create An Appointment</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="datetime-local"
                className="form-control"
                id="dateTime"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                required
              />
              <label htmlFor="dateTime">Date & Time</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="vin"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                placeholder="VIN"
                required
              />
              <label htmlFor="vin">VIN</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="customer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                placeholder="Customer Name"
                required
              />
              <label htmlFor="customer">Customer Name</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Reason for Appointment"
                required
              ></textarea>
              <label htmlFor="reason">Reason for Appointment</label>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                id="technician"
                value={selectedTechnician}
                onChange={(e) => setSelectedTechnician(e.target.value)}
                required
              >
                <option value="">Select Technician</option>
                {technicians.map((tech) => (
                  <option key={tech.id} value={tech.id}>
                    {tech.first_name} {tech.last_name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAppointmentForm;
