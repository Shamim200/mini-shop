import { Button, Container } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import useCart from "../Hooks/useCart";

const Carts = () => {
  const { cart, handelClearCart, handelRemoveFromCart, totalAmount } =
    useCart();
  return (
    <Container className="my-5">
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div
              className="d-flex flex-wrap justify-content-between p-2 align-items-center"
              key={item.id}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "200px" }}
                className="img-fluid"
              />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <Button
                onClick={() => handelRemoveFromCart({ id: item.id })}
                variant="danger"
              >
                <MdDelete size={20} />
              </Button>
            </div>
          );
        })
      ) : (
        <p className="p-2 text-capitalize text-center">your cart is empty!</p>
      )}
      <hr />
      {cart.length > 0 && (
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="outline-danger"
            className="mx-3 text-capitalize"
            onClick={() => handelClearCart()}
          >
            clear cart
          </Button>
          <p>Total Amount = ${totalAmount.toFixed(2)}</p>
        </div>
      )}
    </Container>
  );
};
export default Carts;
