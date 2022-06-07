import { useRef, useState } from "react";

import classes from "./productItemForm.module.css";
import Input from "../../UI/Input";

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputref = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputref.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputref}
        label="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
        <button>Add To Cart</button>
      
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default ProductItemForm;
