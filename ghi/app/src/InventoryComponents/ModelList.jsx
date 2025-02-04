import React, { useState, useEffect } from "react";

const ModelList = () => {
  const [vehicleModels, setVehicleModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8100/api/models/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setVehicleModels(data.models);
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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.2s ease-in-out",
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: "scale(1.03)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Models</h2>
      <div style={gridStyle}>
        {vehicleModels.map((model) => (
          <div
            key={model.id}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style = cardHoverStyle)}
            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
          >
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>
                {model.name}
              </h3>
              <p style={{ margin: "0 0 15px 0", color: "#666" }}>
                {model.manufacturer.name}
              </p>
            </div>
            <img
              src={model.picture_url}
              alt={model.name}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelList;
