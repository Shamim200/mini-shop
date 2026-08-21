import { useParams } from "react-router-dom";
import { useGetProudctByIdQuery } from "../services/api";
import Loader from "../components/Loader";
import { Button, Col, Container, Row } from "react-bootstrap";
import useCart from "../Hooks/useCart";

const SingelProduct = () => {
  const { isInCart, handelAddToCart, handelRemoveFromCart } = useCart();

  const { id } = useParams();
  const { data: product, isLoading } = useGetProudctByIdQuery(id);
  if (isLoading) {
    return <Loader />;
  }

  if (!product) return <div>No product found!</div>;

  const {
    thumbnail,
    title,
    description,
    category,
    brand,
    weight,
    reviews,
    price,
  } = product;

  return (
    <Container>
      <div className="p-4">
        <img
          src={thumbnail}
          className="d-block img-fluid mx-auto"
          alt={title}
        />
        <div className="">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>category: {category}</p>
          <p>brand: {brand}</p>
          <p>weight: {weight}kg</p>
        </div>
        <Row className="g-3 my-2">
          {reviews.map((item) => {
            const { reviewerName, date, reviewerEmail, rating, comment } = item;
            return (
              <Col key={rating} lg={4} md={6} sm={12}>
                <div className="border p-4 rounded singel-products">
                  <h4>{reviewerName}</h4>
                  <p>{new Date(date).toLocaleDateString()}</p>
                  <p>{reviewerEmail}</p>
                  <p>Rating: {rating}</p>
                  <p>{comment}</p>
                </div>
              </Col>
            );
          })}
        </Row>

        {isInCart(product.id) ? (
          <Button
            variant="danger"
            onClick={() => handelRemoveFromCart({ id: product.id })}
          >
            remove
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() =>
              handelAddToCart({
                id: product.id,
                title,
                price,
                thumbnail,
              })
            }
          >
            add
          </Button>
        )}
      </div>
    </Container>
  );
};
export default SingelProduct;
