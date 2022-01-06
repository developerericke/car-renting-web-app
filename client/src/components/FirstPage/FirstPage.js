import React, { useEffect } from "react";
import "./First.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Random } from 'react-animated-text';
import {BsMouse} from 'react-icons/bs';
// import Navbar from '../Navbar/Navbar'

const FirstPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="page">
      {/* <div className="rent1">
        <h1>.</h1>
      </div>
      <Navbar/> */}
      <div className="rent">
        <h1>.</h1>
      </div>
      <div className="first" data-aos="fade-down" data-aos-delay="50">
        <h1><Random text="WELCOME TO NEW VILE"/> </h1>
      </div>
      <div className="second" data-aos="fade-up" data-aos-delay="50">
        <h2>
        <Random text=" The Best Car Rental Services"/>
        </h2>
      </div>
      <div className="floating-icon">
        <a href="#features"><BsMouse color="#fff" size={25} className="mouse"/></a>
      </div>
      <div class="custom-shape-divider-bottom-1638974829">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <rect x="1200" height="3.6"></rect>
          <rect height="3.6"></rect>
          <path
            d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FirstPage;
