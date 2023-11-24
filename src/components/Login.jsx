import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GoogleSigninAPI, LoginAPI } from "../api/AuthAPI";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";

const Login = () => {
  const [credentials, setCredentials] = useState([]);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await LoginAPI(credentials.email, credentials.password);
      console.log(res);
      toast.success("Successfully signed in");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Please check your credientials");
    }
  };

  const googleSignin = () => {
    let res = GoogleSigninAPI();
    console.log(res);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Form
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setCredentials({ ...credentials, email: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setCredentials({ ...credentials, password: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "12px 12px",
            fontSize: "1.2rem",
          }}
          onClick={() => login()}
        >
          Sign in
        </Button>
        <hr />
        <GoogleButton
          style={{ width: "100%" }}
          onClick={googleSignin}
        ></GoogleButton>
        <p className="mt-3 mb-0 text-center">
          Not registered? <Link to="/register">Sign up</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
