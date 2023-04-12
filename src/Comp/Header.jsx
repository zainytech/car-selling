import React, { useState } from "react";
import './Header.css'
import carlogo from '../Assets/carlogo.png';
import logo4 from '../Assets/logo4.png';
import { Link } from "react-router-dom";

const Header = () => {
    const [hide, setHide] = useState(false);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 60){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return(
        <>
           <div className={ colorChange ? 'header colorBlue' : 'header'}>
                <Link to='/' style={{textDecoration: 'none'}}>
                <div className="header2">
                   <img src={logo4}/> BEADLOW MOTORS
                </div></Link>
                <div className="header1">
                    <Link to="/">HOME</Link>
                    <Link to="showroom">SHOWROOM</Link>
                    <Link href="#sellcar">OUR CARS</Link>
                    <Link href="#contact">CONTACT US</Link>
                </div>
           </div>
        </>
    );
}

export default Header;