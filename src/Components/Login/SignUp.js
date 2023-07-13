import React, { useState } from "react";
import classes from "./SignUp.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";
import axios from "axios";
import { authActions } from "../../store/auth";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [firstNameValue, setFirstNameValue] = useState("");
  const [middleNameValue, setMiddleNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [DOBValue, setDOBValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
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
  const passwordHandler = (event) => {
    setPasswordValue(() => event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, {
        FirstName: firstNameValue,
        MiddleName: middleNameValue,
        LastName: lastNameValue,
        DOB: DOBValue,
        Phone: phoneValue,
        Email: emailValue,
        Password: passwordValue
      })
      .then((response) => {
        authActions.login(response.data.Token);
        localStorage.setItem("Token", response.data.Token);
        localStorage.setItem("EmployeeId", response.data.EmployeeId);
        navigate("/bill");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label="FirstName"
          input={{
            type: "text",
            id: "firstname",
            value: firstNameValue,
            onChange: firstNameHandler,
          }}
        />

        <br />

        <Input
          label="MiddleName"
          input={{
            type: "text",
            id: "middlename",
            value: middleNameValue,
            onChange: middleNameHandler,
          }}
        />

        <br />
        <Input
          label="LastName"
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
          input={{ type: "email", id: "email", value: emailValue, onChange: emailHandler }}
        />
        <br />
        <Input
          label="Password"
          input={{ type: "password", id: "password", value: passwordValue, onChange: passwordHandler }}
        />

        <br />
        <Button>SignUp</Button>
      </form>
    </Card>
  );
};

export default SignUp;
