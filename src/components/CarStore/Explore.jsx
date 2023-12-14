import React, { useContext } from "react";
import AuthContext from "../../context/Auth";

const Explore = () => {
  const { name } = useContext(AuthContext);
  return <div>{name}</div>;
};

export default Explore;
