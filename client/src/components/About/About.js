import React from "react";
import "./About.css";
import Car from './car.png'

const About = () => {
  return (
    <div id="about">
    <div className="About">
      <div className="Aboutleft" data-aos="zoom-in" data-aos-delay='50'>
        <h1>Welcome To NewVile</h1>
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
      <div class="custom-shape-divider-bottom-1641407901">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
</div>
    </div>
    </div>
  );
};

export default About;
