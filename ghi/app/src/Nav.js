import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <NavLink
          className="nav-link"
          style={{ color: "white" }}
          aria-current="page"
          to="/automobiles/create/"
        >
          Create Automobile
        </NavLink>
        <NavLink
          className="nav-link"
          style={{ color: "white" }}
          aria-current="page"
          to="/automobiles/list/"
        >
          Automobile List
        </NavLink>
        <NavLink
          className="nav-link"
          style={{ color: "white" }}
          aria-current="page"
          to="/manufacturer/create/"
        >
          Create Manufacturer
        </NavLink>
        <NavLink
          className="nav-link"
          style={{ color: "white" }}
          aria-current="page"
          to="appointments/create/"
        >
          Create a Service Appointment
        </NavLink>
        <NavLink
          className="nav-link"
          style={{ color: "white" }}
          aria-current="page"
          to="servicehistory/"
        >
          Service History
        </NavLink>
        <NavLink
          className="nav-link"
          style={{ color: "white" }}
          aria-current="page"
          to="technicians/"
        >
          Technicians
        </NavLink>
        <NavLink
          className="nav-link"
          style={{ color: "white" }}
          aria-current="page"
          to="technicians/create/"
        >
          Add a Technician
        </NavLink>
        <NavLink
          className="nav-link"
          style={{ color: "white" }}
          aria-current="page"
          to="appointments/"
        >
          Service Appointments
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/add-salesperson"
                style={{ color: "white" }}
              >
                Add a Salesperson
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/salespeople"
                style={{ color: "white" }}
              >
                Salespeople
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/add-customer"
                style={{ color: "white" }}
              >
                Add a Customer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/customers"
                style={{ color: "white" }}
              >
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/record-sale"
                style={{ color: "white" }}
              >
                Record a New Sale
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/sales"
                style={{ color: "white" }}
              >
                List All Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/saleshistory"
                style={{ color: "white" }}
              >
                Salespeople Sales History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/modelslist"
                style={{ color: "white" }}
              >
                Model List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/createmodels"
                style={{ color: "white" }}
              >
                Create Vehicle Model
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/manufacturerslist"
                style={{ color: "white" }}
              >
                List of Manufacturers
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
