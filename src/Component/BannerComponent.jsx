import React from 'react'
import "../image/Learnmore.css"
const BannerComponent = () => {
  return (
    <div className='p-5 bg-[#edebe9] w-100 mt-14 lg:pl-20 lg:pr-20 pb-10 relative '>
    <div className='pt-5 flex justify-between'> 
        <span className='text-[#le3932] font-bold text-2xl'>  Learn more about the world</span>
        <span className='text-[#00754a] font-semibold text-sm cursor-pointer'> Discover more</span>
     </div>
     <div className='mt-10 rounded-lg cursor-pointer'>
       
    <div className='flex flex-col justify-between rounded-lg cursor-pointer image pl-10 pt-5 pb-10'> 
      <span className='text-[#096] bg-[#E6EDEB] p-1 rounded-md w-20 ' style={{fontSize:10}} > Coffee Culture   </span>

<div className='text-black'>
  <p className='text-2xl font-semibold'>Art & Science Of Coffee Brewing </p>
  <p> Master the perfect brew with Starbucks! Learn the art and science of coffee brewing. </p>
  <button className='bg-white text-xs font-semibold text-{#1e3932] mt-14 pl-16 pr-16 p-2 rounded-full'>Learn More</button>
</div>
 </div>
       
    </div>
  
    
    
    
    
        </div>
  )
}

export default BannerComponent