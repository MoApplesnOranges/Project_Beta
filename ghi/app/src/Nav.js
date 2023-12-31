import { NavLink } from "react-router-dom";
import "./index.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
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
          <div className="row">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="manufacturers"
                >
                  Manufacturers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="manufacturers/create"
                >
                  Create a manufacturer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  id="model-list"
                  aria-current="page"
                  to="/models"
                >
                  Models
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/models/new">
                  Create a Model
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="automobiles"
                >
                  Automobiles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/automobiles/new">
                  Create an Automobile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  id="automobile-list"
                  aria-current="page"
                  to="/salespeople"
                >
                  Salespeople
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/salespeople/new">
                  Add a Salesperson
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  id="customer-list"
                  aria-current="page"
                  to="/customers"
                >
                  Customers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/customers/new">
                  Add a Customer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  id="sales-list"
                  aria-current="page"
                  to="/sales"
                >
                  Sales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/sales/new">
                  Add a Sale
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/sales/history">
                  Salesperson History
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="technicians"
                >
                  Technicians
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="technicians/create"
                >
                  Add a Technician
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="appointments"
                >
                  Service Appointments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="appointments/create"
                >
                  Create a Service Appointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="appointments/history"
                >
                  Service History
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
