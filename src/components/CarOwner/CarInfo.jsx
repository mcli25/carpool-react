import React, { useState } from "react";

const CarInfo = () => {
  const [vehicleInfo, setVehicleInfo] = useState({
    PlateNumber: "13-954",
    Name: "Sprinter Trueno AE86",
    Manufacturer: "Toyota",
    Model: "AE86",
    Year: 1987,
    Color: "Write/Black",
    Type: "Compact Car",
    Layout: "Front-Engined, Rear-Wheel Drive",
    EngineType: "4A-GE 1.6L Inline-4",
    MaximumPower: "130 horsepower (97 kW)",
    Transmission: "5-speed manual or 4-speed automatic",
    TireSize: "185/60HR14",
    Weight: "Approximately 950 kg",
    imageUrl: "/img/AE86.JPG",
  });
  return (
    <div className="carinfo-page-container">
      <div className="vehicle-info-container">
        <div className="vehicle-info">
          <h3>My Vehicle</h3>
          <table>
            <tbody>
              {Object.getOwnPropertyNames(vehicleInfo).map(
                (property) =>
                  property !== "imageUrl" && (
                    <tr key={property}>
                      <th>{property}:</th>
                      <td>{vehicleInfo[property]}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
