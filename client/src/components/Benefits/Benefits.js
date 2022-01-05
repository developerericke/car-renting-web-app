import React,{useEffect} from 'react'
import './Benefits.css'
import Aos from "aos";

const Benefits = () => {
    useEffect(()=>{
        Aos.init();
    })
    return (
        <div className="benefits">
            <div className="title">
                <h1>Why Choose Us</h1>
                <p>Luxury AutoStar Rental Services</p>
            </div>
            {/* <div class="custom-shape-divider-bottom-1638975672">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <rect x="1200" height="3.6"></rect>
                    <rect height="3.6"></rect>
                    <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
                </svg>
            </div> */}
        </div>
    )
}

export default Benefits
