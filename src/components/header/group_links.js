import React from "react";

function GroupLink({ links }) {
  return (
    <ul>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a href={link.href}>
              <span>{link.name}</span>
              <sup>{link.sup && link.sup}</sup>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default GroupLink;
