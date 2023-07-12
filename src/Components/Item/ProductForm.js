import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./ProductForm.module.css";
import { useDispatch } from "react-redux";
import { billItemActions } from "../../store/billItemsSlice";
const ProductForm = (props) => {
  const [totleQuanity, setTotleQuanity] = useState("0");
  const removeItemHandler = () => {
    if (+totleQuanity > 0) setTotleQuanity(+totleQuanity - 1);
  };
  const addItemHandler = () => {
    if (+props.element.Quanity > +totleQuanity)
      setTotleQuanity(+totleQuanity + 1);
  };
  const totleQuanityHandler = (event) => {
    if (+event.target.value < +props.element.Quanity)
      setTotleQuanity(event.target.value);
  };

  const dispatch = useDispatch();

  const billItemHandler = () => {
      if(totleQuanity === "0") return;
      dispatch(
        billItemActions.addItem({ ...props.element, Quanity: totleQuanity })
      );
      setTotleQuanity("0");
    
  };
  return (
    <div className={classes.productForm}>
      <input
        type="text"
        className={classes.quantityInput}
        value={totleQuanity}
        onChange={totleQuanityHandler}
      />
      <Button className={classes.ButtonAddRemove} onClick={removeItemHandler}>
        -
      </Button>
      <Button className={classes.productFormButton} onClick={billItemHandler}>
        Add to Cart
      </Button>
      <Button className={classes.ButtonAddRemove} onClick={addItemHandler}>
        +
      </Button>
    </div>
  );
};
export default ProductForm;
