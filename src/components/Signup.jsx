import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RegisterAPI } from "../api/AuthAPI";
import { toast } from "react-toastify";

const Signup = () => {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();

  const signup = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      console.log(res);
      toast.success("Successfully signed up");
      navigate("/login");
    } catch (error) {
      alert(error.errors.message);
      toast.error("Please check your credientials");
    }
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
        <h2 className="text-center mb-4">Sign up</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
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
          onClick={() => signup()}
        >
          Sign up
        </Button>
        <p className="mt-3 mb-0 text-center">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Signup;
