import React from "react";
import classes from "./Bill.module.css";
const Bill = (props) => {
  const deleteBillHandler = () => {
    props.onDelete(props._id);
  };
  const viewAllItemsHandler = () => {
    props.onViewItem(props.Items);
  };
  return (
    <tr className={classes.CustomerRow}>
      <td>{props.index + 1}</td>
      <td>
        {props.CustomerName}
      </td>
      <td> {props.TotalItem} </td>
      <td>{props.TotalAmount} </td>
      <td><button className={classes.ItemBtn} onClick={viewAllItemsHandler}>View All Items</button></td>
      <td>
        <button onClick={deleteBillHandler} className={classes.DeleteBtn}>Delete</button>
      </td>
    </tr>
  );
};

export default Bill;
