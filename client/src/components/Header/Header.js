import React,{useEffect} from "react";
import "./Header.css";
import Aos from "aos";
import "aos/dist/aos.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Photo from './p1.jpg';

const myOptions = ['Volvo', 'Mercedes', 'Prado', 'Subaru', 'Toyota Cruiser','Pick-up','Truck'];
const Header = () => {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <div className="feature" id="features">
        <div className="title-text" data-aos="zoom-in">
            <p>New Vile</p>
            <h1>Book a Car Today</h1>
        </div>
        <div className="feature-box">
        <div className="features" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos-duration="800">
                <div className="features-desc">
        <div className="header2">
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
                </div>                
            </div>

            <div className="features-img" data-aos="fade-left">
                <img src={Photo} alt=""/>
            </div>
        </div>
        <div className="AboutDown1">.</div>
        <div class="custom-shape-divider-bottom-1641478656">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
};

export default Header;
