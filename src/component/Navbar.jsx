import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar(props) {
    return (
        <div>
            <div className='navbar_container flex'>
                <div className="flexbox flex">
                <Link to="/"><img className='nav_img' src="https://www.uzairways.com/sites/default/files/inline-images/lg14.png" alt="logo" /></Link>
                <Link to="/" style={{textDecoration: 'none' }}><h2>Uzbekistan <br /> <span style={{color:"white"}}>airways</span></h2></Link> 
                </div>
                <ul className='flexul flex'>
                    <li><Link to="/important">Muhim ma'lumot </Link></li>
                    <li><Link to="/shop">Xarid qilish va boshqarish </Link></li>
                    <li><Link to="/loyalty">Sadoqatlik dasturi </Link></li>
                    <li><Link to="/about">Biz haqimizda </Link></li>
                </ul>
                <div className="search">
                    <img className='search_icon' src="https://cdn-icons-png.flaticon.com/512/8915/8915520.png" alt="search" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;