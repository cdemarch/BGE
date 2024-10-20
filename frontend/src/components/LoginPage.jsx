import {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="mb-4">Login</h2>
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
      <Button variant="primary" type="submit" className="w-100">
        Login
      </Button>
      <Button variant="link" className="w-100" href="/signup">
        Make an account Here
      </Button>
    </Form>
  )
}

export default LoginPage;