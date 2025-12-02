import { Placeholder, Card } from "react-bootstrap";
const Skeleton = () => {
  return (
    <Card>
      <div style={{ width: "100%", height: 180, overflow: "hidden" }}>
        <Placeholder as="div" animation="wave" className="w-100">
          <Placeholder xs={12} style={{ height: 180 }} />
        </Placeholder>
      </div>

      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder
          as={Card.Text}
          className="d-flex gap-4 justify-content-between align-items-center"
          animation="glow"
        >
          <Placeholder xs={2} />
          <Placeholder.Button variant="primary" xs={4} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};
export default Skeleton;
