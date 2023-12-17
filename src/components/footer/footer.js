import * as React from "react";
import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <h3>contact us</h3>

      <div className="content-left">
        <h2>
          Have a project in mind <br /> Lets make it happen
        </h2>
        <div className="footer-item">
          <a className="link" href="/" target="_blank">
            22 Street name <br />
            Cape Town, South Africa <br />
            +277250746
          </a>
        </div>

        <span className="link">
          Copyright © Nothile
          {` ${year}`}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
