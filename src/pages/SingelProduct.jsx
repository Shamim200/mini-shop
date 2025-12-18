import { useParams } from "react-router-dom";
import { useGetProudctByIdQuery } from "../services/api";
import Loader from "../components/Loader";
import { Button, Col, Container, Row } from "react-bootstrap";

const SingelProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProudctByIdQuery(id);
  if (isLoading) {
    return <Loader />;
  }

  if (!product) return <div>No product found!</div>;

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-start align-items-start">
        <img className="w-50" src={product.thumbnail} alt={product.title} />
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>category: {product.category}</p>
          <p>brand: {product.brand}</p>
          <p>weight: {product.weight}kg</p>

          <div className="my-3 d-flex justify-content-center flex-column gap-4">
            {product.reviews.map((item) => {
              return (
                <div className="bg-secondary p-4 rounded" key={item.rating}>
                  <h4>{item.reviewerName}</h4>
                  <p>Reviewed on: {new Date(item.date).toLocaleDateString()}</p>
                  <p>{item.reviewerEmail}</p>
                  <p>Rating: {item.rating}</p>
                  <p>{item.comment}</p>
                </div>
              );
            })}
          </div>

          <p>price: {product.price}</p>
          <Button variant="outline-primary" className="text-capitalize">
            add to cart
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default SingelProduct;
