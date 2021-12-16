import React from "react";
import "./Message.css";
import "aos/dist/aos.css";

const Message = () => (
  <div className="wrap">
    <div className="wrap2" data-aos="fade-right" data-aos-delay="50">
      <img
        src="https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="car"
      />
    </div>
    <div className="wrap3" data-aos="fade-left" data-aos-delay="50">
      <input type="text" placeholder="name" />
      <input type="email" placeholder="mail" />
      <input type="text" placeholder="Subject" />
      <textarea type="text" placeholder="message"></textarea>
      <button>lets learn More</button>
    </div>
    <div class="custom-shape-divider-bottom-1638960733">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
    </svg>
</div>
  </div>
);

export default Message;
