import React from "react";
import Scroll from "./scroll";
import "./share.css";
import Socials from "./socials";

function Share() {
  return (
    <section className="share">
      <article>
        <h3>share your home with #seoulify</h3>
        <div className="sub">follow @Seoulify_fashion for inspiration</div>
      </article>
      <Scroll />
      <div className="hr"></div>
      <Socials />
    </section>
  );
}

export default Share;
