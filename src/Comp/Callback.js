import react from 'react'
import './Callback.css'
import whybuybg from '../car-assets/why-buy-bg.jpg'
function Callback(){
    return(
        <>
        <div1 class="call-main">
            <div class="call-main-div1">
                <div class="call-main-div1a"><button>CALLBACK REQUEST</button></div>
            </div>
            <div class="call-main2">
            <div class="call-main-div2">
                <div class="call-main-div2a">
                    <div class="call-main-div2a-txt">
                        <p>BMW 7 SERIES</p>
                        <p>3.0 740Li Exclusive Auto Euro 6 (s/s) 4dr (2017)</p>
                    </div>
                    <div class="call-main-div2a-btn">
                        <button>£24,490</button>
                    </div>
                </div>
                <div class="call-main-div2b">
                    <div class="call-main-div2b-fn">
                        <input type="text" placeholder='Firstname*'></input>
                    </div>
                    <div class="call-main-div2b-fn">
                        <input type="text" placeholder='Lastname*'></input>
                    </div>
                    <div class="call-main-div2b-fn">
                        <input type="text" placeholder='Telephone*'></input>
                    </div>
                    <div class="call-main-div2b-fn">
                        <input type="text" placeholder='Email*'></input>
                    </div>
                    
                </div>
                
                <div class="call-main-div2c">
                    <textarea placeholder='Message*'></textarea>
                </div>
                <div class="call-main-div2d">
                    <input id="1" type="checkbox"></input>
                    <label for="1">Please click to give us consent to store your data and contact you about the product requested and our services in the future via phone and email. Please see our privacy policy here.</label>
                </div>
                <div class="call-main-div2e">
                    <button>Submit</button>
                </div>
            </div>
            </div>
        </div1>
        </>
    )
}
export default Callback