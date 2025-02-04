import { useEffect, useState } from "react";

function ServiceHistoryList() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function getAppointmentHistory() {
    try {
      const response = await fetch("http://localhost:8080/api/appointments/");
      if (!response.ok) {
        throw new Error(`HTTP error!${response.status}`);
      }
      const data = await response.json();
      setAppointments(data.appointments);
    } catch (error) {
      console.error("Fetch error:", error.meesage);
    }
  }
  useEffect(() => {
    getAppointmentHistory();
  }, []);

  function handleSearchChange(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.vin.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Service History</h1>
      <div className="input-group mb-3">
        <input
          type="search"
          id="search-input"
          className="form-control"
          placeholder="Search by VIN"
          maxLength={17}
          aria-label="Search by VIN"
          aria-describedby="button-search"
          onChange={handleSearchChange}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>VIN</th>
              <th>Is VIP?</th>
              <th>Customer</th>
              <th>Date / Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appt) => (
              <tr key={appt.id}>
                <td>{appt.vin}</td>
                <td>{appt.vip ? "Yes" : "No"}</td>
                <td>{appt.customer}</td>
                <td>{appt.date_time}</td>
                <td>{`${appt.technician.first_name} ${appt.technician.last_name}`}</td>
                <td>{appt.reason}</td>
                <td>{appt.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceHistoryList;
