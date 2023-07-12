import React from "react";
import classes from "./About.module.css";
import CallLogo from '../../Image/CallLogo.png';
import EmailLogo from '../../Image/EmailLogo.png';
const About = () => {
  return <div className={classes.container}>
    <div className={classes.heading}>Contact US</div>
    <div className={classes.CallDiv}><img src={CallLogo} alt="Call" className={classes.CallImg}/>+91 9106619122<img src={EmailLogo} alt="Call" className={classes.EmailImg}/>hun.karabhai@gmail.com</div>

  </div>;
};

export default About;
