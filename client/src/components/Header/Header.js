import React,{useEffect} from "react";
import "./Header.css";
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
    <section id="features">
    <div className="Header">
      <div className="header1" data-aos="fade-right" data-aos-delay='50'>
        <h1>Rent today</h1>
        <img src={Photo} alt="car"/>
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
    </div>
    </section>
  );
};

export default Header;
