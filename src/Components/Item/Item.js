import React from "react";
import classes from "./Item.module.css";
const Item = (props) => {
  const deleteItemHandler = () => {
    props.onDelete(props._id);
  };

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
      <td>
        <button onClick={deleteItemHandler} className={classes.DeleteBtn}>Delete</button>
      </td>
    </tr>
  );
};

export default Item;
