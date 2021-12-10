import React,{useState,useEffect} from "react";
import "./Header.css";
import Select from "react-select";
import Aos from "aos";
import "aos/dist/aos.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Photo from './7.jpg';

const myOptions = ['Volvo', 'Mercedes', 'Prado', 'Subaru', 'Toyota Cruiser'];
const Header = () => {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <div className="Header">
      <div className="header1" data-aos="fade-right" data-aos-delay='50'>
        <h1>Rent today</h1>
        <img src={Photo} alt="image"/>
      </div>
      <div className="header2" data-aos="fade-left" data-aos-delay='50'>
        <div>
          <h1>Book</h1>
        </div>
        <label>Picking up Date</label>
        <input type="date"/>
        <label>Dropping of  Date</label>
        <input type="date"/>
        <label>Picking up Hour</label>
        <input type="time"/>
        <label>Dropping off Hour</label>
        <input type="time"/>
        <label>Choose vehicle</label>
        <Autocomplete
        style={{width:'90%',height:'50%'}}
        autoSelect
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Choose a Car"
           />
        )}
      />
        <button>Rent a Car</button>
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
