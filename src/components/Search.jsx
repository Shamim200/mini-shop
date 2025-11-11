import { Form } from "react-bootstrap";

const Search = ({ q, setQ }) => {
  console.log(q);

  return (
    <Form className="w-50 w-md-100" onSubmit={(e) => e.preventDefault()}>
      <Form.Control
        value={q}
        onChange={(e) => setQ(e.target.value)}
        type="text"
        placeholder="search"
      />
    </Form>
  );
};
export default Search;
