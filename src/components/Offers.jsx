import React, { useState } from 'react'
import '../components/css/Offers.css'
import img1 from '../assets/product_6.jpg'
import img2 from '../assets/product_7.jpg'
import img3 from '../assets/product_9.jpg'
import img4 from '../assets/cat41.jpg'




function Offers() {


  return (
    <div className="offer">
        <div className="offer-container">
          <div className="o-box"  > <img src={img1} alt=""   /> <div className=""></div> <h3>Jackard Lace</h3> <h5>$500   </h5>  </div>
   

          <div className="o-box"> <img src={img2} alt=""   /> <div className=""></div> <h3>Jackard Lace</h3> <h5>$500   </h5> </div>
    
          <div className="o-box"> <img src={img3} alt=""   /> <div className=""></div> <h3>Jackard Lace</h3> <h5>$500   </h5> </div>
   

          <div className="o-box"> <img src={img4} alt=""   /> <div className=""></div> <h3>Jackard Lace</h3> <h5>$500   </h5> </div>


        </div>
      </div>
  )
}

export default Offers