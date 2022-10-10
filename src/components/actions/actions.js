import React from "react";
import "./actions.css";
import Action from "./action";
import Mark from "../../assets/svg/mark.png";
import Round from "../../assets/svg/round.png";
import Lock from "../../assets/svg/lock.png";
import Info from "../../assets/svg/info.png";

function Actions() {
  return (
    <ul className="actions container col-sm-1 col-md-2 col-lg-4">
      <Action
        title={"Pickup at any store"}
        text={"Free shipping on orders over $65"}
        icon={Mark}
      />
      <Action
        title={"Free returns"}
        text={"30 days free return policies"}
        icon={Round}
      />
      <Action
        title={"Secured payment"}
        text={"We accept all major credit cards"}
        icon={Lock}
      />
      <Action
        title={"Customer services"}
        text={"Top notch customer services"}
        icon={Info}
      />
    </ul>
  );
}

export default Actions;
