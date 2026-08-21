import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  removeCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/cart/cart";

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // handel add to cart
  const handelAddToCart = ({ id, title, price, thumbnail }) => {
    dispatch(addToCart({ id, title, price, thumbnail }));
  };

  // handel remove from cart
  const handelRemoveFromCart = ({ id }) => {
    dispatch(removeCart(id));
  };
  // total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  // all remove from cart
  const handelClearCart = () => {
    dispatch(clearCart());
  };

  const handelIncrementQuantity = () => {
    dispatch(incrementQuantity());
  };
  const handelDecrementQuantity = () => {
    dispatch(decrementQuantity());
  };

  return {
    cart,
    isInCart,
    handelAddToCart,
    handelRemoveFromCart,
    handelClearCart,
    handelIncrementQuantity,
    handelDecrementQuantity,
    totalAmount,
  };
};

export default useCart;
