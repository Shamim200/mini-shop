import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={9}>
          <Card>
            <Card.Body>
              <h4 className="text-capitalize text-center">sign up form</h4>
              <Form method="POST" className="my-5">
                <Form.Group className="my-4">
                  <Form.Control
                    name="fullname"
                    id="fullname"
                    type="text"
                    placeholder="Enter Your Full Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="my-4">
                  <Form.Control
                    name="username"
                    id="username"
                    type="text"
                    placeholder="Enter Your User Name"
                    required
                  />
                </Form.Group>

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

                <p className="text-capitalize">
                  all ready have an account?{" "}
                  <Link
                    className="text-decoration-none text-success"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </p>
                <Button variant="outline-primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Signup;
