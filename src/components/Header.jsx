import { Navbar, Nav, Container, Dropdown, Badge } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { useSelector } from "react-redux";

const navList = [
  {
    title: "home",
    links: "/",
  },

  {
    title: "products",
    links: "/products",
  },
  {
    title: "categories",
    links: "/categories",
  },
];

const Header = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <Navbar
      sticky="top"
      expand="sm"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
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
            <DarkMode />
            <Dropdown align="end">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="15px" />
                {/* <Badge>0</Badge> */}
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length === 0 && <p>your cart is empty</p>}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
