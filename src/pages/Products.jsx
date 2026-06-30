import { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useGetProductsQuery } from "../services/api";

import Search from "../components/Search";
import Sort from "../components/Sort";
import Paginations from "../components/Paginations";
import Skeleton from "../components/Skeleton";
import { Link } from "react-router-dom";
import { addToCart, removeCart } from "../features/cart/cart";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  // handel add to cart
  const handelAddToCart = ({ id, title, price }) => {
    dispatch(addToCart({ id, title, price }));
  };

  // handel remove from cart
  const handelRemoveFromCart = (id) => {
    dispatch(removeCart(id));
  };

  const { data, isLoading, isError, error } = useGetProductsQuery({
    searchTerm,
    page,
    limit,
  });

  if (isError) {
    console.log("data fetching error: ", error.message);
  }

  let products = data?.products || [];

  // sort by title
  if (sortBy === "title") {
    products = products.toSorted((a, b) => {
      if (order === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  }

  // sort by price

  if (sortBy === "price") {
    // products = [...products].sort((a, b) => {
    //   if (order === "asc") {
    //     return a.price - b.price;
    //   } else {
    //     return b.price - a.price;
    //   }
    // });
    products = products.toSorted((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  // sort by rating

  if (sortBy === "rating") {
    // [...products].sort((a, b) => {
    //   if (order === "asc") {
    //     return a.rating - b.rating;
    //   } else {
    //     return b.rating - a.rating;
    //   }
    // });
    products = products.toSorted((a, b) => {
      if (order === "asc") {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });
  }

  return (
    <Container>
      <div className="d-flex justify-content-md-between align-items-md-center py-4 flex-md-row flex-column flex-wrap">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Sort
          sortBy={sortBy}
          setSortBy={setSortBy}
          order={order}
          setOrder={setOrder}
        />
      </div>
      <Row className="g-3 my-2 card-bg py-2">
        {isLoading ? (
          <Row className="g-4">
            {[...Array(4)].map((_, i) => {
              return (
                <Col lg={3} md={6} sm={12} key={i}>
                  <Skeleton />
                </Col>
              );
            })}
          </Row>
        ) : products?.length > 0 ? (
          products?.map((product) => {
            const { id, title, thumbnail, price, rating } = product;
            return (
              <Col lg={3} md={6} sm={12} key={id}>
                <Card className="cardBg">
                  <Link to={`/products/${id}`}>
                    <Card.Img
                      variant="top"
                      className="img-thumbnail"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        padding: "1rem",
                        margin: "auto",
                      }}
                      src={thumbnail}
                    />
                  </Link>
                  <Card.Body className="p-4">
                    <Card.Title>
                      <h5>{title.slice(0, 20) || <Skeleton />}</h5>
                    </Card.Title>

                    <p className="py-1">rating: {rating}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="py-2">${price}</p>
                      {/* <Button
                        variant="outline-success"
                        onClick={() => handelAddToCart({ id, title, price })}
                      >
                        Add To Cart
                      </Button> */}
                      {cart.some((item) =>
                        item.id === id ? (
                          <Button onClick={() => handelRemoveFromCart(id)}>
                            remove cart
                          </Button>
                        ) : (
                          <Button
                            onClick={() =>
                              handelAddToCart({ thumbnail, id, title, price })
                            }
                          >
                            Add To Cart
                          </Button>
                        ),
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <p className="text-center text-capitalize">no products found😔!</p>
        )}
      </Row>

      <Paginations page={page} setPage={setPage} limit={limit} />
    </Container>
  );
};
export default Products;
