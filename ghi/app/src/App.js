import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import React from "react";
import AddSalesperson from "./SalesComponents/AddSalesperson";
import ListSalespeople from "./SalesComponents/ListSalespeople";
import AddCustomer from "./SalesComponents/AddCustomer";
import ListCustomers from "./SalesComponents/ListCustomers";
import RecordNewSale from "./SalesComponents/RecordNewSale";
import ListAllSales from "./SalesComponents/ListAllSales";
import SalespersonHistory from "./SalesComponents/SalespersonHistory";
import ModelList from "./InventoryComponents/ModelList";
import CreateVehicleModelForm from "./InventoryComponents/CreateVehicleModelForm";
import ManufacturersList from "./InventoryComponents/ManufacturersList";
import TechnicianList from "./ServiceComponents/TechnicianLIst";
import AppointmentList from "./ServiceComponents/AppointmentList";
import CreateAppointmentForm from "./ServiceComponents/CreateAppointmentForm";
import CreateTechnicianForm from "./ServiceComponents/CreateTechnicianForm";
import AutomobileList from "./InventoryComponents/AutomobileList";
import ServiceHistoryList from "./ServiceComponents/ServiceHistoryList";
import CreateAutomobileForm from "./InventoryComponents/CreateAutomobileForm";
import CreateManufacturerForm from "./InventoryComponents/CreateManfactureForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add-salesperson" element={<AddSalesperson />} />
          <Route path="/salespeople" element={<ListSalespeople />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/customers" element={<ListCustomers />} />
          <Route path="/record-sale" element={<RecordNewSale />} />
          <Route path="/sales" element={<ListAllSales />} />
          <Route path="/saleshistory" element={<SalespersonHistory />} />
          <Route path="/modelslist" element={<ModelList />} />
          <Route path="/createmodels" element={<CreateVehicleModelForm />} />
          <Route
            path="/manufacturer/create/"
            element={<CreateManufacturerForm />}
          />
          <Route path="/manufacturerslist" element={<ManufacturersList />} />
          <Route
            path="/automobiles/create/"
            element={<CreateAutomobileForm />}
          />
          <Route path="automobiles/list/" element={<AutomobileList />} />
          <Route path="technicians/" element={<TechnicianList />} />
          <Route path="servicehistory/" element={<ServiceHistoryList />} />
          <Route path="appointments/" element={<AppointmentList />} />
          <Route
            path="appointments/create/"
            element={<CreateAppointmentForm />}
          />
          <Route
            path="technicians/create/"
            element={<CreateTechnicianForm />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
