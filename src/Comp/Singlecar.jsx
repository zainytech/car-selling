import React from "react";
import './Singlecar.css'
import bmw from '../Assets/bmw.jpg'
import bmw1 from '../Assets/bmw1.jpg'
import bmw2 from '../Assets/bmw2.jpg'
import bmw3 from '../Assets/bmw3.jpg'
import bmwlogo from '../Assets/bmw.png'

import det1 from '../Assets/det1.png'
import det2 from '../Assets/det2.png'
import det3 from '../Assets/det3.png'
import det4 from '../Assets/det4.png'
import det5 from '../Assets/det5.png'
import det6 from '../Assets/det6.png'
import det7 from '../Assets/det7.png'
import det8 from '../Assets/det8.png'
import det9 from '../Assets/det9.png'
import det10 from '../Assets/det10.png'
import det11 from '../Assets/det11.png'
import { Link } from 'react-router-dom'

const Singlecar = () => {
    return(
        <>
            <div className="detail">
                <div className="detail1">
                    <div className="detail11">
                        <div className="detail11-col1">
                            <img src={bmw}/>
                            <img src={bmw3}/>
                            <img src={bmw2}/>
                        </div>
                        <div className="detail11-col2">
                            <img src={bmw1}/>
                        </div>
                    </div>
                    <div className="detail12">
                        <div className="detail12-col1">
                            <img src={bmwlogo}/>
                            <h2>BMW 7 SERIES</h2>
                        </div>
                        <p className="detail12-col2">Saloon 3.0 740Li Exclusive Auto Euro 6 (s/s) 4dr (2017/17)</p>
                        <div className="detail12-col3">
                            <div>
                                <p>Product</p>
                                <h3>CS</h3>
                            </div>
                            <div>
                                <p>Price</p>
                                <h3>$24,490</h3>
                            </div>
                        </div>
                        <Link to='/callback'><button className="main-btn">Book Now</button></Link>
                    </div>
                </div>
                <div className="detail2">
                    <div className="detail2-col1">
                        <img src={det1}/>
                        <p>CATEGORY</p>
                        <h5>SALOON</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det2}/>
                        <p>TRANSMISSION</p>
                        <h5>AUTO</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det3}/>
                        <p>COLOUR</p>
                        <h5>GREEN</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det4}/>
                        <p>MILEAGE</p>
                        <h5>99,570</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det5}/>
                        <p>FUEL</p>
                        <h5>PETROL</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det6}/>
                        <p>BHP</p>
                        <h5>326</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det7}/>
                        <p>TORQE</p>
                        <h5>450N·M</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det8}/>
                        <p>CC</p>
                        <h5>2,998CC</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det9}/>
                        <p>CO2</p>
                        <h5>164</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det10}/>
                        <p>YEAR</p>
                        <h5>2017</h5>
                    </div>
                    <div className="detail2-col1">
                        <img src={det11}/>
                        <p>ROAD TAX</p>
                        <h5>$165</h5>
                    </div>
                </div>
                <div className="detail3">
                    <div className="detail31">
                        <h2>1 OWNER SINCE NEW+2 KEYS</h2>
                        <p>COMES WITH WARRANTY AND FREE 1 YEAR AA BREAK DOWN COVER,1 OWNER SINCE NEW, MOT TILL 16/01/2024, 4 SERVICES, 19' ALLOYS DOUBLE SPOKE 630, HEAD UP DISPLAY, LEATHER TRIM, COGNAC/BLACK EXCLUSIVE NA, MODEL DESIGNATION-G12,ELECTRIC DISPLAY KEY, PREMIUM PACK, SEAT VENTILATION FRONT, TV FUNCTION, HEATED AND COLD FRONTS SEATS, CRUISE CONTROL, MEMORY SEATS FRONT AND BACK, SOFT CLOSE DOORS,SUNROOF, AUTO BOOT LID, NAVIGATION, DELIVERY AND DRIVE AWAY INSURANCE AVAILABLE, ANY P/X WELCOME COMES WITH WARRANTY AND FREE 1 YEAR AA BREAK DOWN COVER,1 OWNER SINCE NEW, MOT TILL 01/01/2023, 19' ALLOYS DOUBLE SPOKE 630, HEAD UP DISPLAY, LEATHER TRIM, COGNAC/BLACK EXCLUSIVE NA, MODEL DESIGNATION-G12, 2 KEYS,ELECTRIC DISPLAY KEY, PREMIUM PACK, SEAT VENTILATION FRONT, TV FUNCTION, HEATED AND COLD FRONTS SEATS, CRUISE CONTROL, MEMORY SEATS FRONT AND BACK, SOFT CLOSE DOORS,SUNROOF, AUTO BOOT LID, NAVIGATION, DELIVERY AND DRIVE AWAY INSURANCE AVAILABLE, ANY P/X WELCOME</p>
                    </div>
                    <div className="detail32">
                        <h4>This car comes with</h4>
                        <ul className="detail32-col">
                            <li>Rain Sensor</li>
                            <li>LED Lights</li>
                            <li>DVD Player</li>
                            <li>Daytime Running Lights</li>
                            <li>Brake Assist</li>
                            <li>Parking Assistance</li>
                            <li>Electric Folding Mirrors</li>
                            <li>Steering Wheel Controls</li>
                            <li>Keyless Door Locks</li>
                            <li>Privacy/Tinted Glass</li>
                            <li>Start Stop System</li>
                            <li>Satellite Navigation</li>
                            <li>Safety Belts Rear</li>
                            <li>Leather Seats</li>
                            <li>Side Impact Airbags</li>
                            <li>Front Airbags</li>
                            <li>Sunroof</li>
                            <li>Power Assisted Steering</li>
                            <li>Electric Windows</li>
                            <li>Climate Control</li>
                            <li>Central Locking</li>
                            <li>Alloy Wheels</li>
                            <li>Air Conditioning</li>
                            <li>ABS</li>
                            <li>Safety Belts</li>
                            <li>Front Airbags</li>
                            <li>Sunroof</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Singlecar;