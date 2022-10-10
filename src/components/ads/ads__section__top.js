import React from "react";
import AdsSectionArticle from "./ads__section__article";
import ad1 from "../../assets/svg/ads-1.svg";
import ad2 from "../../assets/svg/ads-2.svg";
import AdsSectionCard from "./ads__section__card";

function AdsSectionTop() {
  return (
    <div className="ads__section container col-lg-3 col-md-2 col-sm-1">
      <AdsSectionArticle
        size={1}
        title={"collection aw 2019"}
        text={"cotton textured sweaters from 19$"}
      />
      <AdsSectionCard
        size={2}
        img={ad1}
        description={{
          title: "jackets and coats",
          text: "open-front coats",
          oldPrice: "250.00$",
          newPrice: "150.00$",
        }}
      />
      <AdsSectionCard
        size={3}
        img={ad2}
        description={{
          title: "jumper and cardigans",
          text: "cable knitted newck sweater",
          oldPrice: "134.45$",
          newPrice: "120.00$",
        }}
      />
    </div>
  );
}

export default AdsSectionTop;
