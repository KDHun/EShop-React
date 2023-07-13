import React, { useRef } from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";
import axios from "axios";
import { authActions } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailValue = useRef("");
  const passwordValue = useRef("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailValue.current.value);
    console.log(passwordValue.current.value);
    axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        Email: emailValue.current.value,
        Password: passwordValue.current.value,
      })
      .then((response) => {
        dispatch(authActions.login(response.data));
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
          label="Email"
          input={{ type: "email", id: "email", ref: emailValue }}
        />
        <br />
        <Input
          label="Password"
          input={{ type: "password", id: "password", ref: passwordValue }}
        />

        <br />
        <Button>Login</Button>
      </form>
    </Card>
  );
};

export default Login;
