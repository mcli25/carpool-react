import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebaseConfig";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
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

  const valueToShare = { setIsLogged, setUser, isLogged, user, handleLogout };
  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
