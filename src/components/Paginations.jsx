import { Pagination } from "react-bootstrap";
const Paginations = ({ page, setPage, limit }) => {
  const totalProducts = 30;
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <Pagination size="md" className="my-4 justify-content-center">
      <Pagination.First onClick={() => setPage(1)} disabled={page === 1} />
      <Pagination.Prev
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
      />
      {[...Array(totalPages)].map((_, i) => (
        <Pagination.Item
          key={i + 1}
          active={page === i + 1}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
      />
      <Pagination.Last
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
      />
    </Pagination>
  );
};
export default Paginations;
