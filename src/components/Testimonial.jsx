import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Testimonial.css"
import carousel_img from "../assets/carousel_img.webp"
import carousel_img2 from "../assets/carousel_img2.webp"
import carousel_img3 from "../assets/carousel_img3.webp"
import testimonial_back from "../assets/testimonial_back.webp"



const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false
      };
    
  return (
    <div className='testimonial' id='Testimonial' style={{
        backgroundImage: `url(${testimonial_back})` ,   
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat", }}>
        <div className="testimonial-container">
            <div className="opacity"></div>
            <div className="slider">
            <Slider {...settings}>
          <div >
            <img src={carousel_img} alt="" loading="lazy" />
            <h3>Aisha </h3> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi id quidem nemo consequuntur exercitationem accusantium similique nihil, quam sunt at facere, expedita deserunt iure, placeat assumenda tempore. Facere, delectus.</p>
          </div>
          <div >
            <img src={carousel_img2} alt="" loading="lazy" />
            <h3>Bilal</h3> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi id quidem nemo consequuntur exercitationem accusantium similique nihil, quam sunt at facere, expedita deserunt iure, placeat assumenda tempore. Facere, delectus.</p>
          </div>
          <div >
            <img src={carousel_img3} alt="" loading="lazy" />
            <h3>Alison</h3> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi id quidem nemo consequuntur exercitationem accusantium similique nihil, quam sunt at facere, expedita deserunt iure, placeat assumenda tempore. Facere, delectus.</p>
          </div>
      
       
        </Slider>
            </div>


        </div>
    </div>
  )
}



export default Testimonial