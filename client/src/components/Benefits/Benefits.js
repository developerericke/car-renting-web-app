import React,{useEffect} from 'react'
import './Benefits.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Benefits = () => {
    useEffect(()=>{
        Aos.init();
    })
    return (
        <div className="benefits" data-aos="zoom-in" data-aos-delay='50'>
            <div className="title">
                <h1>Our Benefits</h1>
                <p>Luxury AutoStar Rental Services</p>
            </div>
        </div>
    )
}

export default Benefits
