import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import { useGetProductsQuery } from "../services/api";

import Search from "../components/Search";
import Sort from "../components/Sort";

const Products = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  if (isError) {
    console.log("data fetching error: ", error.message);
  }

  return (
    <Container>
      <div className="d-flex justify-content-md-between align-items-md-center py-4 flex-md-row flex-column ">
        <Search />
        <Sort />
      </div>
      <Row className="g-3 my-2">
        {isLoading ? (
          <Loader />
        ) : data.length === 0 ? (
          "no products found!"
        ) : (
          data.map((product) => {
            const { id, title, image, price } = product;
            return (
              <Col lg={3} md={6} sm={12} key={id}>
                <Card>
                  <Card.Img
                    variant="top"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      padding: "1rem",
                      margin: "auto",
                    }}
                    src={image}
                  />
                  <Card.Body className="p-4">
                    <Card.Title>
                      <h5>{title.slice(0, 20)}</h5>
                    </Card.Title>

                    <div className="d-flex justify-content-between align-items-center">
                      <p style={{ margin: "1rem 0" }}>${price}</p>
                      <Button variant="outline-primary">Add To Cart</Button>
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
