import React from "react";

import Styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={Styles.cardBody}>
      <div className={Styles.cardContent}>
        <p className={Styles.title}>{props.title}</p>
        <p className={Styles.body}>
         {props.body}
        </p>
        <p className={Styles.date}>{props.date}</p>
      </div>
    </div>
  );
};

export default Card;
