import React, { useContext } from "react";

import Styles from "./SidebarDesk.module.css";
import hamburger from "../../../assests/images/iconmonstr-menu-1.svg";
import logout from "../../../assests/images/logout.svg";
import notes from "../../../assests/images/notes.svg";
import graph from "../../../assests/images/chart.svg";
import { AuthContext } from "../../../components/Shared/Context/AuthContext";

const SidebarDesk = () => {
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <div className={Styles.sidebar}>
      <button className={Styles.hamburger}>
        <img src={hamburger} alt="toggle" />
      </button>
      <div className={Styles.options}>
        <button>
          <div className={Styles.tooltip}>
            <img src={notes} alt="notes" />
            <span className={Styles.tooltiptext}>Notices</span>
          </div>
        </button>
        <button>
          <div className={Styles.tooltip}>
            <img src={graph} alt="charts" />
            <span className={Styles.tooltiptext}>Previous Year Stats</span>
          </div>
        </button>
        <button onClick={logoutHandler}>
          <div className={Styles.tooltip}>
            <img src={logout} alt="logout" />
            <span className={Styles.tooltiptext}>Log Out</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SidebarDesk;
