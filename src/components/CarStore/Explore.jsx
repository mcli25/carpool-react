import React, { useContext } from "react";
import AuthContext from "../../context/Auth";

const Explore = () => {
  const { name } = useContext(AuthContext);
  return <div>hello world</div>;
};

export default Explore;
