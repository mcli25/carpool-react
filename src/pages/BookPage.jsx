import Book from "../components/CarSearch/Book";
import Topbar from "../components/Topbar";
import { AuthProvider } from "../context/Auth";
import { InfoProvider } from "../context/Info";
const BookPage = () => {
  return (
    <AuthProvider>
      <InfoProvider>
        <Topbar></Topbar>
        <Book></Book>;
      </InfoProvider>
    </AuthProvider>
  );
};

export default BookPage;
