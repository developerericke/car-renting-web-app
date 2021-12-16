import React from "react";
import './More.css'
import Photo from './img/1.jpg'
import Photo1 from './img/5.jpg'
import Photo2 from './img/7.jpg'

const More = () => {
  return (
    <div className="More">
      <div className="more1">
        <h1>
          Autostar Rental Service
          <br />
          With a wide range of Vehicles
        </h1>
        <p>
          Integer tortor bibendum est faucibus gravida aliquam nulla lectus
          lacinia eget
          <br />
          lorem acdua eros pharetral interdum quisque convallis nula dpsum val
          mualiq
          <br />
          amet consectetur adipisicing sed eiusmod tem pory.
          <br />
          Ut enim ad minim ven quis nostrud exercitation ulamco laboris nisi ut
          aliquip exl
          <br />
          dolor in reprehenderit voluptate velit non proident sunt in culpa.
        </p>
      </div>
      
      <div className="more2">
        <div className="img1"><img src={Photo} alt="car"/></div>
        <div className="img2"><img src={Photo1} alt="car"/></div>
        <div className="img3"><img src={Photo2} alt="car"/></div>
      </div>
    </div>
  );
};

export default More;
