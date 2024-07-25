import React from 'react'

function CallToAction() {
  return (
    <div>
      <section className='bg-purple-400 text-white h-auto md:h-[605px] flex flex-col items-center justify-center p-4'>
  <div className='text-white w-full md:w-[770px] h-auto md:h-[277px] flex flex-col justify-between items-center'>
    <div className='text-white w-full md:w-[770px] h-auto md:h-[161px] font-bold text-[36px] md:text-[58px] leading-[44px] md:leading-[70px] tracking-[-1px] flex items-center justify-center text-center'>
      Easy to setup.<br />Easy to maintain
    </div>

    <div className='text-white w-full md:w-[518px] font-medium text-[18px] md:text-[22px] leading-[28px] md:leading-[32px] text-center h-auto mt-4 md:mt-8'>
      Bootstrap is a widely-used, sleek, intuitive, and powerful front-end framework for faster and easier web development.
    </div>
  </div>

  <div className='text-white w-[85%] md:w-[313px] h-auto md:h-[70px] flex flex md:flex-row justify-between items-center mt-8 md:mt-16 space-y-4 md:space-y-0'>
    <div className='bg-customRed text-white w-[70px] h-[70px] rounded-full'></div>
    <div className='bg-customColor text-white w-[213px] h-[70px] rounded-full font-medium text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] flex justify-center items-center'>
      Get Started
    </div>
  </div>
</section>


    </div>
  )
}

export default CallToAction