import React from "react";
import "./Process.css";
import VideoBg from "reactjs-videobg";
import Videos from "../Videos/video2.mp4";

const Process = () => {
  return (
    <div className="process">
      <div>
        <VideoBg>
          <VideoBg.Source src={Videos} type="video/mp4" />
        </VideoBg>
      </div>
      <div className="details">
        <h1>
          HOW DOES THE <br />
          AUTOSTAR RENTAL WORKS
          <div className="work">
          <p>
            Once seected, Book
            <br />
            our auto and set a<br />
            pickup date / time
          </p>
          <p>
            Once seected, Book
            <br />
            our auto and set a<br />
            pickup date / time
          </p>
          <h3>
            Once seected, Book
            <br />
            our auto and set a<br />
            pickup date / time
          </h3>
        </div>
        </h1>
      </div>
      <div class="custom-shape-divider-bottom-1638883986">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Process;
