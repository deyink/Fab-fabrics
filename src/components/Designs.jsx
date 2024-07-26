import React from 'react'
import '../components/css/Designs.css'
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
function Designs() {
  return (
    <div className='designs' >
        <div className="designs-container">
          <div className="d-box"> <img className='cat-img' src={cat1} alt="" /> <div className="cat-name"> New Collection </div> </div>
          <div className="d-box"> <img className='cat-img' src={cat2} alt="" /> <div className="cat-name"> Exclusive Designs </div> </div>
          <div className="d-box"> <img className='cat-img' src={cat3} alt="" /> <div className="cat-name"> Luxurious Fabrics </div> </div>
          <div className="d-box"> <img className='cat-img' src={cat4} alt="" /> <div className="cat-name"> Fashion & Accessories </div> </div>
        </div>
    </div>
  )
}
  
export default Designs