import Explore from "../components/CarStore/Explore";
import Topbar from "../components/Topbar";
import { AuthProvider } from "../context/Auth";
import { InfoProvider } from "../context/Info";
const ExplorePage = () => {
  return (
    <AuthProvider>
      <InfoProvider>
        <Topbar></Topbar>
        <Explore></Explore>
      </InfoProvider>
    </AuthProvider>
  );
};

export default ExplorePage;
