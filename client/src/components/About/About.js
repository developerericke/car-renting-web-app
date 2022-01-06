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
      <div className="AboutDown">.</div>
      <div class="custom-shape-divider-bottom-1641478882">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
    </div>
  );
};

export default About;
