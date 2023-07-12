import React, { useEffect, useState } from "react";
import classes from "./AddCustomerBill.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const AddCustomerBill = (props) => {
  const auth = useSelector((state) => state.auth);
  const [Customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Customer", {
        headers: {
          authorization: `Barear ${
            auth.Token ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [auth]);
  return (
    <div className={classes.AddCustomerBillDiv}>
      <Link to="/feature/addcustomer" className={classes.AddCustomerLink}>
        New Customer
      </Link>
      <br />
      {Customers.map((Customer) => (
        <div key={Customer._id} className={classes.CustomersDiv} onClick={()=>{props.onCustomerHandler(Customer)}} datavalue = {Customer}>
          <h1>
            Name:
            {Customer.FirstName +
              " " +
              Customer.MiddleName +
              " " +
              Customer.LastName}
          </h1>
          <div>DOB:{Customer.DOB}</div>
          <div>Phone:{Customer.Phone}</div>
          <div>Email:{Customer.Email}</div>
        </div>
      ))}
    </div>
  );
};

export default AddCustomerBill;
