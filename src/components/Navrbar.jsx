import React, { useEffect, useState } from 'react'
import './css/Navbar.css'
import Logo from '../assets/Fab_logo.jpg'
import menu from '../assets/menuw.png'
import close from '../assets/close.png'
import AOS from "aos"
import "aos/dist/aos.css"


function Navbar() {
  useEffect(()=>{
    AOS.init({duration:2000})
  }, [])
  const [under, setUnder] = useState('Home');
  

  const showMobile = ()=>{
    const sMobile = document.getElementById('mobile-nav') 
    sMobile.style.right='0px';
    // const hMenu = document.getElementsById('menu1')
    // hMenu.style.display='none'
  }

  const hideMobile =()=>{
    const hMobile = document.getElementById('mobile-nav')
    hMobile.style.right='-700px';
   
  }

  // const hideOverlay =()=>{
  //   const hOverlay =document.getElementById('overlay')
  //   hOverlay.style.display='none';
  // }



  

 

  return (

    <div> 
      

      <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="" width={'101'} height={'60px'} />
      </div>
      <div className="head-text">
        <h3>FAB-LUXURY</h3>
      </div>

      {/* Desktop Navbar */}
      <ul className="nav-list" id='desktop'  >
        <li onClick={()=>setUnder('Home')} >Home       { under==='Home'? <hr/> :<></> }     </li>
        <li onClick={()=>setUnder('Fabrics')} >Fabrics {under==='Fabrics'?  <hr/>:<></>}   </li>
        <li onClick={()=>setUnder('Blogs')} >Blogs     {under==='Blogs'?  <hr/>:<></> }    </li>
        <li onClick={()=>setUnder('About')} >About     {under==='About'?  <hr/>:<></> }    </li>
        <li onClick={()=>setUnder('Contact')} >Contact {under==='Contact'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('SignUp')} >SignUp   {under==='SignUp'? <hr/> :<></> }   </li>
   
      </ul>
      <div className="menu">
      <img id='menu1' onClick={showMobile}  src={menu} alt="" width={'23px'} height={'23px'} />
      </div>

 
    
   
    
        
      
      </div>

           {/* mobile Nav bar */}
           {/* <label id='overlay' htmlFor="close" onClick={hideMobile}  ></label> */}
        
           <div className="mobile-nav" id='mobile-nav'  >
      <ul className='m-navlist' id='m-navlist'  >
        <li onClick={hideMobile} >Home      </li>
        <li onClick={hideMobile} >Fabrics  </li>
        <li onClick={hideMobile} >Blogs    </li>
        <li onClick={hideMobile} >About    </li>
        <li onClick={hideMobile} >Contact  </li>
        <li onClick={hideMobile} >SignUp  </li>
          <li className='close'onClick={hideMobile} > <img src={close} alt="" width={'21px'} height={'21px'} />  </li>
   
      </ul>
      
      </div>
      
    
    </div>
    
  )
}

export default Navbar