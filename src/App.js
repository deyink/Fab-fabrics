import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navrbar';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import NewCollection from './components/NewCollection';
import Designs from './components/Designs';
import Carousel2 from './components/Carousel2';
import Offers from './components/Offers';






function App() {

  
  return (
    <div>

      <Navbar   />
      <NewCollection />
      <Designs />
      <Carousel2 />
      <Offers />
   
       {/* <Hero     /> */}
      {/* <About    />
      <Wedo     />
      <Whyfab   />
      <Footer   /> */}

    </div>
  );
}

export default App;
