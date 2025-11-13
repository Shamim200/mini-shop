import { Form } from "react-bootstrap";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <Form className="w-50 w-md-100" onSubmit={(e) => e.preventDefault()}>
      <Form.Control
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="search"
      />
    </Form>
  );
};
export default Search;
