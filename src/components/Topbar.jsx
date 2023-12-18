import React, { useContext, useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Avatar } from "@mui/material";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import Publish from "./CarOwner/Publish";
import AuthContext from "../context/Auth";
import InfoContext from "../context/Info";

import { NavLink } from "react-router-dom";
const Topbar = () => {
  const { isLogged, user, handleLogout } = useContext(AuthContext);
  const { infos, setSearchResults } = useContext(InfoContext);

  const [start, setStart] = useState("");
  const [dest, setDest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = infos.filter(
      (info) =>
        info.departure.toLowerCase().includes(start) &&
        info.destination.toLowerCase().includes(dest)
    );
    setSearchResults(res);
  };
  const handleStartChange = (e) => {
    e.preventDefault();
    setStart(e.target.value);
  };
  const handleDestChange = (e) => {
    e.preventDefault();
    setDest(e.target.value);
  };
  return (
    <Navbar
      bg="success"
      expand="lg"
      variant="dark"
      style={{ height: "80px", padding: "20px" }}
    >
      <Container>
        <Navbar.Brand href="/">Carpool</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {!isLogged && (
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Your location"
                className="mr-2"
                style={{ fontSize: "18px" }}
                onChange={handleStartChange}
              />
              <FormControl
                type="text"
                placeholder="Destination"
                className="mr-2"
                style={{ fontSize: "18px" }}
                onChange={handleDestChange}
              />
              <Button
                variant="outline-light"
                style={{
                  fontSize: "18px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                onClick={handleSubmit}
              >
                Search
              </Button>
            </Form>
          )}
          <Nav className="mr-auto">
            {isLogged && (
              <Nav.Link as={NavLink} to="/explore" style={{ fontSize: "18px" }}>
                Explore
              </Nav.Link>
            )}
            {isLogged && (
              <Nav.Link as={NavLink} to="/book" style={{ fontSize: "18px" }}>
                Book
              </Nav.Link>
            )}
            {isLogged && (
              <Nav.Link
                as={NavLink}
                to="/carowner"
                style={{ fontSize: "18px" }}
              >
                CarOwner
              </Nav.Link>
            )}
          </Nav>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" variant="success">
              <Avatar>{user?.displayName}</Avatar>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {!isLogged && <Dropdown.Item href="/login">Log in</Dropdown.Item>}

              {isLogged && (
                <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
