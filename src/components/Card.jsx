// src/components/Card.js
import React from "react";
import "./Card.css";

const Card = ({ id, image, isFlipped, handleClick }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => handleClick(id)}
    >
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <img src={image} alt="Card" />
        </div>
      </div>
    </div>
  );
};

export default Card;
