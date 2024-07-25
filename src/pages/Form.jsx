import React, { useState } from 'react';

function Form() {
  const [activeTab, setActiveTab] = useState('signup');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <section className="bg-purple-400 text-white min-h-screen flex justify-center items-center px-4 md:px-0">
        <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-evenly items-center">
          <div className="h-auto md:h-[318px] w-full md:w-[369px] flex flex-col justify-between mx-4 mb-8 md:mb-0">
            <div className="w-full h-auto text-left align-top font-bold text-[28px] md:text-[42px] leading-[32px] md:leading-[52px] tracking-[0.4px]">
              We solve digital problems with an outstanding creative flare
            </div>
            <div className="w-full h-auto text-left align-top font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] tracking-[0px]">
              We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
            </div>
          </div>
          <div className="bg-white w-full md:w-[470px] h-[350PX] md:h-[550px] rounded-[10px] pt-4 mx-4">
        <div className="flex">
            <div onClick={() => handleTabClick('signup')} className={`h-[55px] w-1/2 font-bold text-center cursor-pointer ${activeTab === 'signup' ? 'active-tab' : 'tab'}`}>
                SIGN UP
            </div>
            <div onClick={() => handleTabClick('login')} className={`h-[55px] w-1/2 font-bold text-center cursor-pointer ${activeTab === 'login' ? 'active-tab' : 'tab'}`}>
                LOGIN
            </div>
        </div>
            <div className="flex flex-col justify-between h-auto md:h-[125px] mt-8 md:mt-[80px] items-center">
              <input
                type="email"
                className="w-[90%] md:w-[330px] h-[40px] md:h-[50px] text-black bg-gray-200 transition-colors duration-300 ease-in-out px-4 py-2 rounded-md border border-transparent hover:border-indigo-500 font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] mb-4"
                placeholder="Your Email"
              />
              <input
                type="password"
                className="w-[90%] md:w-[330px] h-[40px] md:h-[50px] text-black bg-gray-200 transition-colors duration-300 ease-in-out px-4 py-2 rounded-md border border-transparent hover:border-indigo-500 font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[26px]"
                placeholder="Your Password"
              />
            </div>
            <div className="flex flex-col justify-between h-auto md:h-[125px] mt-6 md:mt-[60px] items-center">
              <button
                type="text"
                className="w-[70%] md:w-[330px] h-[40px] md:h-[50px] bg-customColor transition-colors duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent hover:border-indigo-500 font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] mx-auto flex items-center justify-center"
              >
                Create an Account
              </button>

              <div className="text-center text-gray-800 md:my-5">
                or
              </div>

              <button
                type="text"
                className="w-[70%] md:w-[330px] h-[40px] md:h-[50px] bg-blue-600 transition-colors duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent hover:border-indigo-500 font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] mx-auto flex items-center justify-center"
              >
                Login via Twitter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
