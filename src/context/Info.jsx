import { createContext, useState } from "react";
import { current_ride_sharing_data } from "../data/test";
const InfoContext = createContext();

const InfoProvider = ({ children }) => {
  const data = current_ride_sharing_data;
  //infos in the timetable
  const [infos, setInfos] = useState(data);

  const [searchResults, setSearchResults] = useState(infos);
  const valueToShare = { searchResults, infos, setSearchResults };

  return (
    <InfoContext.Provider value={valueToShare}>{children}</InfoContext.Provider>
  );
};

export { InfoProvider };
export default InfoContext;
