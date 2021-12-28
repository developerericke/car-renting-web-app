import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="def">
        <h1>CarRental</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Harum
          quibusdam <br/>ullam, blanditiis magnam dolores.
        </p>
        <h2>STAY CONNECTED</h2>

        <div className="column-icon">
                    <a href="http://facebook.com/Wilson Mk" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/willy_youngDev" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://github.com/WillyMk" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i></a>
                        <a href="https://github.com/WillyMk" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-youtube"></i>
                    </a>
                    </div>
      </div>
      <div className="list">
        <h1>Our Vehicles</h1>
        <ul className="list1">
            <li>Toyota</li>   
            <li>Honda</li>
            <li>Ford</li>
            <li>BMW</li>
            <li>Land Cruiser</li>
        </ul>
        <ul className="list2">
            <li>Toyota</li>   
            <li>Honda</li>
            <li>Ford</li>
            <li>BMW</li>
            <li>Land Cruiser</li>
        </ul>
      </div>
      <div className="info">
          <h1>Contact Info</h1>
          <p>Address:  280-10200 Nairobi, kenya</p>
          <p>Phone:    +245 732123482</p>
          <p>Email:    CarRents@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
