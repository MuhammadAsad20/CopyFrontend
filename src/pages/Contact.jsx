import React, { useState } from 'react';

function Contact() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
      setIsClicked(!isClicked);
  };
  return (
    <div>
    <section className='bg-indigo-800 text-white h-auto md:h-[770px] flex items-center justify-center p-4'>
    <div className='flex flex-col md:flex-row items-center gap-8 md:gap-32'>
        <div className='h-auto md:h-[520px] w-full md:w-[400px] flex flex-col justify-between p-4'>
            <div className='h-auto md:h-[208px] w-full flex flex-col justify-between mb-8 md:mb-0'>
                <div className='h-[52px] w-full font-bold text-[32px] md:text-[42px] leading-[40px] md:leading-[52px] tracking-[-0.4px]'>
                    Let’s Keep in Touch
                </div>
                <div className='h-auto md:h-[128px] w-full font-medium text-[18px] md:text-[22px] leading-[28px] md:leading-[32px]'>
                    We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily.
                </div>
            </div>
            <div className='h-auto md:h-[218px] w-full flex flex-col justify-between'>
                <div className='h-auto w-full flex items-center mb-4 md:mb-0'>
                    <div className='h-[38px] w-[15px] flex items-start justify-center'>
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className='ml-4 text-[16px] leading-[26px]'>+1 555 505 5050</div>
                </div>
                <div className='h-auto w-full flex items-center mb-4 md:mb-0'>
                    <div className='h-[38px] w-[18px]'> 
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className='ml-4 text-[16px] leading-[26px]'>info@designmodo.com</div>
                </div>
                <div className='h-auto w-full flex items-center'>
                    <div className='h-[38px] w-[15px]'>
                        <i className="far fa-building"></i>
                    </div>
                    <div className='ml-4 text-[16px] leading-[26px]'>San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909</div>
                </div>
            </div>
        </div>

        <div className='bg-white text-black h-auto md:h-[570px] w-full md:w-[470px] rounded-[10px] flex flex-col justify-around p-8 md:p-12'>
            <div className='w-full flex flex-col md:flex-row justify-between mb-4'>
                <div className='flex flex-col mb-4 md:mb-0'>
                    <label htmlFor="name" className='text-gray-700 font-bold text-[14px] leading-[26px] tracking-[2px] mb-1'>Your Name</label>
                    <input type="text" id="name" placeholder="your name" className='border border-gray-300 hover:border-indigo-500 px-4 py-2 font-medium text-[18px] leading-[26px] rounded-[10px] h-[50px] w-full md:w-[200px] p-2' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="budget" className='text-gray-700 font-bold text-[14px] leading-[26px] tracking-[2px] mb-1'>Budget</label>
                    <input type="text" id="budget" className='border border-gray-300 hover:border-indigo-500 px-4 py-2 font-medium text-[18px] leading-[26px] rounded-[10px] h-[50px] w-full md:w-[140px] p-2' />
                </div>
            </div>
          
            <div className='flex flex-col mb-4'>
                <label htmlFor="email" className='text-gray-700 font-bold text-[14px] leading-[26px] tracking-[2px] mb-1'>Email</label>
                <input type="email" id="email" placeholder="your@gmail.com" className='border border-gray-300 hover:border-indigo-500 px-4 py-2 font-medium text-[18px] leading-[26px] rounded-[10px] w-full h-[50px] p-2' />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="message" className='text-gray-700 font-bold text-[14px] leading-[26px] tracking-[2px] mb-1'>Message</label>
                <textarea id="message" placeholder="message" className='border border-gray-300 hover:border-indigo-500 px-4 py-2 font-medium text-[18px] leading-[26px] rounded-[10px] w-full h-[110px] p-2 resize-none'></textarea>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between mb-4'>
                <div className='flex items-center mb-4 md:mb-0'>
                    <div
                        onClick={handleClick}
                        className={`w-[20px] h-[20px] border border-black rounded-[5px] font-bold relative flex items-center justify-center cursor-pointer ${isClicked ? 'bg-customColor border-0' : 'bg-white border border-black'}`}
                    >
                        {isClicked && (
                            <i className="fa-solid fa-check text-black text-[14px]"></i>
                        )}
                    </div>
                    <label htmlFor="agreement" className='text-gray-400 font-medium ml-2'>Send me a copy</label>
                </div>
                <button className='bg-customColor text-white h-[50px] w-[120px] font-medium text-[18px] leading-[26px] rounded-full'>Send</button>
            </div>
        </div>
    </div>
</section>


    </div>
  )
}

export default Contact