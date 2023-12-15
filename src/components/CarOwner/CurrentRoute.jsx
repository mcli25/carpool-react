import React, { useState } from "react";
import Publish from "./Publish";
import "./CarOwner.css";

export default function CurrentRoute() {
  const [showPulish, setShowPublish] = useState(false);

  const handleModalOpen = () => {
    setShowPublish(true);
  };
  const handleModalClose = () => {
    setShowPublish(false);
  };

  return (
    <>
      {!showPulish && (
        <div class="container--1">
          <div class="current-route">
            The current route: Dubelin - Cork at Dec. 25th 4p
          </div>
          <div>
            <a class="btn1" href="#" onClick={handleModalOpen}>
              pulish
            </a>
          </div>
        </div>
      )}
      {showPulish && <Publish handleModalClose={handleModalClose}></Publish>}
    </>
  );
}
