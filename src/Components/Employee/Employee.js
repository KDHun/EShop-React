import React from "react";
import classes from "./Employee.module.css";
const Employee = (props) => {
  const deleteEmployeeHandler = () => {
    props.onDelete(props._id);
  };

  return (
    <tr className={classes.EmployeeRow}>
      <td>{props.index + 1}</td>
      <td>
        {props.FirstName + " " + props.MiddleName + " " + props.LastName}{" "}
      </td>
      <td> {props.Email} </td>
      <td>{props.Phone} </td>
      <td>{props.DOB}</td>
      <td>{props.Salary}</td>
      <td>{props.Role}</td>
      <td>
        <button onClick={deleteEmployeeHandler} className={classes.DeleteBtn}>Delete</button>
      </td>
    </tr>
  );
};

export default Employee;
