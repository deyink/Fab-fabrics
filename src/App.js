import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navrbar';
import Testimonial from './components/Testimonial';
import Whyfab from './components/Whyfab';
import Wedo from './components/Wedo';
import Blog from './components/Blog';
import NewCollection from './components/NewCollection';
import Designs from './components/Designs';



function App() {

  
  return (
    <div>

      <Navbar   />
       {/* <Hero     /> */}
      <NewCollection />
      <Designs />
 

      {/* <About    />
      <Wedo     />
      <Whyfab   />
      <Footer   /> */}

    </div>
  );
}

export default App;
