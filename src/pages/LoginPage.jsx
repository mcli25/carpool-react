import React, { useEffect } from "react";
import Login from "../components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      // console.log(res?.accessToken);
      if (res?.accessToken) {
        navigate("/");
      }
    });
  }, []);
  return <Login></Login>;
};

export default LoginPage;
