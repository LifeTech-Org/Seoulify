import React from "react";
import outfit1 from "../../assets/svg/outfit-1.svg";
import outfit2 from "../../assets/svg/outfit-2.svg";
import outfit3 from "../../assets/svg/outfit-3.svg";
import outfit4 from "../../assets/svg/outfit-4.svg";
import outfit5 from "../../assets/svg/outfit-5.svg";
import outfit6 from "../../assets/svg/outfit-6.svg";
import outfit7 from "../../assets/svg/outfit-7.svg";
import outfit8 from "../../assets/svg/outfit-8.svg";
function Scroll() {
  const outfits = [
    outfit1,
    outfit2,
    outfit3,
    outfit4,
    outfit5,
    outfit6,
    outfit7,
    outfit8,
  ];
  return (
    <section className="scroll">
      {[...new Array(outfits.length)].map((dummy, index) => {
        return <img src={outfits[index]} key={index} alt="fashion" />;
      })}
    </section>
  );
}

export default Scroll;
