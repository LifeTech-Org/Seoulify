import React from "react";

function FashionCard({ img, message }) {
  return (
    <div className="fashion__card">
      <img src={img} alt="fashion" />
      <div className="message">
        <h3 className="title">{message.title}</h3>
        <div className="text">{message.text}</div>
        <button>read more</button>
      </div>
    </div>
  );
}

export default FashionCard;
