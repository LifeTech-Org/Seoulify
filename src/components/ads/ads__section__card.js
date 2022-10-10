import React from "react";

function AdsSectionCard({ size, img, description }) {
  return (
    <div className={size === 2 ? "cards two" : "cards three"}>
      <div className="imgcard">
        <img src={img} alt="img" />
        <div className="actions">
          <button className="sale">sale</button>
          <div>
            <button>save</button>
            <button>quickview</button>
          </div>
        </div>
      </div>
      <article className="description">
        <div className="title">{description.title}</div>
        <h3>{description.text}</h3>
        <div className="price">
          <span className="old">{description.oldPrice}</span>
          <span className="new">{description.newPrice}</span>
        </div>
      </article>
    </div>
  );
}

export default AdsSectionCard;
