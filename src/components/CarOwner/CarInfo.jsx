import React, { useState } from "react";

const CarInfo = () => {
  const [vehicleInfo, setVehicleInfo] = useState({
    make: "Japan",
    model: "AE86",
    year: "1997",
    imageUrl: "public/img/AE86.JPG",
  });
  return (
    <div className="container-carinfo">
      <div className="car-img">
        {/* 历史线路内容 */}
        <img
          src={vehicleInfo.imageUrl}
          alt={`${vehicleInfo.make} ${vehicleInfo.model}`}
          width={1000}
        />
        {/* 假设你有一个函数来获取并展示历史线路 */}
        {/* {renderHistoryRoutes()} */}
      </div>
      <div className="vehicle-info">
        {/* 车辆信息内容 */}
        <h3>My Vehicle</h3>
        {/* 假设你有一个函数来获取并展示车辆信息 */}
        {/* {renderVehicleInfo()} */}

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
