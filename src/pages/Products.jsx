import { useState } from "react";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import Loader from "../components/Loader";
import { useGetProductsQuery } from "../services/api";

import Search from "../components/Search";
import Sort from "../components/Sort";

const Products = () => {
  const [q, setQ] = useState("");

  const { data, isLoading, isError, error } = useGetProductsQuery(q);

  if (isError) {
    console.log("data fetching error: ", error.message);
  }

  let products = data?.products;

  return (
    <Container>
      <div className="d-flex justify-content-md-between align-items-md-center py-4 flex-md-row flex-column ">
        <Search q={q} setQ={setQ} />
        <Sort />
      </div>
      <Row className="g-3 my-2 card-bg">
        {isLoading ? (
          <Loader />
        ) : products.length === 0 ? (
          <p className="text-center text-capitalize">no products found😔!</p>
        ) : (
          products.map((product) => {
            const { id, title, thumbnail, price } = product;
            return (
              <Col lg={3} md={6} sm={12} key={id}>
                <Card className="cardBg">
                  <Card.Img
                    variant="top"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      padding: "1rem",
                      margin: "auto",
                    }}
                    src={thumbnail}
                  />
                  <Card.Body className="p-4">
                    <Card.Title>
                      <h5>{title.slice(0, 20)}</h5>
                    </Card.Title>

                    <div className="d-flex justify-content-between align-items-center">
                      <p style={{ margin: "1rem 0" }}>${price}</p>
                      <Button variant="outline-success">Add To Cart</Button>
                      {/* {cart.some((item) => {
                        item.id === product.id ? (
                          <Button
                            onClick={handelAddCart}
                            variant="outline-success"
                          >
                            add to cart
                          </Button>
                        ) : (
                          <Button
                            onClick={handelRemoveCart}
                            variant="outline-danger"
                          >
                            remove cart
                          </Button>
                        );
                      })} */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};
export default Products;
