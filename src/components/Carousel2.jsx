import React, { useState, useEffect } from 'react'
import '../components/css/Carousel2.css'
import wedo from '../assets/wedo.jpg'

const Carousel2= ()=> {

 const [currentSlide, setCurrentSlide] = useState(0);

 const content_arr = [
    {
        head: 'Exclusive Arabian Brocade Lace',
        descp: 'Every fashion minded needs, collection of differenct arabian exclusive fabrics, that dares fashion, it speaks nothing but luxuruy',
        pic: <img src={wedo} alt="" width='100%' height='100%' />
    },
 ];

 const nextSlide = () => {
    setCurrentSlide((prev) => (prev === content_arr.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? content_arr.length - 1 : prev - 1));
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, );


  return (
    <div className="slide-container">
        {content_arr.map((content, index)=>(
            <div key={index} className="carousels">
                <div className="left-container">
                    <h3> {content.head} </h3>
                </div>
                <div className="right-container">
                    <div className="caro-img">{content.pic}</div>
                </div>
            </div>
        ))}
      
    </div>
  )
}
export default Carousel2