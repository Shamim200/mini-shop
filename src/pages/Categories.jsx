import { Container, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../services/api";
import Loader from "../components/Loader";

const Categories = () => {
  const { isLoading, isError, error, data } = useGetProductsQuery("");
  const products = data?.products;

  if (isError) {
    console.log("data fetching error: ", error.message);
  }

  return (
    <Container>
      <div className="row g-3 my-5">
        {isLoading ? (
          <Loader />
        ) : (
          products.map((item) => {
            return (
              <Col lg={3} md={6} sm={12} key={item.id}>
                <div className="bg-secondary p-4 text-capitalize">
                  {item.category}
                  <br />
                  {/* <Link to="/products">view products</Link> */}
                </div>
              </Col>
            );
          })
        )}
      </div>
    </Container>
  );
};
export default Categories;
