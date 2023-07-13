import React, { useEffect, useState } from "react";
import classes from "./CustomerList.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Customer from "./Customer";
import { Link } from "react-router-dom";

const CustomerList = (props) => {
  const [customers, setCustomers] = useState([]);
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/Customer`, {
        headers: {
          authorization: `Barear ${
            auth.Token ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [auth]);
  console.log(customers);
  const deleteCustomerHandler = (CustomerId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/Customer/${CustomerId}`, {
        headers: {
          authorization: `Barear ${
            auth.Token ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((res) => {
        console.log(res);
        setCustomers(
          customers.filter((customer) => customer._id !== CustomerId)
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.CustomerList}>
      <table className={classes.CustomerListTable}>
        <tr className={classes.CustomerListTableHeader}>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>DOB</th>
          <th>Actions</th>
        </tr>
        {customers.map((customer, index) => (
          <Customer
            key={customer._id}
            index={index}
            {...customer}
            onDelete={deleteCustomerHandler}
          />
        ))}
      </table>
      <div className={classes.AddCustomerDiv}>
        <Link to="/feature/addcustomer" className={classes.AddCustomer}>
          Add Customer
        </Link>
      </div>
    </div>
  );
};

export default CustomerList;
