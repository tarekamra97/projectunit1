import React from "react";
import "./Card.css";

function Card({ title, link, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h2 className="card-title">{title}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="card-button">Visit Resource →</button>
      </a>
    </div>
  );
}

export default Card;
