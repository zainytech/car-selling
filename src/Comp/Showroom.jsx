import React, { useState } from "react";
import './Showroom.css';
import Cars from './data.json';
import { Link } from 'react-router-dom'

const Showroom = () => {
    const [data, setData] = useState(Cars)
    
    const dataFilter = () =>{
        const result = Cars.filter((curData) => {
            let carBrandName = document.getElementById('brand');
            let carBrand = carBrandName.options[carBrandName.selectedIndex].value;
            let carPriceName = document.getElementById('price');
            let carPrice = carPriceName.options[carPriceName.selectedIndex].value;
            return curData.category === carBrand && curData.price <= carPrice
        });
        setData(result)
    }


    return(
        <>
            <div className="showrom">
                <div className="showfilter">
                    <div className="showfilter1">
                        USED CARS IN BEADLOW MOTORS
                    </div>
                    <div className="showfilter-div">
                        <div className="showfilter-div1">
                        <form action="#">
                            <label htmlFor="brand"></label>
                            <select name="brand" id="brand" className="showfilter2">
                                <option value="BMW">BMW</option>
                                <option value="MERCEDES">MERCEDES</option>
                                <option value="AUDI">AUDI</option>
                                <option value="LEXUS">LEXUS</option>
                            </select>
                        </form>
                        <form action="#">
                            <label htmlFor="price"></label>
                            <select name="price" id="price" className="showfilter2">
                                <option value="16000">16000</option>
                                <option value="18000">18000</option>
                                <option value="20000">20000</option>
                            </select>
                        </form>
                        </div>
                        <button onClick={dataFilter} className="show">APPLY SEARCH FILTER</button>
                    </div>
                </div>
                <div className="showdetail">
                    { data.map( car => {
                        return(
                            <>
                                <div className="showmain" key={car.id}>
                                    <img src={car.icon}/>
                                    <h4> { car.titile } </h4>
                                    <p className="showp1"> { car.detail } </p>
                                    <p className="showp2"> { car.des } </p>
                                    <div className="show-flex">
                                        <Link to="/singlecar"><button className="main-btn">View Details</button></Link>
                                        <Link to="/callback"><button className="main-btn">Book Now</button></Link>
                                    </div>
                                    <h4> Price: { `$${car.price}` } </h4>
                                </div>

                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Showroom;