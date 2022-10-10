import React from "react";
import AdsSectionArticle from "./ads__section__article";
import ad3 from "../../assets/svg/ads-3.svg";
import ad4 from "../../assets/svg/ads-4.svg";
import AdsSectionCard from "./ads__section__card";

function AdsSectionBottom() {
  return (
    <div className="ads__section container col-sm-1 col-md-2 col-lg-3">
      <AdsSectionCard
        size={3}
        img={ad3}
        description={{
          title: "jumper and cardigans",
          text: "cable knitted newck sweater",
          oldPrice: "134.45$",
          newPrice: "120.00$",
        }}
      />
      <AdsSectionCard
        size={2}
        img={ad4}
        description={{
          title: "jackets and coats",
          text: "open-front coats",
          oldPrice: "250.00$",
          newPrice: "150.00$",
        }}
      />
      <AdsSectionArticle
        size={1}
        title={"new arrival 2019"}
        text={"soft and cozy sweatshirts from $98.99"}
      />
    </div>
  );
}

export default AdsSectionBottom;
