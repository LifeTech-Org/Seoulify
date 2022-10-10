import React from "react";
import "./subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe">
      <article>
        <h3>let stay in touch</h3>
        <div>
          Enjoy 15% off your first order when you join our mailing list.
        </div>
        <form>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </form>
        <div>We respect your privacy, so we never share your info.</div>
      </article>
    </section>
  );
}

export default Subscribe;
