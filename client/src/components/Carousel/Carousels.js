import React from "react";
import "./Carousel.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Carousels = () => {
  return (
    <div className="bd">
    <div className="carousel">
      <h1>Variety of cars</h1>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.driving.co.uk/wp-content/uploads/sites/5/2017/05/1297691_VW_8198.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
          <h3>  Pick-up ~ Double cabin</h3>
            <p>Petrol</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.driving.co.uk/wp-content/uploads/sites/5/2017/05/1297691_VW_8198.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
          <h3>  Pick-up ~ Double cabin</h3>
            <p>Petrol</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.driving.co.uk/wp-content/uploads/sites/5/2017/05/1297691_VW_8198.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
          <h3>  Pick-up ~ Double cabin</h3>
            <p>Petrol</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.driving.co.uk/wp-content/uploads/sites/5/2017/05/1297691_VW_8198.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
          <h3>  Pick-up ~ Double cabin</h3>
            <p>Petrol</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.driving.co.uk/wp-content/uploads/sites/5/2017/05/1297691_VW_8198.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
          <h3>  Pick-up ~ Double cabin</h3>
            <p>Petrol</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://pictures-kenya.jijistatic.com/19028412_MTUwMC0xMTI1LWVlZjI3M2UxZDg.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>  Lorry ~ Canter</h3>
            <p>Petrol</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
};

export default Carousels;
