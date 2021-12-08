import React,{useState,useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Header.css";
import Select from "react-select";
import Aos from "aos";
import "aos/dist/aos.css";

const options = [
  { value: "Volvo", label: "Volvo" },
  { value: "Mercedes", label: "Mercedes" },
  { value: "Prado", label: "Prado" },
  { value: "Subaru", label: "Subaru" },
  { value: "Toyota Cruiser", label: "Toyota Cruiser" },
];
const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <div className="Header">
      <div className="header1" data-aos="fade-right" data-aos-delay='100'>
        <h1>Book Your Auto Rental</h1>
        <h2>Luxury Cars at low-cost, starts $75 / day</h2>
        <p>from over 100 premium locations</p>
      </div>
      <div className="header2" data-aos="fade-left" data-aos-delay='100'>
        <label>PICK-UP DATE</label>
        <input type="date" id="myDate"/>
        <label>DROP-OFF DATE</label>
        <input type="date" id="myDate"/>
        <label>MAKERS OF VEHICLE</label>
        <Select options={options} width="50em" style={{ background: "#f0f0f0" }}/>
        <button>FIND IT NOW</button>
      </div>
      <div class="custom-shape-divider-bottom-1638880450">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
