import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddEmployee.module.css";
import Button from "../UI/Button";
import axios from "axios";
import Input from "../UI/Input";
import { useSelector } from "react-redux";
const AddEmployee = () => {
  const auth =
    useSelector((state) => state.auth) | localStorage.getItem("Login");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [middleNameValue, setMiddleNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [DOBValue, setDOBValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [salaryValue, setSalaryValue] = useState("");
  const [roleValue, setRoleValue] = useState("");
  const [isShow,setIsShow] = useState(false);
  const firstNameHandler = (event) => {
    setFirstNameValue(() => event.target.value.replace(/[^a-zA-Z]/g, ""));
  };
  const middleNameHandler = (event) => {
    setMiddleNameValue(() => event.target.value.replace(/[^a-zA-Z]/g, ""));
  };
  const lastNameHandler = (event) => {
    setLastNameValue(() => event.target.value.replace(/[^a-zA-Z]/g, ""));
  };
  const DOBHandler = (event) => {
    console.log(event.target.value);
    setDOBValue(() => event.target.value);
  };
  const phoneHandler = (event) => {
    setPhoneValue(() => event.target.value.replace(/\D/g, "").substr(0, 10));
  };
  const emailHandler = (event) => {
    setEmailValue(() => event.target.value);
  };
  const salaryHandler = (event) => {
    setSalaryValue(() => event.target.value);
  };
  const roleHandler = (event) => {
    setRoleValue(() => event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/Employee",
        {
          FirstName: firstNameValue,
          MiddleName: middleNameValue,
          LastName: lastNameValue,
          DOB: DOBValue,
          Phone: phoneValue,
          Email: emailValue,
          Salary: salaryValue,
          Role: roleValue,
        },
        {
          headers: {
            authorization: `Barear ${
              auth ? auth.Token : localStorage.getItem("Token")
            }`,
          },
        }
      )
      .then((response) => {
        setIsShow(true);
        console.log(response);
        setFirstNameValue("");
        setMiddleNameValue("");
        setLastNameValue("");
        setDOBValue("");
        setPhoneValue("");
        setEmailValue("");
        setSalaryValue("");
        setRoleValue("");
        setTimeout(()=>{
          setIsShow(false);
        },5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Card className={classes.FormCard}>
      {isShow&&<div className={classes.successMSG}>Item successfully Added✅</div>}
      <form onSubmit={submitHandler}>
        <Input
          label="First Name"
          input={{
            type: "text",
            id: "firstname",
            value: firstNameValue,
            onChange: firstNameHandler,
          }}
        />
        <br />

        <Input
          label="Middle Name"
          input={{
            type: "text",
            id: "middlename",
            value: middleNameValue,
            onChange: middleNameHandler,
          }}
        />
        <br />

        <Input
          label="Last Name"
          input={{
            type: "text",
            id: "lastname",
            value: lastNameValue,
            onChange: lastNameHandler,
          }}
        />
        <br />

        <Input
          label="DOB"
          input={{
            type: "date",
            id: "dob",
            value: DOBValue,
            onChange: DOBHandler,
          }}
        />
        <br />

        <Input
          label="Phone"
          input={{
            type: "text",
            id: "phone",
            value: phoneValue,
            onChange: phoneHandler,
          }}
        />
        <br />

        <Input
          label="Email"
          input={{
            type: "email",
            id: "email",
            value: emailValue,
            onChange: emailHandler,
          }}
        />

        <br />
        <Input
          label="Salary"
          input={{
            type: "number",
            id: "salary",
            value: salaryValue,
            onChange: salaryHandler,
          }}
        />

        <br />

        <Input
          label="Role"
          input={{
            type: "text",
            id: "role",
            value: roleValue,
            onChange: roleHandler,
          }}
        />
        <br />
        <Button type="submit">Add Employee</Button>
      </form>
    </Card>
  );
};

export default AddEmployee;
