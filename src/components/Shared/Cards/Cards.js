import React from "react";

import Card from "./card/Card";

const Cards = (props) => {
  return (
    <Card
      title={props.title}
      body={props.body}
      date={props.date}
    />
  );
};
export default Cards;
