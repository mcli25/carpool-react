import React, { useState } from "react";

const CarInfo = () => {
  const [vehicleInfo, setVehicleInfo] = useState({
    make: "Japan",
    model: "AE86",
    year: "1997",
    imageUrl: "/img/AE86.JPG",
  });
  return (
    <div className="container-carinfo">
      <div className="car-img">
        <img
          src={vehicleInfo.imageUrl}
          alt={`${vehicleInfo.make} ${vehicleInfo.model}`}
          width={1000}
        />
      </div>
      <div className="vehicle-info">
        <h3>My Vehicle</h3>
        <p>
          <strong>Make:</strong> {vehicleInfo.make}
        </p>
        <p>
          <strong>Model:</strong> {vehicleInfo.model}
        </p>
        <p>
          <strong>Year:</strong> {vehicleInfo.year}
        </p>
      </div>
    </div>
  );
};

export default CarInfo;
