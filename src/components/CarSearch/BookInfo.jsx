import React, { useState, useEffect } from 'react';
import AddPassenger from './AddPassenger';
import { current_ride_sharing_data } from './test_data';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookInfo() {
  const [departureOptions, setDepartureOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);
  const [selectedDeparture, setSelectedDeparture] = useState('Select your departure');
  const [selectedDestination, setSelectedDestination] = useState('Select your destination');
  const [sortChoice, setSortChoice] = useState('Select sorting option');

  // Extract unique departures and destinations
  useEffect(() => {
    const uniqueDepartures = [...new Set(current_ride_sharing_data.map(ride => ride.departure))];
    const uniqueDestinations = [...new Set(current_ride_sharing_data.map(ride => ride.destination))];
    setDepartureOptions(uniqueDepartures);
    setDestinationOptions(uniqueDestinations);
  }, []);

  const handleDepartureChange = (event) => {
    setSelectedDeparture(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortChoice(event.target.value);
  };

  const handleClearAll = () => {
    setSelectedDeparture('Select your departure');
    setSelectedDestination('Select your destination');
    setSortChoice('Select sorting option');
  };

  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sortData = [...current_ride_sharing_data].sort((a, b) => {
      if (sortChoice === 'time') {
        return new Date(a.departure_time) - new Date(b.departure_time);
      } 
      return 0;
    });
    setSortedData(sortData);
  }, [sortChoice]);  
  

  return (
    <div className="container mt-5">
      <form>
        <div className="row">
          <div className="mb-3 col-md-4">
            <label htmlFor="departureDropdown" className="form-label"><strong>What city are you leaving from?</strong></label>
            <select onChange={handleDepartureChange} className="form-select" id="departureDropdown" value={selectedDeparture}>
              <option value="Select your departure" disabled>Select your Departure</option>
              {departureOptions.map((departure, index) => (
                <option key={index} value={departure}>
                  {departure}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="destinationDropdown" className="form-label"><strong>What city are you going to?</strong></label>
            <select onChange={handleDestinationChange} className="form-select" id="destinationDropdown" value={selectedDestination}>
              <option value="Select your destination" disabled>Select your Destination</option>
              {destinationOptions.map((destination, index) => (
                <option key={index} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="sortDropdown" className="form-label"><strong>Sort By</strong></label>
            <select onChange={handleSortChange} className="form-select" id="sortDropdown" value={sortChoice}>
              <option value="Select sorting option" disabled>Select Sorting Option</option>
              <option value="time">Depature Date (Asc.) </option>
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-outline-dark mx-2" onClick={handleClearAll}>
          Clear all filters
        </button>
      </form>
      <h2 className="mt-3">Results</h2>
      <div className="row">
        {sortedData
          .filter(ride => (selectedDeparture === 'Select your departure' || ride.departure === selectedDeparture) &&
                          (selectedDestination === 'Select your destination' || ride.destination === selectedDestination))
          .map((vehicleData, index) => (
            <div key={index} className="col-md-12">
              <AddPassenger vehicleData={vehicleData} onClearVehicle={() => {}} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default BookInfo;
