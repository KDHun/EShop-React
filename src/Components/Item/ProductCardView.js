import React from "react";
import classes from './ProductCardView.module.css'
const ProductCardView = (props) => {

  return (
    <div className={`${classes["product-card"]} ${props.className}`}>
      <img className={classes["product-card__image"]} src={props.image}  alt = {props.name}/>
      <p className={classes["product-card__brand"]}>{props.name}</p>
      <p className={classes["product-card__description"]}>{props.description}</p>
      <p className={classes["product-card__price"]}>${props.price}</p>
    </div>
  );
};

export default ProductCardView;