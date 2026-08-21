import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "../components/DarkMode";
import logo from "../assets/images/vite.svg";
import useCart from "../Hooks/useCart";

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
  const { cart, totalAmount, handelClearCart } = useCart();

  return (
    <>
      <Navbar
        sticky="top"
        expand="sm"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
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
                  <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                  {cart.length > 0 ? (
                    cart.map((item) => {
                      return (
                        <div
                          className="d-flex justify-content-around p-2 align-items-center gap-3"
                          key={item.id}
                        >
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            style={{ width: "50px" }}
                          />
                          <p>{item.title}</p>
                          <p>${item.price}</p>
                        </div>
                      );
                    })
                  ) : (
                    <p className="p-2">your cart is empty</p>
                  )}
                  <hr />
                  {cart.length > 0 && (
                    <div className="d-flex align-items-center justify-content-around">
                      <Button
                        variant="outline-danger"
                        className="mx-3 text-capitalize"
                        onClick={() => handelClearCart()}
                      >
                        clear cart
                      </Button>

                      <Button>
                        <Link
                          to="/carts"
                          className="text-capitalize text-decoration-none"
                        >
                          Cart page
                        </Link>
                      </Button>
                      <p>Total: {totalAmount}</p>
                    </div>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
