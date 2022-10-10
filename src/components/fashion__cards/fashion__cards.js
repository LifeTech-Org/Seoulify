import React from "react";
import "./fashion__cards.css";
import Fashion1 from "../../assets/svg/fashion-1.svg";
import Fashion2 from "../../assets/svg/fashion-2.svg";
import Fashion3 from "../../assets/svg/fashion-3.svg";
import Fashion4 from "../../assets/svg/fashion-4.svg";
import FashionCard from "./fashion__card";

function FashionCards() {
  return (
    <section className="fashion__cards container col-sm-1 col-md-2 col-lg-2">
      <FashionCard
        img={Fashion1}
        message={{
          title: "seoul fashion",
          text: "3 steps to get that quick summer glow head to toe",
        }}
      />
      <FashionCard
        img={Fashion2}
        message={{
          title: "seoul fashion",
          text: "seoulify pro hijab goes viral",
        }}
      />
      <FashionCard
        img={Fashion3}
        message={{
          title: "seoul fashion & summer",
          text: "3 steps to get that quick summer glow head to toe",
        }}
      />
      <FashionCard
        img={Fashion4}
        message={{
          title: "dummy",
          text: "3 steps to get that quick summer glow head to toe",
        }}
      />
    </section>
  );
}

export default FashionCards;
