import React from "react";

function Socials() {
  return (
    <ul className="socials">
      {[
        { name: "instagram", icon: "" },
        { name: "facebook", icon: "" },
        { name: "twitter", icon: "" },
        { name: "foursquare", icon: "" },
      ].map((social, index) => {
        return (
          <li key={index}>
            <a href="#link" className="link">
              {social.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Socials;
