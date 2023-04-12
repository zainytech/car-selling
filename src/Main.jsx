import React, { useEffect, useState } from "react";

import Footer from "./Comp/Footer";
import Header from "./Comp/Header";
import './Main.css';
import { Link } from 'react-router-dom'

import car2 from './Assets/car2.png';
// merged imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
// import SwiperCore, { Autoplay} from "swiper";

import Aos from 'aos';
import 'aos/dist/aos.css';
import stocklist from './car-assets/stock-list.jpg'
import finance from './car-assets/finance.jpg'
import findus from './car-assets/find-us.jpg'
import whybuyus2 from './car-assets/whybuyus2.jpg'
import whybuyus3 from './car-assets/whybuyus3.jpeg'
import yellowcar from './car-assets/yellow-car.png'

import { MdPhoneCallback } from "react-icons/md";
import { MdDriveEta } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

const Main = () => {
    useEffect(()=> {
        Aos.init();
     }, [])
    return(
        <> 
             <div className="main">
                <div className="front">             
                        <div className="front1">
                            <p className="front1p1">BEADLOW MOTORS</p>
                            <p className="front1p2"> Here at Beadlow Motors, We believe buying a car should be an enjoyable process and you should not feel pressure.</p>
                            <Link to='/showroom'><button className="main-btn">SHOWROOM</button></Link>
                        </div>
                        <div className="frontborder">  </div>  
                        <div className="front2">
                            <img src={car2}/>
                        </div>
                </div>

                <div class="car-main">
            <div class="car-main1">
                <div class="car-main1-div1">
                    WELCOME TO Beadlow Motors
                </div>
                <div class="car-main1-div2">
                    <div class="car-main1-div2-boxes">
                        <div className="aos-init aos-animate" data-aos='fade-left' data-aos-duration='1800' class="car-main1-div2-box1">
                            <div class="car-main1-div2-box1-img"><img src={stocklist}></img></div>
                            <div class="car-main1-div2-box1-div1">STOCKLIST</div>
                            <div class="car-main1-div2-box1-div2">
                                <span class="car-main1-div2-box1-div2-txt1">STOCKLIST</span>
                                <span class="car-main1-div2-box1-div2-txt2">See Our Latest Stock!</span>
                                <button>VIEW STOCK</button>
                            </div>
                        </div>
                        <div className="aos-init aos-animate" data-aos='fade-up' data-aos-duration='1800' class="car-main1-div2-box1">
                            <div class="car-main1-div2-box1-img"><img src={finance}></img></div>
                            <div class="car-main1-div2-box1-div1">FINANCE</div>
                                <div class="car-main1-div2-box1-div2">
                                    <span class="car-main1-div2-box1-div2-txt1">FINANCE</span>
                                    <span class="car-main1-div2-box1-div2-txt2">Fnance Your Dream Car Today!</span>
                                    <button>MORE INFO</button>
                                </div>
                        </div>
                        <div className="aos-init aos-animate" data-aos='fade-right' data-aos-duration='1800' class="car-main1-div2-box1">
                            <div class="car-main1-div2-box1-img"><img src={findus}></img></div>
                            <div class="car-main1-div2-box1-div1">FIND US</div>
                                <div class="car-main1-div2-box1-div2">
                                    <span class="car-main1-div2-box1-div2-txt1">FIND US</span>
                                    <span class="car-main1-div2-box1-div2-txt2">Come Visit Us!</span>
                                    <button>MORE INFO</button>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="car-main2 aos-init aos-animate" data-aos='fade-down' data-aos-duration='1100' >
                <div  class="car-main2-div1">
                    <div class="car-main2-img1">
                        <img src={whybuyus3}></img>
                    </div>
                    <div class="car-main2-div1a"></div>
                    <div class="car-main2-div1b">QUALITY USED CARS IN Beadlow Motors</div>
                </div> 
                <div class="car-main2-div2-main">
                <div class="car-main2-div2">
                    <div class="car-main2-div2a">
                        <div class="car-main2-div2a-txt">
                        <span class="car-main2-div2a-txt1">FRIDAY</span>
                        <span class="car-main2-div2a-txt2">10:00-13:00 - 15:00-18:00</span>
                        <div style={{marginTop:'2rem'}}><span class="car-main2-div2a-txt3">72</span>
                        <span class="car-main2-div2a-txt2">VEHICLES IN STOCK</span></div>
                        </div>
                    </div>
                    <div class="car-main2-div2b">
                        <div class="car-main2-div2b-txt"><MdPhoneCallback class="car-main2-div2b-icon"/><span class="car-main2-div2b-txt1">CALL BACK</span></div>
                        <div class="car-main2-div2b-txt"><MdDriveEta class="car-main2-div2b-icon"/><span class="car-main2-div2b-txt1">TEST DRIVE</span></div>
                        <div class="car-main2-div2b-txt"><IoLocationSharp class="car-main2-div2b-icon"/><span class="car-main2-div2b-txt1">LOCATION</span></div>
                    </div>
                </div>
                <div class="car-main2-div2-img2">
                    <img src={whybuyus2}></img>
                </div>
                </div>

            </div>
            <div class="car-main3">
                    <div class="car-main3-div1">
                        <div style={{color:'white'}} class="car-main3-div1a">
                            <h1>Why Buy from Us?</h1>
                            <ul>
                                <li>Our showroom is Fully open now as per Government Guidelines for test drives and viewings</li>
                                <li>Here at Beadlow Motors Ltd, We believe buying a car should be an enjoyable process and you should not feel pressure.</li>
                                <li>Virtual sales appointments are also available using Video Calls .</li>
                                <li>Competitively priced & Friendly Customer services</li>
                                <li>Valeted and HPI Checked</li>
                                <li>Bespoke Finance packages</li>
                                <li>Vehicle Oil service and inspection prior to sale</li>
                                <li>AA Extended Warranty Options available</li>
                            </ul>
                            <p>Our showroom is Fully open now as per Government Guidelines for test drives and viewings Please Emails or Call us for any enquiries . We look forward to Business with you!</p>   
                        </div>
                        <div class="car-main3-div1b">
                            <img src={yellowcar}></img>
                        </div>
                    </div>
            </div>
            <div class="car-main4">
                <div class="car-main4-container">
                    <h1>Customer Reviews</h1>
                    <div class="car-main4-div1">
                    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        pagination={false}
        modules={[Pagination, Navigation, Autoplay]} autoplay={true}

        className="mySwiper"
      >
        <SwiperSlide>
            <div class="car-main4-div1-swiper">
                <div class="car-main4-div1a">
                    <p class="car-main4-div1a-icons"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                </div>
                <div class="car-main4-div1b">
                    <p class="car-main4-div1c-txt2">Beadlow Motors has exceeded their customer service expectations. I purchased my car from them last year and unfortunately I experienced a few issues with the car. However, they have proved to be very considerate and understanding in dealing with the problems. They went out their way to assist me in getting my car rectified even though the warranty period had passed. I really appreciate the aftercare service and would highly recommend them.</p>
                </div>
                <div class="car-main4-div1c">
                    <p class="car-main4-div1c-txt3">PETER J</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="car-main4-div1-swiper">
                <div class="car-main4-div1a">
                <p class="car-main4-div1a-icons"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                </div>
                <div class="car-main4-div1b">
                    <p class="car-main4-div1c-txt2">Beadlow Motors has exceeded their customer service expectations. I purchased my car from them last year and unfortunately I experienced a few issues with the car. However, they have proved to be very considerate and understanding in dealing with the problems. They went out their way to assist me in getting my car rectified even though the warranty period had passed. I really appreciate the aftercare service and would highly recommend them.</p>
                </div>
                <div class="car-main4-div1c">
                <p class="car-main4-div1c-txt3">PETER J</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="car-main4-div1-swiper">
                <div class="car-main4-div1a">
                <p class="car-main4-div1a-icons"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                </div>
                <div class="car-main4-div1b">
                    <p class="car-main4-div1c-txt2">Beadlow Motors has exceeded their customer service expectations. I purchased my car from them last year and unfortunately I experienced a few issues with the car. However, they have proved to be very considerate and understanding in dealing with the problems. They went out their way to assist me in getting my car rectified even though the warranty period had passed. I really appreciate the aftercare service and would highly recommend them.</p>
                </div>
                <div class="car-main4-div1c">
                    <p class="car-main4-div1c-txt3">PETER J</p>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
                    </div>
                </div>
            </div>
        </div>

             </div>
            {/* <Footer/> */}
        </>
    );
}


export default Main;