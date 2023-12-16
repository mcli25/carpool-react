import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { irelandCities } from "../../data/cities";
import "./CarOwner.css";

// import AuthContext from "../../context/Auth";

function Pulish(props) {
  // const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    driver: "test",
    departure: "",
    destination: "",
    date: new Date(),
    phone: "",
    timestamp: Date.now(),
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // publish
    props.addRoute(formData);
    props.handleModalClose();
  };

  return (
    <div class="carpool-form">
      <form class="publish-grid-container" onSubmit={handleSubmit}>
        <label class="publish-grid-item">
          Departure:
          <select
            name="departure"
            value={formData.departure}
            onChange={handleInputChange}
          >
            <option value="">Select Departure</option>
            {irelandCities.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
        </label>
        <label class="publish-grid-item">
          Destination:
          <select
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
          >
            <option value="">Select Destination</option>
            {irelandCities.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
        </label>

        <label class="publish-grid-item">
          Telphone number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label class="publish-grid-item">
          Date:
          <br></br>
          <DatePicker selected={formData.date} onChange={handleDateChange} />
        </label>
        <button class="publish-grid-item btn2">Publish</button>
        <button class="publish-grid-item btn2" onClick={props.handleModalClose}>
          Back
        </button>
      </form>
    </div>
  );
}

export default Pulish;
