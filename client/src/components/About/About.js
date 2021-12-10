import React from "react";
import "./About.css";
import Car from './car.png'

const About = () => {
  return (
    <div className="About">
      <div className="Aboutleft" data-aos="zoom-in" data-aos-delay='50'>
        <h1>Welcome To Carspace</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Sint cum quam unde dolorum nesciunt eligendi, voluptatum perspiciatis
          expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Aspernatur consequuntur excepturi quasi praesentium reprehenderit
          cupiditate id <br />
          necessitatibus ut ipsum maxime.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </ul>
        <button>Learn More</button>
      </div>
      <div className="Aboutright" data-aos="fade-left" data-aos-delay='50'>
        <img src={Car} alt="image"/>
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

export default About;
