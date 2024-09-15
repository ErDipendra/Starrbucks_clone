import React from 'react'
// import "./App.css"
import NavBarComponent from './Component/NavBarComponent'
import GreenBannerComponent from './Component/GreenBannerComponent'
import HandcraftComponent from './Component/HandcraftComponent'
import OfferComponent from './Component/OfferComponent'
import BarishtaComponent from './Component/BarishtaComponent'
import BannerComponent from './Component/BannerComponent'
import FooterComponent from './Component/FooterComponent'

const App   = () => {
  return (
    <> 
     
   
   <div><NavBarComponent/> </div>
   <div> <GreenBannerComponent/></div>
   <div> <OfferComponent/></div>

    <div className='mt-14'> <HandcraftComponent/> </div> 
   
    
    <div> < BarishtaComponent/></div>
    <div>< BannerComponent/></div>
<div> <FooterComponent/>  </div>
    </>
  )
}

export default App