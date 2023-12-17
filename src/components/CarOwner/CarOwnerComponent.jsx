import React from "react";
import HistoryRoutes from "./HistoryRoutes";
import CarInfo from "./CarInfo";
import CurrentRoute from "./CurrentRoute";

const CarOwnerComponent = () => {
  return (
    <>
      {" "}
      <CurrentRoute></CurrentRoute>
      <CarInfo></CarInfo>
      <HistoryRoutes></HistoryRoutes>
    </>
  );
};

export default CarOwnerComponent;
