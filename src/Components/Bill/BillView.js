import React from "react";
import classes from "./BillView.module.css";
import BillItem from "./BillItem";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

const BillView = (props) => {
  const billItems = useSelector((state) => state.billItems);
  return (
    <Card className={classes["bill-wrapper"]}>
      <div className={classes["bill-header"]}>
        <span className={classes["bill-customer-name"]}>
          Name: {props.Name}
        </span>
        <span className={classes["bill-date"]}>
          Date: {new Date().toLocaleDateString("en-US")}
        </span>
      </div>
      <div className={classes["bill-body"]}>
        <BillItem Items={billItems || []} />
      </div>
      <div className={classes["bill-footer"]}>
        <span className={classes["bill-amount"]}>
          Total Amount: ₹ {" "}
          {billItems
            ? billItems.reduce(
                (sum, ele) =>
                  sum + ele.Quanity * ele.Price * (1 - ele.Discount / 100),
                0
              )
            : 0}
        </span>
      </div>
    </Card>
  );
};

export default BillView;
