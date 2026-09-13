import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRightLong, FaHouse } from "react-icons/fa6";

const NotFound = () => {
  return (
    <Container>
      <div className="text-center my-5">
        <h4>404 Page not found 😓!</h4>
        <Link to="/">
          <Button variant="outline-info" className="text-capitalize">
            go home <FaHouse />
          </Button>
        </Link>
      </div>
    </Container>
  );
};
export default NotFound;
