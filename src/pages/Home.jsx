import { Row, Col } from "react-bootstrap";
import { FaTruck } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { TbDiscountFilled } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

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
  );
};
export default Home;
