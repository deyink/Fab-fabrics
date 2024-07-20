import React, {useEffect} from 'react'
import './css/Whyfab.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Whyfab = ()=>{
  useEffect(()=>{
    AOS.init({duration:2000})
  }, [])
    return(
        <div className="whyfab-container" data-aos="fade-up" >



            <div className="sub-container">
            <h4>WHY FAB-LUXURY ? </h4>
                <div className="boxes">

                <div className="box" data-aos="fade-right" >
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore laudantium quia tempore voluptatum 
                  </p>
  
                </div>
              <div className="box" data-aos="fade-left" >
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore laudantium quia tempore voluptatum 
                  </p>

                </div>
                <div className="box" data-aos="fade-left" >
                    
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore laudantium quia tempore voluptatum 
                  </p>
                    </div>
                    <div className="box" data-aos="fade-right" >
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore laudantium quia tempore voluptatum 
                  </p>

                </div>
                <div className="box" data-aos="fade-left" >
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore laudantium quia tempore voluptatum 
                  </p>

                </div>
                <div className="box" data-aos="fade-right" >
                    
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore laudantium quia tempore voluptatum 
                  </p>
            </div>
            </div>
            
              

            </div>
        </div>
    )

}



export default Whyfab