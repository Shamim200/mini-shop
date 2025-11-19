import { Form } from "react-bootstrap";

const Sort = ({ sortBy, setSortBy, order, setOrder }) => {
  const options = ["title", "price", "rating"];
  const orderOptions = ["asc", "desc"];
  return (
    <>
      <Form
        className="d-flex flex-wrap gap-3 align-items-center my-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <Form.Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ width: "200px" }}
        >
          {options.map((item) => [
            <option key={item} value={item}>
              {item}
            </option>,
          ])}
        </Form.Select>
        <Form.Select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          style={{ width: "200px" }}
        >
          {orderOptions.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </Form.Select>
      </Form>
    </>
  );
};
export default Sort;
