import React from "react";
import classes from "./BillItem.module.css";
const BillItem = (props) => {

  return (
    <tr className={classes.ItemRow}>
      <td>{props.index + 1}</td>
      <td>
        {props.Name}
      </td>
      <td> {props.Description} </td>
      <td>{props.Price} </td>
      <td>{props.Quanity}</td>
      <td> {props.Discount} </td>
    </tr>
  );
};

export default BillItem;
