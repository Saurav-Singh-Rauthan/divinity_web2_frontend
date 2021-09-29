import React from "react";
import { Link } from 'react-router-dom'

import Styles from "./Landingpage.module.css";
import logo from "../../assests/images/ait_logo-removebg-preview.png";

const Landingpage = () => {
  return (
    <div className={Styles.background}>
      <div className={Styles.container}>
        <img src={logo} alt="ait logo here" />
        <p className={Styles.title}>placement cell</p>
        <div className={Styles.btnContainer}>
          <Link to='/auth'><button className={Styles.btns}>Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
