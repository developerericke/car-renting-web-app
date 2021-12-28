import React from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "aos/dist/aos.css";
import photo from './img/1.jpg';
import photo1 from './img/2.jpg';
import photo2 from './img/3.jpg';

const Carousels = () => {
  return (
    <div className="Carousel">
      <div className="head">Rent Cars</div>
      <div className="caroul">
      <Carousel>
                <div>
                    <img src={photo} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={photo1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={photo} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={photo1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={photo2} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={photo2} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
      <div className="head">Rent Cars</div>
    </div>
  );
};

export default Carousels;
