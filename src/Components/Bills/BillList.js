import React, { useEffect, useState } from "react";
import classes from "./BillList.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Bill from "./Bill";
import { Link } from "react-router-dom";
import BillItemList from "./Items/BillItemList";
const BillList = (props) => {
  const [bills, setBills] = useState([]);
  const [billItem, setBillItem] = useState([]);
  const [showBillItem, setShowBillItem] = useState(false);
  const auth = useSelector((state) => state.auth);
  const billItemHandler = (billItems) => {
    setBillItem(billItems);
    setShowBillItem(true);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/Bill", {
        headers: {
          authorization: `Barear ${
            auth.Token ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((response) => {
        setBills(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [auth]);

  const deleteBillHandler = (BillId) => {
    axios
      .delete(`http://localhost:3001/Bill/${BillId}`, {
        headers: {
          authorization: `Barear ${
            auth.Token ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((res) => {
        console.log(res);
        setBills(bills.filter((bill) => bill._id !== BillId));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.BillList}>
      <table className={classes.BillListTable}>
        <tr className={classes.BillListTableHeader}>
          <th>No.</th>
          <th>CustomerName</th>
          <th>TotalItem</th>
          <th>TotalAmount</th>
          <th>Items</th>
          <th>Actions</th>
        </tr>
        {bills.map((bill, index) => (
          <Bill
            key={bill._id}
            index={index}
            {...bill}
            onDelete={deleteBillHandler}
            onViewItem={billItemHandler}
          />
        ))}
      </table>
      <div className={classes.AddBillDiv}>
        <Link to="/bill" className={classes.AddBill}>
          Add Bill
        </Link>
      </div>
      {showBillItem && <div className={classes.BillItemListDiv}><BillItemList billItem={billItem} onClose={()=>setShowBillItem(false)}/></div>}
    </div>
  );
};

export default BillList;
