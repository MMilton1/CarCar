import { useEffect, useState } from "react";

function CreateAutomobileForm() {
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [sold, setSold] = useState(false);
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);

  useEffect(() => {
    const getModels = async () => {
      const response = await fetch("http://localhost:8100/api/models/");

      if (response.ok) {
        const data = await response.json();
        setModels(data.models);
      }
    };
    getModels();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      color: color,
      year: parseInt(year, 10),
      vin: vin,
      model_id: parseInt(model, 10),
    };

    try {
      const response = await fetch("http://localhost:8100/api/automobiles/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Automobile created successfully:", await response.json());
        // Here we will reset: Speak with team partner regarding the implementation
        setColor("");
        setYear("");
        setVin("");
        setSold(false);
        setModel("");
      }
    } catch (error) {
      console.error("Failed to create automobile:", error);
    }
  };

  //   Setting a toggle option state for when a new automobile is created using the setter function
  const handleChange = (setter) => (event) => {
    const { value, type } = event.target;
    if (type === "checkbox") {
      setter((prev) => !prev);
    } else {
      setter(value);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create an Automobile</h1>
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <img
          src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="card-img-top"
          alt="Car"
        />
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Color"
                value={color}
                onChange={(e) => handleChange(setColor)(e)}
                type="text"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Year"
                value={year}
                onChange={(e) => handleChange(setYear)(e)}
                type="text"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="VIN"
                value={vin}
                onChange={(e) => handleChange(setVin)(e)}
                type="text"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={sold}
                onChange={(e) => handleChange(setSold)(e)}
                id="soldCheckbox"
              />
              <label className="form-check-label" htmlFor="soldCheckbox">
                Sold
              </label>
            </div>
            <div className="mb-4">
              <select
                className="form-select"
                value={model}
                onChange={(e) => handleChange(setModel)(e)}
              >
                <option value="">Select a Model</option>
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAutomobileForm;
