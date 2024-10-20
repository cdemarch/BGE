import {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useSignup } from "../hooks/useSignup.jsx";

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { signUp, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signUp(username, password, firstName, lastName);
  }

  return (
    <Form onSubmit={handleSubmit}>
          {/* Create Account Title */}
          <h2 className="mb-4">Create Account</h2>
          {/* FORM */}

            {/* First Name Value */}
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>

            {/* Last Name Value */}
            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>

            {/* Username value */}
            <Form.Group controlId="formUserName" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            {/* Password */}
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Sign Up Button */}
            <Button variant="primary" type="submit" className="w-100" disabled={isLoading}>
              Sign Up
            </Button>
          {error && <div className="error">{error}</div>}
          </Form>
  )
}

export default SignupPage;