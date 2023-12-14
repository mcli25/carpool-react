import Home from "../components/Home";
import Topbar from "../components/Topbar";
import { AuthProvider } from "../context/Auth";
import { InfoProvider } from "../context/Info";
const HomePage = () => {
  return (
    <AuthProvider>
      <InfoProvider>
        {" "}
        <Topbar></Topbar>
        <Home></Home>;
      </InfoProvider>
    </AuthProvider>
  );
};

export default HomePage;
