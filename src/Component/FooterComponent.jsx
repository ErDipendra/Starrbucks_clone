import React from 'react'

const FooterComponent = () => {
  return (
    <div className='p-5 lg:pl-20 lg:pr-20 bg-[#0e382c] w-full'>  
    <div className='flex justify-between flex-wrap'>
        <div className='mt-2'>
            <img src={require("../image/logo.png")} alt='logo'/>
        </div>
        <div className='text-white mt-2'> 
            <p className='mt-2 font-semibold text-xl'>About Us</p>
<p className='mt-2'>Our Heritage</p>
<p className='mt-2'>Coffeehouse</p>
<p className='mt-2'>Our Company  </p>

</div>
<div className='text-white mt-2'>
<p className='mt-2 font-semibold text-xl'>Responsibility</p>
<p className='mt-2'>Diversity</p>
<p className='mt-2'>Community</p>
<p className='mt-2'>Ethical Sourcing</p>
<p className='mt-2'>Environmental Stewardship</p>
<p className='mt-2'>Learn More</p>
</div> 
<div className='text-white mt-2'>
<p className='mt-2 font-semibold text-xl'>Quick Links</p>
<p className='mt-2'>Privacy Policy</p>
<p className='mt-2'>FAQs</p>
<p className='mt-2'>Terms and Conditions</p>
<p className='mt-2'>Starbucks India Mobile App Terms of Use</p>
<p className='mt-2'>Customer Service</p>
<p className='mt-2'>Starbucks Rewards Day Offer</p>
<p className='mt-2'>Delivery</p>
<p className='mt-2'>Season's Gifting</p>
<p className='mt-2'>Offer for Beverage Subscription at Starbucks.</p>
<p className='mt-2'>Beverage Subscription</p>
</div>
<div className='text-white mt-2'>
<p className='mt-2 font-semibold text-xl'> SOCIAL MEDIA </p>
<img src="https://www.starbucks.in/assets/icon/instagram.svg" alt="Instagram" />
<img src="https://www.starbucks.in/assets/icon/facebook.svg" alt="Facebook" />
<img src="https://www.starbucks.in/assets/icon/twitter.svg" alt="Twitter" />

</div>
<div>
<img src="https://www.starbucks.in/assets/images/appstoreiOS.png" alt="" />
<img src="https://www.starbucks.in/assets/images/appstoreAndroid.png" alt="" />
</div>
    </div>
    
    </div>
  )
}

export default FooterComponent