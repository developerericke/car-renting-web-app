import React,{useEffect} from "react";
import "./Header.css";
import Aos from "aos";
import "aos/dist/aos.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Photo from './a.jpeg';

const myOptions = ['Volvo', 'Mercedes', 'Prado', 'Subaru', 'Toyota Cruiser','Pick-up','Truck'];
const Header = () => {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <div className="feature" id="book">
        <div className="title-text" data-aos="zoom-in">
            <p>New Vile</p>
            <h1>Book a Car</h1>
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
        <div class="custom-shape-divider-bottom-1641416307">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
};

export default Header;
