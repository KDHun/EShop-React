import React from "react";
import classes from "./BillItem.module.css";
const BillItem = (props) => {
  console.log(props.Items);
  return (
    <table className={classes["billitem-table"]}>
      <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      {props.Items &&
        props.Items.map((element, index) => (
          <tr>
            <td className={classes["billitem-table-column"]}>{index + 1}</td>
            <td className={classes["billitem-table-column"]}>{element.Name}</td>
            <td className={classes["billitem-table-column"]}>{element.Quanity}</td>
            <td className={classes["billitem-table-column"]}>{element.Price}</td>
            <td className={classes["billitem-table-column"]}>{element.Discount}%</td>
            <td className={classes["billitem-table-column"]}>{element.Quanity * element.Price}</td>
          </tr>
        ))}
        </tbody>
    </table>
  );
};

export default BillItem;
