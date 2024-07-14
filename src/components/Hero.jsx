import React, {useEffect} from 'react';
import './css/Hero.css'
import vid from '../assets/hero-vid.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = ()=>{
    useEffect(()=>{
        AOS.init({duration:2000})
    }, [])
    return(
        <div className="hero-container" data-aos="fade-up" >
            
            <video autoPlay loop muted id='video' src={vid}></video>

           <div className="hero-details">
           <div className="hero-text">
                <p>WE OFFER <br />  NOT ONLY FABRICS <br /> BUT LUXURY</p>
            </div>
            <div className="shop-btn">
                <button className='btn' > SHOP NOW</button>
            </div>
           </div>
           

     
        </div>
    )
}

export default Hero
