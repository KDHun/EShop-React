import React from "react";
import classes from "./Customer.module.css";
const Customer = (props) => {
  const deleteCustomerHandler = () => {
    props.onDelete(props._id);
  };

  return (
    <tr className={classes.CustomerRow}>
      <td>{props.index + 1}</td>
      <td>
        {props.FirstName + " " + props.MiddleName + " " + props.LastName}{" "}
      </td>
      <td> {props.Email} </td>
      <td>{props.Phone} </td>
      <td>{props.DOB}</td>
      <td>
        <button onClick={deleteCustomerHandler} className={classes.DeleteBtn}>Delete</button>
      </td>
    </tr>
  );
};

export default Customer;
