import React from "react";
import classes from "./BillItemList.module.css";
import BillItem from "./BillItem";

const BillItemList = (props) => {
  return (
    <div className={classes.ItemList}>
      <table className={classes.ItemListTable}>
        <tr className={classes.ItemListTableHeader}>
          <th>No.</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quanity</th>
          <th>Discount</th>
        </tr>
        {props.billItem.length>0 && props.billItem.map((item, index) => (
          <BillItem
            key={item._id}
            index={index}
            {...item}
          />
        ))}
      </table>
      <button onClick={props.onClose} className={classes.CloseButton}>Close</button>
    </div>
  );
};

export default BillItemList;
