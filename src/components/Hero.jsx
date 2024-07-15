import React, {useEffect} from 'react';
import './css/Hero.css'
import vid from '../assets/hero-vid.mp4'
import AOS from 'aos'
import p1 from '../assets/product_1.jpg'
import p2 from '../assets/product_2.jpg'
import p3 from '../assets/product_3.jpg'

import 'aos/dist/aos.css'
import vidm from '../assets/hero-m.mp4'

const Hero = ()=>{
    useEffect(()=>{
        AOS.init({duration:2000})
    }, [])
    return(
    <div>
        <div className="hero-container" data-aos="fade-left" >
            <video className='vid' autoPlay loop muted id='video' src={vid}></video>
            <video className='hero-m' autoPlay loop muted src={vidm} ></video>

           <div className="hero-details">
           <div className="hero-text">
                <p>WE OFFER <br />  NOT ONLY FABRICS <br /> BUT LUXURY</p>
            </div>
            <div className="shop-btn">
                <button className='btn' > SHOP NOW</button>
            </div>
           </div>
             </div>
       

    </div>
    )
}

export default Hero
