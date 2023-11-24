import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { current_ride_sharing_data } from "../data/test";

const Sidebar = () => {
  const handleClick = () => {
    console.log("first");
  };
  return (
    <>
      {" "}
      <Card body>
        <strong>Popular Destination</strong>
      </Card>
      <ListGroup>
        {current_ride_sharing_data.map((cur, index) => {
          return (
            <>
              <ListGroup.Item
                key={index}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                {cur.destination}
              </ListGroup.Item>
            </>
          );
        })}
      </ListGroup>
    </>
  );
};

export default Sidebar;
