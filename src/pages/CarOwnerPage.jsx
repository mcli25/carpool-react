import Topbar from "../components/Topbar";
import { AuthProvider } from "../context/Auth";
import { InfoProvider } from "../context/Info";
import CarOwnerComponent from "../components/CarOwner/CarOwnerComponent";

const PublishPage = () => {
  return (
    <AuthProvider>
      <InfoProvider>
        <Topbar></Topbar>
        <CarOwnerComponent></CarOwnerComponent>
      </InfoProvider>
    </AuthProvider>
  );
};

export default PublishPage;
