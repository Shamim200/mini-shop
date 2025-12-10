import { useParams } from "react-router-dom";
import { useGetProudctByIdQuery } from "../services/api";
import Loader from "../components/Loader";
import { Container } from "react-bootstrap";

const SingelProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProudctByIdQuery(id);
  if (isLoading) {
    return <Loader />;
  }

  if (!product) return <div>No product found!</div>;

  return (
    <Container className="my-5">
      <h4>{product.title}</h4>
    </Container>
  );
};
export default SingelProduct;
