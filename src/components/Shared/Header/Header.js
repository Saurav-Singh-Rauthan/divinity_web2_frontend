import React from "react";

import Styles from "./Header.module.css";
import logo from "../../../assests/images/ait_logo-removebg-preview.png";

const Header = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.org}>
        <img src={logo} alt="ait logo" />
        <h3>AIT Placement Cell</h3>
      </div>
      <div className={Styles.user}>
        <p className={Styles.user__name}>Saurav Singh Rauthan</p>
        <p className={Styles.user__regno}>19385</p>
      </div>
    </div>
  );
};

export default Header;
