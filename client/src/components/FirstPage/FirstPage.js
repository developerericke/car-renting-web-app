import React, { useEffect } from "react";
import "./First.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
        <h1>WELCOME TO NEW VILE</h1>
      </div>
      <div className="second" data-aos="fade-up" data-aos-delay="50">
        <h2>
          The best Car <br />
          Rental Services
        </h2>
      </div>
      <div class="custom-shape-divider-bottom-1638984573">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FirstPage;
