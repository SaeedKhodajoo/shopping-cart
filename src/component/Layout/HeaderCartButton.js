import { useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  const [btnIsHighlited, setBtnIsHighlited] = useState(false);
  const items = useSelector((state) => state.cart.items);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClass = `${classes.button} ${btnIsHighlited ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
