import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const navList = [
  {
    title: "home",
    links: "/",
  },
  {
    title: "about",
    links: "/about",
  },
  {
    title: "products",
    links: "/products",
  },
  {
    title: "contact",
    links: "/contact",
  },
];

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="./public/vite.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 text-capitalize">
            {navList.map((val, ind) => {
              const { title, links } = val;

              return (
                <Nav.Link key={ind} as={NavLink} to={links}>
                  {title}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="ms-auto text-capitalize">
            <Nav.Link as={NavLink} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              <FaShoppingCart size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
