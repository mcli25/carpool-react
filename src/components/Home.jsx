import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Topbar from "./Topbar";
import { current_ride_sharing_data } from "../data/test";
import Timetable from "./Timetable";
import InfoContext from "../context/Info";
const Home = () => {
  const { searchResults, infos, setSearchResults } = useContext(InfoContext);

  const addInfo = (info) => {
    setInfos((infos) => [...infos, info]);
  };

  const deleteInfo = (id) => {
    setInfos((infos) => infos.filter((info) => info.id !== id));
  };

  const handleToggle = (id) => {
    setSearchResults((searchResults) =>
      searchResults.map((s) => {
        return s.id === id ? { ...s, selected: !s.selected } : s;
      })
    );
  };

  return (
    <>
      {" "}
      <div className="d-flex">
        <div className="w-25">
          <Sidebar setSearchResults={setSearchResults} infos={infos}></Sidebar>
        </div>
        <div className="w-100">
          <Timetable
            searchResults={searchResults}
            ontoggleItem={handleToggle}
          ></Timetable>
        </div>
      </div>
    </>
  );
};

export default Home;
