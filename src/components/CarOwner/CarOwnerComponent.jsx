import React, { useState } from "react";
import Publish from "./Publish";
import PopularRoutes from "./PopularRoutes";
import CarInfo from "./CarInfo";

const CarOwnerComponent = () => {
  const [displayComponent, setDisplayComponent] = useState(null);

  const showCarInfoComponent = () => {
    setDisplayComponent(<CarInfo />);
  };

  const showPopularRoutesComponent = () => {
    setDisplayComponent(<PopularRoutes />);
  };

  const showPublishComponent = () => {
    setDisplayComponent(<Publish />);
  };

  return (
    <div>
      <h1>Car Owner</h1>
      <button onClick={CarInfo}>showCarInfoComponent</button>
      <button onClick={PopularRoutes}>showPopularRoutesComponent</button>
      <button onClick={Publish}>showPublishComponent</button>
      {displayComponent}
    </div>
  );
};

export default CarOwnerComponent;
