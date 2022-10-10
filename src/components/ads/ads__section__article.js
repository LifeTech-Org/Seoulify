import React from "react";

function AdsSectionArticle({ size, title, text }) {
  return (
    <article className={size === 1 ? "one article" : "three article"}>
      <div className="title">{title}</div>
      <h1 className="text">{text}</h1>
      <button>go shopping</button>
    </article>
  );
}

export default AdsSectionArticle;
