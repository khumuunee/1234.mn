import React from "react";
import { Card } from "../card/card";

import "./card-list.style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.surgaltuud.map((el) => (
      <Card key={el.id} surgalt={el} />
    ))}
  </div>
);
