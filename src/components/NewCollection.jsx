import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../components/css/NewCollection.css';
import lt from '../assets/lt.png';
import gt from '../assets/gt.png'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      content: 'New Collections',
      background: 'url(https://images.unsplash.com/photo-1528355733424-0712487f673f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      add: <a href="#"></a>
    },
    {
      content: 'Luxury Design',
     background: 'url(https://images.unsplash.com/photo-1590507673164-6c6d319f9b84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
     add: <a href="#"></a>
    },
    {
      content: 'Exclusive Accessories  ',
      background: 'url(https://images.unsplash.com/photo-1717409014701-8e630ff057f3?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      add: <a href="#"></a>
    },
    {
      content: 'WHite Lace Fabrics',
      background:'url(https://images.unsplash.com/photo-1634640249833-7307e385f148?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      add: <a href="#"></a>
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, );

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="carousel-container" {...handlers} >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="slide"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            backgroundImage: slide.background,
          }}>
            
          <div className="slide-content">{slide.content}</div>
       
        </div>
       
      ))}
      
      <button className="prev-button" id='btn-ar' onClick={prevSlide}> <img src={lt} alt="" /> </button>
      <button className="next-button" id='btn-ar' onClick={nextSlide}> <img src={gt} alt="" /> </button>
    </div>
  );
};

export default Carousel;
