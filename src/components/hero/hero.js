import {
  Add,
  ArrowDownwardRounded,
  PlayArrowRounded,
} from "@mui/icons-material";
import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero container col-lg-2 col-md-1 col-sm-1">
      <section>
        <article>
          <h3>03. FW 2018 limited edition</h3>
          <h2>FW 2018 limited edition</h2>
          <a href="#shop">shop the category</a>
        </article>
      </section>
      <section>
        <article>
          <button className="flex flex-row-x-center flex-row-y-center">
            <PlayArrowRounded className="icon" />
          </button>
          <h3>watch promo</h3>
        </article>
      </section>
      <div className="share flex flex-row">
        <button className="hero-btn ">
          <Add className="icon" />
        </button>
        <span>Share</span>
      </div>
      <button className="hero-btn caret">
        <ArrowDownwardRounded className="icon" />
      </button>
    </section>
  );
}

export default Hero;
