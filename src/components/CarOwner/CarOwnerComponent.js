import React, { useState } from "react";
import PublishComponent from "./PublishComponent";
import PopularRoutesComponent from "./PopularRoutesComponent";
import CarInfoComponent from "./CarInfoComponent";

const CarOwnerComponent = () => {
  const [displayComponent, setDisplayComponent] = useState(null);

  const showCarInfoComponent = () => {
    setDisplayComponent(<CarInfoComponent />);
  };

  const showPopularRoutesComponent = () => {
    setDisplayComponent(<PopularRoutesComponent />);
  };

  const showPublishComponent = () => {
    setDisplayComponent(<PublishComponent />);
  };

  return (
    <div>
      <h1>Car Owner</h1>
      <button onClick={showCarInfoComponent}>showCarInfoComponent</button>
      <button onClick={showPopularRoutesComponent}>
        showPopularRoutesComponent
      </button>
      <button onClick={showPublishComponent}>showPublishComponent</button>
      {displayComponent}
    </div>
  );
};

export default CarOwnerComponent;
