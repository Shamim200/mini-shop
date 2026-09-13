import { Button, Container } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import useCart from "../Hooks/useCart";

const Carts = () => {
  const {
    cart,
    isInCart,
    handelDecrementQuantity,
    handelIncrementQuantity,
    handelClearCart,
    handelRemoveFromCart,
    totalAmount,
  } = useCart();
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
                style={{ width: "100px" }}
                className="img-fluid"
              />
              <p>{item.title}</p>
              {isInCart(item.id) && (
                <div className="d-flex gap-4 justify-content-center align-items-center">
                  <Button
                    disabled={item.quantity <= 1}
                    onClick={() => handelDecrementQuantity(item.id)}
                  >
                    -
                  </Button>

                  {item.quantity}
                  <Button onClick={() => handelIncrementQuantity(item.id)}>
                    +
                  </Button>
                </div>
              )}
              <p>
                {Math.trunc(item.price)} * {item.quantity}
              </p>
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
          <p>Total Amount = ${Math.trunc(totalAmount)}</p>
        </div>
      )}
    </Container>
  );
};
export default Carts;
