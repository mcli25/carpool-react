import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { irelandCities } from "../data/cities";
const Sidebar = ({ setSearchResults, infos }) => {
  const handleClick = (cur) => {
    console.log("Clicked:", cur);
    console.log(infos);
    const res = infos.filter((info) => info.destination === cur);
    setSearchResults(res);
  };
  return (
    <>
      {" "}
      <Card body>
        <strong>Popular Destination</strong>
      </Card>
      <ListGroup>
        {irelandCities.map((cur, index) => {
          return (
            <ListGroup.Item
              key={index}
              onClick={() => handleClick(cur)}
              style={{ cursor: "pointer" }}
            >
              {cur}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default Sidebar;
