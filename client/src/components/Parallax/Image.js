import React from 'react'
import './Image.css'
import { Parallax } from 'react-parallax';
import image from './q.jpeg'
import Inside from './Inside';

const Image = () => {
    return (
    <Parallax className="image" bgImage={image} strength={800}>
        <Inside/>
    </Parallax>
    )
}

export default Image
