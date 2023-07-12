import React from "react";
import cardclass from "./Card.module.css";

const Card = (props) => {
  const classes = cardclass.Card +  ' ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
