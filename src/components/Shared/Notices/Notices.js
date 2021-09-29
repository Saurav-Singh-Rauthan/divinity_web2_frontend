import React from "react";

import Styles from "./Notices.module.css";
import Cards from "../Cards/Cards";

const Notices = (props) => {
 
  return (
    <div className={Styles.contentBody__content}>
      {props.notices.map((notice) => {
        return (
          <Cards title={notice.title} body={notice.body} date={notice.date} />
        );
      })}
    </div>
  );
};

export default Notices;
