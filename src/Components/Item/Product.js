import React, { useState } from "react";
import ProductForm from "./ProductForm";
import Card from "../UI/Card";
import classes from "./Product.module.css";
import ProductCardView from "./ProductCardView";
const Product = (props) => {
  const [isShow, setIsShow] = useState(false);
  const showHandler = () => {
    setIsShow(true);
  };
  const hideHandler = () => {
    setIsShow(false);
  };

  return (
    <Card className={classes.product}>
      <img
        onMouseEnter={showHandler}
        onMouseLeave={hideHandler}
        src={props.ItemPhoto}
        alt={props.element.Name}
        className={classes.productImg}
      />
 
      {isShow && (
        <ProductCardView
          name={props.element.Name}
          description={props.element.Name}
          image={props.ItemPhoto}
          price={props.element.Price}
          className={classes.productOverlay}
        ></ProductCardView>
      )}
      <h2 className={classes.productName}>{props.element.Name}</h2>
      
      <ProductForm element={props.element}></ProductForm>
    </Card>
  );
};

export default Product;
