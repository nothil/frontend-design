import * as React from "react";
import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="static-left">
        <div className="content-left">
          <div className="footer-item">
            <a className="link" href="/" target="_blank">
              Terms & conditions
            </a>
          </div>
          <div className="footer-item">
            <a className="link" href="/" target="_blank">
              Privacy policy
            </a>
          </div>
          <div className="footer-item">
            <a className="link" href="/" target="_blank">
              Facebook
            </a>
          </div>
          <div className="footer-item">
            <span className="link">
              Copyright © Nothile
              {` ${year}`}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
