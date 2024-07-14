import React, { useEffect } from 'react'
import './css/Wedo.css'
import wedo_img from '../assets/wedo.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Wedo() {
  useEffect(()=>{
    AOS.init({duration:2000})

  }, [])
  return (
    <div className='wedo'  >
        <div className="wedo-container">
            <div className="wedo-left-float"  >
            <div className="wedo-text">
                <h3>AT FAB-LUXURY FABRICS</h3> <br /> <br />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil error recusandae aperiam velit voluptas sunt dignissimos provident dolorem porro aliquam, est esse id adipisci neque sed! Inventore eos omnis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugit perferendis repellendus, natus ipsum voluptate? Exercitationem recusandae accusamus, quam corrupti odio possimus nam quisquam facilis quasi unde blanditiis 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,  <br /> <br /> <br />
                
                <button className='btn' >explore it</button>

             </p>


            </div>
            <div className="wedo-right-float" data-aos="fade-left" >
              <img src={wedo_img} alt="" width={'100%'} height={'100%'}  />
              

            </div>
        </div>
    </div>
  )
}
