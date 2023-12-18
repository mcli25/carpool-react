import { createContext, useEffect, useState } from "react";
import { current_ride_sharing_data } from "../data/test";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
const InfoContext = createContext();
const InfoProvider = ({ children }) => {
  //   const data = current_ride_sharing_data;

  //infos in the timetable
  const [infos, setInfos] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const fetchRoutes = async () => {
    await getDocs(collection(db, "routes")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData);
      setInfos(newData);
      setSearchResults(newData);
    });
  };

  useEffect(() => {
    fetchRoutes();
    console.log(infos);
    console.log(searchResults);
  }, []);

  const valueToShare = { searchResults, infos, setSearchResults };

  return (
    <InfoContext.Provider value={valueToShare}>{children}</InfoContext.Provider>
  );
};

export { InfoProvider };
export default InfoContext;
