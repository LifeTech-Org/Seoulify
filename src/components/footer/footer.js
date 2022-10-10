import React from "react";
import "./footer.css";
import FooterAction from "./footer__action";

function Footer() {
  return (
    <footer>
      <section className="footer__actions container col-lg-4 col-md-2 col-sm-1">
        <FooterAction
          title={"contact info"}
          links={[
            { title: "phone:", text: "+234 814 912 0163" },
            {
              title: "address:",
              text: "1418 southampton, cottonwood, united state",
            },
          ]}
        />
        <FooterAction
          title={"get help"}
          links={[
            { text: "delivery information" },
            {
              text: "sales terms & conditions",
            },
            { text: "returns and refunds" },
            { text: "privacy notice" },
            { text: "shopping FAQS" },
          ]}
        />
        <FooterAction
          title={"popular categories"}
          links={[
            { text: "coats (45)" },
            { text: "jeans (270)" },
            { text: "tops (33)" },
            { text: "sweaters(67)" },
            { text: "jackets(79)" },
          ]}
        />
        <FooterAction
          title={"lets stay in touch"}
          links={[
            {
              text: "keep up to date with our latest news and specials offers",
            },
          ]}
        />
      </section>
      <div className="hr"></div>
      <div className="copyright container col-lg-2 col-md-2 col-sm-1">
        <div className="copy">
          &copy; {new Date().getFullYear()} seoulify website. made with passion
          by <a href="https://lifetechportfolio.netlify.app">LifeTech</a>
        </div>
        <div className="rights">all rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
