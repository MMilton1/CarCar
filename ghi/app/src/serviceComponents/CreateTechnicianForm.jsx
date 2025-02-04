import { useState } from "react";

function CreateTechnicianForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.first_name = firstName;
    data.last_name = lastName;
    data.employee_id = employeeId;

    const technicianUrl = "http://localhost:8080/api/technicians/";

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const technician = await fetch(technicianUrl, fetchConfig);
    if (technician.ok) {
      const newTechnician = await technician.json();
      console.log(newTechnician);
      setFirstName("");
      setLastName("");
      setEmployeeId("");
    }
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };
  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };
  const handleEmployeeIdChange = (event) => {
    const value = event.target.value;
    setEmployeeId(value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div
            className="card shadow-lg p-3 mb-5 bg-body rounded"
            style={{ border: "1px solid #539165" }}
          >
            <div className="card-body">
              <h1
                className="card-title text-center"
                style={{ color: "#539165" }}
              >
                Add A Technician
              </h1>
              <form
                onSubmit={handleSubmit}
                id="add-technician"
                className="mt-4"
              >
                <div className="form-floating mb-3">
                  <input
                    onChange={handleFirstNameChange}
                    value={firstName}
                    placeholder="First name"
                    required
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="form-control"
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={handleLastNameChange}
                    value={lastName}
                    placeholder="Last name"
                    required
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="form-control"
                  />
                  <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={handleEmployeeIdChange}
                    value={employeeId}
                    placeholder="Employee ID"
                    type="number"
                    min="1"
                    name="employee_id"
                    id="employee_id"
                    className="form-control"
                  />
                  <label htmlFor="employee_id">Employee ID</label>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{
                      backgroundColor: "#539165",
                      color: "white",
                      padding: "10px 20px",
                      fontSize: "1.25rem",
                    }}
                  >
                    Create A New Technician
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTechnicianForm;
