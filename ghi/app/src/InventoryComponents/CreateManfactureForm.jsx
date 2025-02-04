import { useState } from "react";
import audi from "../images/audi.png";
import bmw from "../images/bmw.png";
import ferrari from "../images/ferrari.png";
import maserati from "../images/maserati.png";
import saab from "../images/Saab.png";
import tesla from "../images/tesla.png";
import alfa from "../images/maserati.png";
import mercedes from "../images/Mercedes.png";
import porsche from "../images/porsche.png";
import styles from "../css/bootstrap.css";

const CreateManufacturerForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name: name };

    const autoManufacturerUrl = "http://localhost:8100/api/manufacturers/";

    const getManufacturerData = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const manufacturersData = await fetch(
        autoManufacturerUrl,
        getManufacturerData
      );
      const data = await manufacturersData.json();
      if (manufacturersData.ok) {
        console.log("New Manufacturer Created:", manufacturersData);
        setName("");
        setSuccess("Manufacturer added successfully!");
        setError("");
      } else {
        const errorData = await manufacturersData.json();
        console.error(error);
        setError(error.message);
        setSuccess("");
      }
    } catch (error) {
      console.error("Failed to create a manufacturer!!!");
      setError(error.message);
      setSuccess("");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body text-center">
              <div
                id="manufacturerCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {[
                    audi,
                    bmw,
                    ferrari,
                    maserati,
                    saab,
                    tesla,
                    alfa,
                    mercedes,
                    porsche,
                  ].map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div
                        className="carousel-image-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <img
                          src={image}
                          className="d-block w-100"
                          alt="Manufacturer"
                          style={{ maxHeight: "120px" }}
                        />
                        <div
                          className="carousel-image-overlay"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#manufacturerCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#manufacturerCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              <h1 className="card-title my-4">Add A Manufacturer</h1>

              <form onSubmit={handleSubmit} id="add-manufacturer">
                <div className="form-floating mb-3">
                  <input
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Name"
                    required
                    type="text"
                    // name="name"
                    // id="name"
                    className="form-control"
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateManufacturerForm;
