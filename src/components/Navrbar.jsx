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
  const [curr, setCurr] = useState('USD') 
  
  // const currData = [ 
  //   { id: '1', value:'USD' },
  //   { id: '2', value: 'EUR' },
  //   { id: '3', value: 'DHR' },
  //   { id: '4', value: 'NGN' },
  //  ]

  

  // const showMobile = ()=>{
  //   const sMobile = document.getElementById('desktop') 
  //   sMobile.style.display='flex';
  //   // const hMenu = document.getElementsById('menu1')
  //   // hMenu.style.display='none'
  // }

  // const hideMobile =()=>{
  //   const hMobile = document.getElementById('desktop')
  //   hMobile.style.display='none';
   
  // }
  const handleChange= (e)=>{
    setCurr(e.target.value)
  }

  // const hideOverlay =()=>{
  //   const hOverlay =document.getElementById('overlay')
  //   hOverlay.style.display='none';
  // }



  

 

  return (

    <div> 
      

      <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="" width={'80%'} height={'50px'} />
      </div>
      <div className="head-text">
        <h3>FAB-LUXURY</h3>
        <h5>Home of luxury & Exclusive fabrics</h5>
      </div>
     
      {/* Desktop Navbar */}
      <ul className="nav-list" id='desktop'  >
        <li onClick={()=>setUnder('Home')} >Home       { under==='Home'? <hr/> :<></> }     </li>
        <li onClick={()=>setUnder('Fabrics')} >Fabrics {under==='Fabrics'?  <hr/>:<></>}   </li>
        <li onClick={()=>setUnder('Blogs')} >Blogs     {under==='Blogs'?  <hr/>:<></> }    </li>
        <li onClick={()=>setUnder('About')} >About     {under==='About'?  <hr/>:<></> }    </li>
        <li onClick={()=>setUnder('Contact')} >Contact {under==='Contact'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('SignUp')} >SignUp   {under==='SignUp'? <hr/> :<></> }   </li>
        <p className='usd' > {curr} </p>
        <select onChange={handleChange} >
          <option  value='USD'> USD </option>
          <option value='NGN'> NGN </option>
          <option value='EUR'> EUR </option>
          <option  value='DRM'> DRM </option>
        </select>
      </ul>
      
      {/* <div className="menu">
      <img id='menu1' onClick={showMobile}  src={menu} alt="" width={'23px'} height={'23px'} />
      </div> */}
      
 
    
      {/* #DF2E38 */}
      <hr className='hr' />
      <div className='categories' >
        <ul>
          <li>New</li>
          <li>Top Designs</li>
          <li> Accessories </li>
          <li>Color</li>
          <li>Trendings</li>
          <li>Sales</li>
        </ul>
        
      </div>
        
      
      </div>    
    </div>
    
  )
}

export default Navbar