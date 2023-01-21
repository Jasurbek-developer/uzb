import React, { useState } from 'react';
import Oferr from '../items/Offer';
import Right from '../items/Right';
import "./Home.css"

function Home(props) {
    const [img1, setImg1] = useState("https://i.ytimg.com/vi/W4iu0u3L7FU/maxresdefault.jpg")
    const [img2, setImg2] = useState("http://markostour.com/upload/images/A320_Uzbekistan_Airways.jpg")
    const [localImg, setLocalImg] = useState(img1)
    const [change1, setChange1] = useState(true)
    const [change2, setChange2] = useState(false)
    const [category1, setCategory1] = useState(false)
    const [category2, setCategory2] = useState(true)
    const [category3, setCategory3] = useState(true)
    const [opacity1, setOpacity1] = useState(true)
    const [opacity2, setOpacity2] = useState(false)
    const [opacity3, setOpacity3] = useState(false)
    const data={
        btn1:"Chipta sotib olish",
        btn2:"Qo'shimcha xizmatlar",
        btn3:"Ro'yxatdan o'tish"
    }
    const Arr=["Aviachiptani qayta rasmiylashtirish","Talabalar uchun chegirmali aviachipta","Chegirmali aviachipta","Joyni tanlang",
                "Premium bagaj","Me'yordan ortiq yuk","Maxsus oziq-ovqat","Qo'llanma"]
    const state={
        tokio:"https://www.travelbook.de/data/uploads/2022/11/gettyimages-1284581217-1-1040x690.jpg",
        butami:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSD7NsfURr2b4m8r76EtcCCZMtYC58N3lemJ1hGWvF6BerjmiPlVzXgoL-awMwpkypl8&usqp=CAU",
        riga:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Vistas_desde_la_iglesia_de_San_Pedro%2C_Riga%2C_Letonia%2C_2012-08-07%2C_DD_09.JPG/1200px-Vistas_desde_la_iglesia_de_San_Pedro%2C_Riga%2C_Letonia%2C_2012-08-07%2C_DD_09.JPG",
        parij:"https://www.10mest.com/photos/france-paris-eiffel-tower-and-trocadero-gardens-1280x720.jpg",
        london:"https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"

    }
    const price={
        tokio:"597 yevrodan",
        butami:"199 yevrodan",
        riga:"207 yevrodan",
        parij:"303 yevrodan",
        london:"276 yevrodan"
    }
    const burning={
        tokio:"Toshkent-Tokio",
        butami:"Toshkent-Butami",
        riga:"Toshkent-Riga",
        parij:"Toshkent-Parij",
        london:"Toshkent-London"
    }
    function changeHandler1(params) {
        setLocalImg(img1)
        setChange1(true)
        setChange2(false)
    }
    function changeHandler2(params) {
        setLocalImg(img2)
        setChange1(false)
        setChange2(true)
    }
    function hiddenHandler1(params) {
        setCategory1(false)
        setCategory2(true)
        setCategory3(true)
        setOpacity1(true)
        setOpacity2(false)
        setOpacity3(false)
    }
    function hiddenHandler2(params) {
        console.log(data.btn1);
        setCategory1(true)
        setCategory2(false)
        setCategory3(true)
        setOpacity1(false)
        setOpacity2(true)
        setOpacity3(false)
    }
    function hiddenHandler3(params) {
        console.log(data.btn1);
        setCategory1(true)
        setCategory2(true)
        setCategory3(false)
        setOpacity1(false)
        setOpacity2(false)
        setOpacity3(true)
    }
    return (
        <div>
            <div className="content">
                <img className='content_img' src={localImg} alt="img1" />
            </div>
            <div className="texts">
                <h1>Uzbekistan Airways bilan sayohat qiling</h1>
                <h2>Aviachiptalarni onlayn xarid qiling va 3 foizli chegirmaga ega bo'ling</h2>
            </div>
            <div className="btns flex">
                <button className={`btn1 cursor ${change1? "change":null}`} onClick={changeHandler1}></button>
                <button className={`btn2 cursor ${change2? "change":null}`} onClick={changeHandler2}></button>
            </div>
            <div className="chances">
                <div className="chance_btns flex">
                    <button className={`chance_btn cursor ${opacity1?"opacyty":null}`} onClick={hiddenHandler1}>{data.btn1}</button>
                    <button className={`chance_btn cursor ${opacity2?"opacyty":null}`} onClick={hiddenHandler2}>{data.btn2}</button>
                    <button className={`chance_btn cursor ${opacity3?"opacyty":null}`} onClick={hiddenHandler3}>{data.btn3}</button>
                </div>
                <div className="chance1">
                        {
                            <>
                            <div className={`chance1_item1 flex ${category1?"hidden":null}`}>
                                <div className="item1 flex cursor">
                                    <Right data={Arr[0]}/>
                                </div>
                                <div className="item1 flex cursor">
                                    <Right data={Arr[1]}/>
                                </div>
                                <div className="item1 flex cursor">
                                    <Right data={Arr[2]}/>
                                </div>
                                
                            </div>
                            <div className={`chance2_item2 flex ${category2?"hidden":null}`}>
                                <div className="item2 flex cursor">
                                    <Right data={Arr[0]}/>
                                </div>
                                <div className="item2 flex cursor">
                                    <Right data={Arr[3]}/>
                                </div>
                                <div className="item2 flex cursor">
                                    <Right data={Arr[4]}/>
                                </div>
                                <div className="item2 flex cursor">
                                    <Right data={Arr[5]}/>
                                </div>
                                <div className="item2 flex cursor">
                                    <Right data={Arr[6]}/>
                                </div>
                                
                            </div>
                            <div className={`chance3_item3 flex ${category3?"hidden":null}`}>
                                <div className="div">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laudantium modi, aperiam quisquam eos quos delectus illo eius voluptatem necessitatibus quibusdam amet consequatur velit doloribus rem, blanditiis at quidem cupiditate praesentium? Incidunt, officiis veniam, nisi reprehenderit odio aspernatur numquam vel expedita beatae mollitia, itaque ut voluptas? Facere exercitationem doloribus, suscipit molestias quibusdam maxime quos et, voluptas ullam non, iusto itaque culpa sapiente cum dolorem libero. Dolore quaerat totam officia mollitia at inventore quae? Dolore ullam unde ab molestiae, similique saepe aut in soluta laborum quasi, fugiat assumenda! Nihil, dolor voluptate? Enim eius soluta quisquam voluptatem, natus praesentium. Eos, dolor voluptates?</p>
                                </div>
                                <div style={{marginBottom:"50px"}} className="item3 flex cursor">
                                    <Right data={Arr[7]}/>
                                </div>
                                
                            </div>
                          </>
                        }
                    </div>
                    <button className='ticket_btn'>Chipta olish</button>

            </div>
            <div className="wrappers flex">
                <div className="wrapper1">
                    <a href="#">
                    <img className='wrapper_img1' src="https://www.gazeta.uz/media/img/2020/02/JrBchA15815814905857_b.jpg" alt="bort_kuzatuvchilari" />
                    <p>Bortkuzatuvchilarini taklif etamiz</p>
                    </a>
                </div>
                <div className="wrapper2">
                    <a href="#">
                    <img className='wrapper_img2' src="https://www.spot.uz/media/img/2020/02/ZRMGE015815816283232_l.jpg" alt="uchuvchilar" />
                    <p>Uchuvchilarni taklif etamiz</p>
                    </a>
                </div>
            </div>
            <h1 style={{marginTop:"50px",marginLeft:"50px"}}>Maxsus takliflar:</h1>
            <div className="offer flex">
                <Oferr state={state.tokio} price={price.tokio} burning={burning.tokio}/>
                <Oferr state={state.butami} price={price.butami} burning={burning.butami}/>
                <Oferr state={state.riga} price={price.riga} burning={burning.riga}/>
                <Oferr state={state.parij} price={price.parij} burning={burning.parij}/>
                <Oferr className="last" state={state.london} price={price.london} burning={burning.london}/>
            </div>
        </div>
    );
}

export default Home;