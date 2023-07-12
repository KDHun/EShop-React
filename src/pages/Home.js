import React from "react";
import Header from "../Components/Header/Header";
import Button from "../Components/UI/Button";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import Card from "../Components/UI/Card";
const Home = () => {
  return (
    <>
      <Header />
      <Card className={classes.homecard}>
        <Button className={classes.headerBtn}>
          <Link to="/login" className={classes.headerlink}>
            Login
          </Link>
        </Button>
        <br />
        <Button className={classes.headerBtn}>
          <Link to="/signup" className={classes.headerlink}>
            Register
          </Link>
        </Button>
      </Card>
    </>
  );
};

export default Home;
