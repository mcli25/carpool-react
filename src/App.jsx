import {
  Button,
  Dropdown,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Avatar } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Navbar
        bg="primary"
        expand="lg"
        variant="dark"
        style={{ height: "80px", padding: "20px" }}
      >
        <Container>
          <Navbar.Brand href="#home">Carpool</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
                style={{ fontSize: "18px" }}
              />
              <Button
                variant="outline-light"
                style={{
                  fontSize: "18px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Search
              </Button>
            </Form>
            <Nav className="mr-auto">
              <Nav.Link href="#explore" style={{ fontSize: "18px" }}>
                Explore
              </Nav.Link>
              <Nav.Link href="/publish" style={{ fontSize: "18px" }}>
                Publish
              </Nav.Link>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <Avatar></Avatar>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/login">Log in</Dropdown.Item>
                <Dropdown.Item href="#/action-2">My favorites</Dropdown.Item>
                <Dropdown.Item href="#/action-3">My publishs</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex">
        <div className="w-25">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
