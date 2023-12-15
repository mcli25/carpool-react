import React from "react";
import Publish from "./Publish";
import HistoryRoutes from "./HistoryRoutes";
import CarInfo from "./CarInfo";
import { Routes, Route, Link } from "react-router-dom";
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
