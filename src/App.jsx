import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar></Topbar>
      </div>
    </Router>
  );
}

export default App;
