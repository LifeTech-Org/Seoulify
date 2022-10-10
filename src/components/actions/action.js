import React from "react";

function Action({ icon, title, text }) {
  return (
    <li>
      <article className="action">
        <img src={icon} alt="" />
        <h3>{title}</h3>
        <div className="text">{text}</div>
      </article>
    </li>
  );
}

export default Action;
