import React from "react";

function FooterAction({ title, links }) {
  return (
    <div className="footer__action">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href="#link">
                <span className="title">{link.title && link.title}</span>
                <span className="text">{link.text && link.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterAction;
