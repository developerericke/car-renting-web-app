import React from 'react'
import { Wave } from 'react-animated-text';
import { Random } from 'react-animated-text';
import './Tell.css'

const Tell = () => {
    return (
        <div className='Tell'>
            <div className='c'>
                .
            </div>
            <div className='us'>
                <h1>
                <Random text="CONTACT US" effect="verticalFadeOut"/> 
                </h1>
            </div>
            <div>
            <Wave text="+254 714566765"/>
            <Random text="+245 467321847"/>
            </div>
        </div>
    )
}

export default Tell
