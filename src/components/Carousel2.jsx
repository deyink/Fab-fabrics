import React, { useState, useEffect } from 'react'
import '../components/css/Carousel2.css'
import wedo from '../assets/wedo.jpg'
import lt from '../assets/lt.png';
import gt from '../assets/gt.png'
import { useSwipeable } from 'react-swipeable';
const Carousel2= ()=> {

 const [currentSlide, setCurrentSlide] = useState(0);

 const content_arr = [
    {
        head: 'Arabian Brocade Lace',
        dscrp: 'Every fashion minded needs, collection of differenct arabian exclusive fabrics, that dares fashion, it speaks nothing but luxuruy',
        pic: <img src={wedo} alt="" width='100%' height='100%' />
    },
    {
      head: 'Exclusive Brocade Lace',
      dscrp: 'Every fashion minded needs, collection of differenct arabian exclusive fabrics, that dares fashion, it speaks nothing but luxuruy',
      pic: <img src={wedo} alt="" width='100%' height='100%' />
  },
  {
    head: 'Arabian Brocade Lace',
    dscrp: 'Every fashion minded needs, collection of differenct arabian exclusive fabrics, that dares fashion, it speaks nothing but luxuruy',
    pic: <img src={wedo} alt="" width='100%' height='100%' />
},
{
  head: 'Exclusive Brocade Lace',
  dscrp: 'Every fashion minded needs, collection of differenct arabian exclusive fabrics, that dares fashion, it speaks nothing but luxuruy',
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


  const handlers = useSwipeable( {
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
    
  } )



  return (
    <div className="slide-container" {...handlers} >
        {content_arr.map((content, index)=>(
            <div key={index} className="carousels" style={{transform: `translateX(-${currentSlide * 100}%)`,
          }} >
                <div className="left-container">
                    <h3> {content.head} </h3> <br /> 
                    <p> {content.dscrp} </p>
                </div>
                <div className="right-container">
                    <div className="caro-img">{content.pic}</div>
                    
                </div>
            </div>
        ))}
    
    <button className="cprev-button" id='btn-ar' onClick={prevSlide}> <img src={lt} alt="" /> </button>
    <button className="cnext-button" id='btn-ar' onClick={nextSlide}> <img src={gt} alt="" /> </button>
    </div>
  )
}
export default Carousel2