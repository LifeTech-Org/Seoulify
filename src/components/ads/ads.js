import React from "react";
import "./ads.css";
import AdsSectionBottom from "./ads__section__bottom";
import AdsSectionTop from "./ads__section__top";

function Ads() {
  return (
    <section className="ads">
      <AdsSectionTop />
      <AdsSectionBottom />
    </section>
  );
}

export default Ads;
