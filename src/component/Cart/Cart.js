import Modal from "../UI/Modal";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";

import CartItem from "./CartItem";
import { useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const totalAmountNotFixed = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const totalAmount = `$${totalAmountNotFixed.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(cartActions.addItemToCart({ ...item, amount: 1 }));
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <Fragment>
      {!isCheckout && cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onHideCart} />}
      {!isCheckout && (
        <div className={classes.actions}>
          <button onClick={props.onHideCart} className={classes["button--alt"]}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  return <Modal onClick={props.onHideCart}>{cartModalContent}</Modal>;
};

export default Cart;
