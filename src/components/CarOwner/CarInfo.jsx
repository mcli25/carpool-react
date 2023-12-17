import React, { useState } from "react";

const CarInfo = () => {
  const [vehicleInfo, setVehicleInfo] = useState({
    Name: "Sprinter Trueno AE86",
    Make: "Toyota",
    Model: "AE86",
    Year: 1987,
    Color: "Write",
    Type: "Compact Car",
    Layout: "Front-Engined, Rear-Wheel Drive",
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
