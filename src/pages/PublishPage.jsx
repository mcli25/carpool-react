import Publish from "../components/CarOwner/Publish";
import Topbar from "../components/Topbar";
import { AuthProvider } from "../context/Auth";
import { InfoProvider } from "../context/Info";
const PublishPage = () => {
  return (
    <AuthProvider>
      <InfoProvider>
        <Topbar></Topbar>
        <Publish></Publish>;
      </InfoProvider>
    </AuthProvider>
  );
};

export default PublishPage;
