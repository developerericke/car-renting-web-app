import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footers">
      <div className="footer1">
        <footer>&copy; Copyright 2021 HTML.am</footer>
      </div>
      <div className="footer2">
        <div className="column-icon">
          <a
            href="http://facebook.com/Wilson Mk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-square"></i>
          </a>
          <a
            href="https://twitter.com/willy_youngDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://github.com/WillyMk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://github.com/WillyMk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
