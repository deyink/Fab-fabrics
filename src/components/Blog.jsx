import React, {useEffect} from 'react'
import './css/Blog.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Blog() {
  useEffect(()=>{
    AOS.init({duration:2000})
  }, [])
  return (
    <div className='blog' data-aos="fade-up" >
        <div className="blog-container">
          <h2>Our Blog</h2>     

         <div className="cards">
         <div class="card">
   <div className="card1">
    <p>This is heading</p>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" >
      <div class="go-arrow">
        →
      </div>
    </div>
    </div>
</div>
<div class="card">
   <div className="card1">
    <p>This is heading</p>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" >
      <div class="go-arrow">
        →
      </div>
    </div>
    </div>
</div>
<div class="card">
   <div className="card1">
    <p>This is heading</p>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" >
      <div class="go-arrow">
        →
      </div>
    </div>
    </div>
</div>
<div class="card">
   <div className="card1">
    <p>This is heading</p>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" >
      <div class="go-arrow">
        →
      </div>
    </div>
    </div>
</div>
<div class="card">
   <div className="card1">
    <p>This is heading</p>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" >
      <div class="go-arrow">
        →
      </div>
    </div>
    </div>
</div>
<div class="card">
   <div className="card1">
    <p>This is heading</p>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" >
      <div class="go-arrow">
        →
      </div>
    </div>
    </div>
</div>
         </div>
          

          

        </div>
    </div>
  )
}
