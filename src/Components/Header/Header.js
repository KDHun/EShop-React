import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Logo from "../../Image/EShopLogo.png";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={Logo} alt="img" />
      </div>
      <div className={classes.navLinks}>
        <Link to="/" className={classes.headerLink}>
          HOME
        </Link>
        <Link to="/bill" className={classes.headerLink}>
          GENERATE BILL
        </Link>
        <div className={classes.dropdown}>
          <button className={classes.btn}>FEATURES</button>
          <div className={classes["dropdown-options"]}>
            <Link className={classes.dropdownLink} to="/feature/customers">CUSTOMER</Link>
            <Link className={classes.dropdownLink} to="/feature/items">ITEM</Link>
            <Link className={classes.dropdownLink} to="/feature/employees">EMPLOYEE</Link>
            <Link className={classes.dropdownLink} to="/feature/bills">BILL</Link>
          </div>
        </div>
        <Link to="/about" className={classes.headerLink}>
          ABOUT
        </Link>
      </div>
    </header>
  );
};

export default Header;
