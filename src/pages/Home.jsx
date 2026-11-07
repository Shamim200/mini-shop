import { Row, Col, Button } from "react-bootstrap";
import { FaTruck } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { TbDiscountFilled } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import thumbnail from "../assets/images/thumbnail.jpg";
import { Link } from "react-router-dom";
const data = [
  {
    icon: <FaTruck />,
    title: "Free Delivery",
    desc: "Orders from all items",
  },
  {
    icon: <RiRefund2Line />,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    icon: <TbDiscountFilled />,
    title: "Member Discount",
    desc: "On order over $99",
  },
  {
    icon: <MdSupportAgent />,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
  },
];

const Home = () => {
  return (
    <>
      <Row className="g-3 p-4 d-flex justify-content-between align-items-start">
        <Col lg={6} md={6}>
          <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, dolorem.
          </h6>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            facere illum dolorem, non soluta expedita blanditiis veniam quasi id
            minima, sed voluptate consequatur nobis mollitia saepe voluptatibus
            est, rerum laborum fuga nulla? Error numquam esse corrupti? Vel unde
            facere recusandae ea. Corporis nesciunt nobis optio!
          </p>
          <Link to="/products">
            <Button variant="outline-success" className="text-capitalize">
              see products
            </Button>
          </Link>
        </Col>
        <Col lg={6} md={6}>
          <img className="img-fluid" src={thumbnail} alt="nature photo" />
        </Col>
      </Row>
      <Row className="g-3 p-4">
        {data.map((item) => {
          return (
            <Col lg={3} md={6} sm={12} key={item.title}>
              <div className="my-grid">
                <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                <div>
                  <p>
                    {item.title} <br />
                    {item.desc}
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Home;
