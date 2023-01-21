import React from 'react';
import "./Right.css"

function Right({data}) {
    return (
        <div className='flex rename'>
            <img className='right_icon' src="https://cdn-icons-png.flaticon.com/512/9053/9053410.png" alt="icon" />
            <p>{data}</p>
        </div>
    );
}

export default Right;