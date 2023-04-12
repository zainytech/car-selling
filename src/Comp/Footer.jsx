import React from "react";
import './Footer.css';

import footercar from '../Assets/footer-car.png';
import carlogo from '../Assets/carlogo.png';

const Footer = () => {
    return(
        <>
            <div className="footer">
                {/* <div className="footer1">
                    <p>Sign me up for more updates ?</p>
                    <button>Sign Up</button>
                </div> */}
                <div className="footer2">
                    {/* <div className="footer2-img"></div> */}
                    <div className="footer2-div1">
                       <p>BEADLOW MOTORS</p>
                       <p className="footer2-div12">OUR SHOWROOM IS NOW FULLY OPEN AS PER GOVERNMENT GUIDELINES FOR TEST DRIVES AND VIEWINGS. PLEASE EMAILS OR CALL US FOR ANY ENQUIRIES.
                        </p>
                        <div>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <div className="footer2-div2">
                        <p>Contact Us</p>
                        <img src={carlogo}/>
                        <div><i class="fa-solid fa-phone"></i> 0997564532 </div>
                        <div><i class="fa-solid fa-envelope"></i> beadlowmotors@gmail.com</div>
                        <div><i class="fa-solid fa-address-card"></i> 470 Lucy Forks, Patriciafurt, YC7B 3UT</div>
                    </div>
                    <div className="footer2-div3">
                        <p>Subscribe</p>
                        <input type='text' placeholder="email"/>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Footer;