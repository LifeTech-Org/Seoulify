import React from "react";
import "./header.css";
import logo from "../../assets/svg/logo.svg";
import GroupLink from "./group_links";
import { MenuRounded } from "@mui/icons-material";

function Header() {
  return (
    <header className="header">
      <section>
        <select>
          {["English", "French", "Arabic"].map((lang, index) => {
            return <option key={index}>{lang}</option>;
          })}
        </select>
      </section>
      <GroupLink
        links={[
          { name: "home", href: "#" },
          { name: "new arrival", href: "#new", sup: "33" },
          { name: "dresses", href: "#dresses", sup: "21" },
        ]}
      />
      <img src={logo} alt="Seoulify Logo" />
      <GroupLink
        links={[
          { name: "tops", href: "#tops", sup: "35" },
          { name: "ballerina", href: "#ballerina", sup: "28" },
          { name: "eyewear", href: "#eyewear", sup: "19" },
        ]}
      />
      <section className="xtra">
        <div>0.00$</div>
      </section>
      <div className="nav-btn">
        <button className="">
          <MenuRounded className="icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
