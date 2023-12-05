import React, { useState } from "react";
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
const Topbar = ({ isLogged, user, handleLogout }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Your location"
              className="mr-2"
              style={{ fontSize: "18px" }}
            />
            <FormControl
              type="text"
              placeholder="Destination"
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
            <Nav.Link href="/explore" style={{ fontSize: "18px" }}>
              Explore
            </Nav.Link>
            {isLogged && <Publish></Publish>}
          </Nav>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" variant="success">
              <Avatar>{user.displayName}</Avatar>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {!isLogged && <Dropdown.Item href="/login">Log in</Dropdown.Item>}
              {isLogged && (
                <Dropdown.Item href="/profile">My profile</Dropdown.Item>
              )}

              {isLogged && (
                <Dropdown.Item href="/favorites">My favorites</Dropdown.Item>
              )}
              {isLogged && (
                <Dropdown.Item href="/action-3">My publishs</Dropdown.Item>
              )}
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
