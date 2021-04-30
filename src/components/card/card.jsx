import React from "react";
import { Link } from "react-router-dom";

import "./card.style.css";

export const Card = (props) => (
  <Link to={"/course/80" + props.surgalt.id}>
    <div className="card-container">
      <img src={props.surgalt.zurag} alt="" />
      <h2>{props.surgalt.ner}</h2>
      <p>{props.surgalt.price}</p>
      <p>{props.surgalt.create_date}</p>
    </div>
  </Link>
);
