import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { irelandCities } from "../../data/cities";
import "./CarOwner.css";

function Pulish(props) {
  const [formData, setFormData] = useState({
    driver: props.driver,
    departure: "",
    destination: "",
    date: new Date(),
    phone: "",
    timestamp: Date.now(),
  });

  const [formErrors, setFormErrors] = useState({
    departureError: "",
    destinationError: "",
    phoneError: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = { departureError: "", destinationError: "", phoneError: "" };
    if (!formData.departure) {
      errors.departureError = "Please select a departure city.";
    }

    if (!formData.destination) {
      errors.destinationError = "Please select a destination city.";
    }

    if (!/^(\+\d{1,3}[- ]?)?\d{7,15}$/.test(formData.phone)) {
      errors.phoneError = "Please enter a valid telephone number.";
    }
    setFormErrors(errors);
    // publish
    if (
      !errors.departureError &&
      !errors.destinationError &&
      !errors.phoneError
    ) {
      props.addRoute(formData);
      props.handleModalClose();
    }
  };

  return (
    <div className="carpool-form">
      <form className="publish-grid-container" onSubmit={handleSubmit}>
        <label className="publish-grid-item">
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
          {formErrors.departureError && (
            <div className="error">{formErrors.departureError}</div>
          )}
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
          {formErrors.destinationError && (
            <div className="error">{formErrors.destinationError}</div>
          )}
        </label>

        <label class="publish-grid-item">
          Telphone number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {formErrors.phoneError && (
            <div className="error">{formErrors.phoneError}</div>
          )}
        </label>
        <label class="publish-grid-item">
          Date:
          <br></br>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            minDate={new Date()}
          />
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
