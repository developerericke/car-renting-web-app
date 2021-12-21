import React, { useEffect } from "react";
import "./First.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Random } from 'react-animated-text';
import {BsMouse} from 'react-icons/bs';

const FirstPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="page">
      <div className="rent">
        <h1>Rent</h1>
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
      <div class="custom-shape-divider-bottom-1639666289">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
};

export default FirstPage;
