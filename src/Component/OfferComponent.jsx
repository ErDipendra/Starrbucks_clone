import React from 'react'

const OfferComponent = () => {
  return (
    <div className='bg-[#14532d] h-60 ml-20 mr-20  rounded-md flex flex-between' > 

        <div> <img className='w-28' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1087_b1db5faed6.png" alt="" /></div>

            <div className='mt-9 ml-6'> <span>Now Brewing</span> <br />
             <span className='mt-7 font-'>Starbucks Menu</span>
            </div>
            <div className='mt-48 ml-auto '><button className='border-2 p-2 h-12 rounded-3xl text-white bg-[#00754a]  '> Order now </button></div>
         </div>
  )
}

export default OfferComponent