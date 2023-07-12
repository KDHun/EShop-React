import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddCustomer.module.css";
import Button from "../UI/Button";
import axios from "axios";
import Input from "../UI/Input";
import { useSelector } from "react-redux";


const AddCustomer = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [middleNameValue, setMiddleNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [DOBValue, setDOBValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
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
  const auth = useSelector((state) => state.auth)|localStorage.getItem("Login");
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/Customer", {
        FirstName: firstNameValue,
        MiddleName: middleNameValue,
        LastName: lastNameValue,
        DOB: DOBValue,
        Phone: phoneValue,
        Email: emailValue,
      },
      {
        headers: {
          authorization: `Barear ${auth?auth.Token:localStorage.getItem("Token")}`
        }
      })
      .then((response) => {
        setIsShow(true);
        console.log(response);
        setFirstNameValue("");
        setMiddleNameValue("");
        setLastNameValue("");
        setDOBValue("");
        setPhoneValue("");
        setPhoneValue("");
        setEmailValue("");
        
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
      {isShow&&<div className={classes.successMSG}>Customer successfully Added✅</div>}
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

        
        <Input label="DOB" input={{ type: "date", id: "dob", value: DOBValue, onChange: DOBHandler }} />
        <br />
       
        <Input label="Phone"
          input={{
            type: "text",
            id: "phone",
            value: phoneValue,
            onChange: phoneHandler}}
        />
        <br />
        <Input 
          label="Email"
          input={{
            type: "email",
            id: "email",
            value: emailValue,
            onChange: emailHandler}}
        />
        <br />
        <Button type="submit">Add Customer</Button>
      </form>
    </Card>
  );
};

export default AddCustomer;
