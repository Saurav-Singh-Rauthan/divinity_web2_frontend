import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Styles from "./Authlanding.module.css";
import { AuthContext } from "../../components/Shared/Context/AuthContext";

const Authlanding = () => {
  const [IsLogin, setIsLogin] = useState(true);

  const loginStateHandler = () => {
    setIsLogin((prevstate) => !prevstate);
  };

  const auth = useContext(AuthContext);

  const authSubmitHandler = (event) => {
    event.preventDefault();
    auth.login();
  };

  return (
    <div className={Styles.background}>
      <div className={Styles.formContainer}>
        {IsLogin === true ? <h2>Sign In</h2> : <h2>Sign Up</h2>}
        <select className="form-select" aria-label="Default select example">
          <option value="1">Admin</option>
          <option value="2">Student</option>
        </select>
        {!IsLogin && (
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Name</label>
          </div>
        )}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <Link to="/homepage">
          <button
            onClick={authSubmitHandler}
            type="submit"
            className={Styles.btn}
          >
            {IsLogin === true ? "sign in" : "sign up"}
          </button>
        </Link>
        {IsLogin === true ? (
          <p onClick={loginStateHandler}>
            New Here? <span>Sign Up</span>
          </p>
        ) : (
          <p onClick={loginStateHandler}>
            Already have a account? <span>Sign In</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Authlanding;
