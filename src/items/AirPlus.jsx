import React from 'react';
import "./AirPlus.css"

function AirPlus({title,text}) {
    return (
        <div className='air_plus_blocks'>
            <div className="block1 flex">
            <h2 className='color'>{title}</h2>
            <img className='block1_img' src="https://cdn-icons-png.flaticon.com/512/318/318275.png" alt="icon" />
            </div>
            <div className="block2">
            <p className='color'>{text}</p>
            </div>
        </div>
    );
}

export default AirPlus;