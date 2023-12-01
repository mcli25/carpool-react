import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Topbar from "./Topbar";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { current_ride_sharing_data } from "../data/test";
import Timetable from "./Timetable";
const Home = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const data = current_ride_sharing_data;
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfullly");
        setIsLogged(false);
        setUser({});
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      //   console.log(res?.accessToken);
      //   console.log(res);
      if (res) {
        console.log(res);
        setIsLogged(true);
        setUser(res);
      }
    });
  }, []);
  return (
    <>
      {" "}
      <Topbar
        isLogged={isLogged}
        user={user}
        handleLogout={handleLogout}
      ></Topbar>
      <div className="d-flex">
        <div className="w-25">
          <Sidebar></Sidebar>
        </div>
        <div className="w-100">
          <Timetable data={data}></Timetable>
        </div>
      </div>
    </>
  );
};

export default Home;
