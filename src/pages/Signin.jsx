import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Card>
            <Card.Body>
              <h4 className="text-capitalize text-center">sign up form</h4>
              <Form method="POST" className="my-5">
                <Form.Group className="my-4">
                  <Form.Control
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    type="email"
                    required
                  />
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Control
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </Form.Group>

                <Link
                  className="text-decoration-none text-primary"
                  to="/forgot-password"
                >
                  Forgot Password
                </Link>
                <p className="text-capitalize mt-3">
                  create an account?{" "}
                  <Link
                    className="text-decoration-none text-success"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </p>
                <Button variant="outline-success" type="submit">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Signin;
