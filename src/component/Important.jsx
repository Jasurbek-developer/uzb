import React from 'react';
import AirPlus from '../items/AirPlus';
import "./Important.css"

function Important(props) {
    const data={
        title1:"Kabinetga kirish",
        title2:"On-line ro'yxatdan o'tish",
        title3:"Ishtirok etish shartlari",
        text1:"Millarni hisoblash",
        text2:"Ro'yxatdan o'tish,oson!",
        text3:"Qoidalarga rioya qiling"
    }
    return (
        <div className="content_box">
            <div className='background_img'>
                <img className='airplus' src="https://www.uzairways.com/sites/default/files/2019-10/card-premium%5B1%5D.jpg"></img><br />
                <h1 className='back_title'>UzAirPlus</h1>
                <h4 className='back_text'>Tez-tez uchayotganlar uchun katta imkoniyatlar</h4>
                <div className="air_plus flex">
                    <AirPlus title={data.title1} text={data.text1}/>
                    <AirPlus title={data.title2} text={data.text2}/>
                    <AirPlus title={data.title3} text={data.text3}/>
                </div>
            </div>
        </div>
    );  
}

export default Important;