import React from 'react';
import "./Offer.css"

function Oferr({state,burning,price}) {
    return (
        <div className='offer'>
            <div className="content">
            <img className='offer_img' src={state} alt="Tokio" />
            <p>{price}</p>
            <h2>{burning}</h2>
            </div>
        </div>
    );
}

export default Oferr;