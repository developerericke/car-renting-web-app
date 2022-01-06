import React from 'react'
import './Image.css'
import { Parallax } from 'react-parallax';
import image from './car.jpg'
import Inside from './Inside';

const Image = () => {
    return (
    <Parallax className="image" bgImage={image} strength={800}>
        <Inside/>
        {/* <div class="custom-shape-divider-bottom-1641418830">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
</div> */}
    </Parallax>
    )
}

export default Image
