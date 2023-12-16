import React, { useState, useEffect } from "react";
import AddPassenger from './AddPassenger';

const AddPassenger = ({ vehicleData, onClearVehicle }) => {
    const [passengerCount, setPassengerCount] = useState(0);
    const [vacancy, setVacancy] = useState(vehicleData.vacancy);

    useEffect(() => {
        setVacancy(vehicleData.vacancy); // 当vehicleData更新时，更新vacancy
    }, [vehicleData]);

    const handleAddToPassenger = () => {
        if (vacancy > 0) {
        setPassengerCount(passengerCount + 1);
        setVacancy(vacancy - 1);
        }
    };

    const handleClearVehicle = () => {
        setPassengerCount(0);
        setVacancy(vehicleData.vacancy);
        onClearVehicle();
    };

    return (
        <div className="card mb-3" style={{ width: '100%' }}>
        <div className="card-body">
            <h5 className="card-title">
            From <strong>{vehicleData.departure}</strong> to <strong>{vehicleData.destination}</strong>
            </h5>
            <p className="card-text"><b>{vacancy}</b> seat(s) in this car</p>
            <p className="card-text">Departure date: <b>{vehicleData.departure_time}</b></p>
            <button className="btn btn-success mx-2" onClick={handleAddToPassenger} disabled={vacancy === 0}>
            Add one passenger
            </button>
            <button className="mx-2 btn btn-outline-dark" onClick={handleClearVehicle}>
            Clear
            </button>
        </div>
        </div>
    );
};

export default AddPassenger;
