import React from 'react'

function Footer() {
  return (
    <div>
       <section className='bg-indigo-800 text-white flex flex-col items-center justify-evenly py-6 md:py-12'>
    <div className='w-full max-w-[1170px] px-4 flex flex-col md:flex-row justify-between items-center md:items-start'>
        
        <div className='font-bold text-[24px] leading-[31.2px] tracking-[-0.29px] mb-4 md:mb-0'>
            Startup 3
        </div>
        
        <div className='flex flex-wrap justify-center md:justify-between space-x-4'>
            <div className='mb-2 md:mb-0'>Privacy Policy</div>
            <div className='mb-2 md:mb-0'>Terms</div>
            <div className='mb-2 md:mb-0'>
                <i className="fab fa-twitter"></i>
            </div>
            <div className='mb-2 md:mb-0'>
                <i className="fab fa-facebook"></i>
            </div>
            <div className='mb-2 md:mb-0'>
                <i className="fab fa-google-plus"></i>
            </div>
        </div>
    </div>
    
    <div className='border border-slate-200 opacity-30 w-full max-w-[1170px] my-4'></div>
    
    <div className='w-full max-w-[1170px] px-4 flex flex-col md:flex-row justify-between items-center'>
        
        <div className='flex flex-wrap justify-center md:justify-between space-x-4 mb-4 md:mb-0'>
            <div className='mb-2'>Tour</div>
            <div className='mb-2'>Features</div>
            <div className='mb-2'>Pricing Plans</div>
            <div className='mb-2'>Our Works</div>
            <div className='mb-2'>Brands</div>
            <div className='mb-2'>Contacts</div>
        </div>
        
        <div className='text-center md:text-right text-sm'>© 2017 Designmodo. All rights reserved.</div>
    </div>
</section>


    </div>
  )
}

export default Footer