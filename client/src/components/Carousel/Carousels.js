import React from "react";
import "./Carousel.css";
import "aos/dist/aos.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const slides = [
  { img: "Toyota", description: "Lorem ipsum" },
  { img: "Nissan", description: "Lorem ipsum" },
];
const Carousels = () => {
  return (
    <div className="slide-container">
      <Slider>
        {slides.map((slide, index) => (
          <div key={index}>
            <h2>{slide.img}</h2>
            <div>{slide.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousels;
