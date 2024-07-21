import React from 'react'
import './css/NewCollection.css'
import img1 from '../assets/product_10.jpg'
import img2 from '../assets/product_11.jpg'
import img3 from  '../assets/product_18.jpg'
function NewCollection() {
  return (
    <div className='collection' >
        <div className="container">
            <p>Home / features / </p>
            <div className="box-container">
           
                <div className="col-box">
                    <img className='col-img' src={img1} alt='' />
                </div>
                <div className="col-box">
                    <img className='col-img' src={img2} alt="" />
                </div>
                <div className="col-box">
                    <img className='col-img' src={img3} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewCollection