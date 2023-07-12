import React, {useEffect, useState} from "react";
import classes from './EmployeeList.module.css';
import { useSelector } from "react-redux";
import axios from "axios";
import Employee from "./Employee";
import { Link } from "react-router-dom";
const EmployeeList = (props) => {
    const [employees, setEmployees] = useState([]);
    const auth = useSelector((state) => state.auth);
    console.log(auth);
    useEffect(() => {
        axios.get("http://localhost:3001/Employee",{headers:{authorization: `Barear ${auth.Token?auth.Token:localStorage.getItem("Token")}`}}).then((response) => {
            setEmployees(response.data);
        }).catch((err)=>{
        console.log(err);
        });
    }, [auth]);
    console.log(employees);
    const deleteEmployeeHandler = (EmployeeId) => {
        axios
          .delete(`http://localhost:3001/Employee/${EmployeeId}`,{headers:{authorization: `Barear ${auth.Token?auth.Token:localStorage.getItem("Token")}`}})
          .then((res) => {
            console.log(res);
            setEmployees(employees.filter((Employee) => Employee._id !== EmployeeId));
          })
          .catch((err) => console.log(err));
      };
    return (
        <div className={classes.EmployeeList}>
        <table className={classes.EmployeeListTable}>
            <tr className={classes.EmployeeListTableHeader}>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>
                <th>Salary</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
            {employees.map((employee,index) => <Employee key={employee._id} index={index} {...employee} onDelete={deleteEmployeeHandler}/>)}
        </table>
        <div className={classes.AddEmployeeDiv}>
        <Link to="/feature/addemployee" className={classes.AddEmployee}>
          Add Employee
        </Link>
      </div>    
        </div>
    );
}

export default EmployeeList;