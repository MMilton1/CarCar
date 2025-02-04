import React from "react";

const alertVariants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

function AlertList() {
  return (
    <div>
      {alertVariants.map((variant, index) => (
        <div key={index} className={`alert alert-${variant}`} role="alert">
          A simple {variant} alert—check it out!
        </div>
      ))}
    </div>
  );
}

export default AlertList;
