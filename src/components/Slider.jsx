import React from 'react'
import '../App.css'

function Slider() {
    return (
        <>
            <section className="flex flex-col items-center justify-center px-4 md:px-0">
    <div className="text-white w-full max-w-[736px] h-auto flex flex-col items-center justify-between space-y-4 md:space-y-8">
        <div className="w-full h-auto flex items-center justify-between text-[24px] md:text-[32px] font-bold">
            <div className="flex-grow text-center">Startup 3</div>
        </div>
        <div className="w-full h-auto flex items-center justify-between text-center">
            <div className="flex-none"><i className="fa-solid text-white fa-chevron-left"></i></div>
            <div className="flex-grow h-auto flex items-center justify-center text-[32px] md:text-[48px] lg:text-[72px] font-bold text-center leading-tight md:leading-normal">Forget About Code</div>
            <div className="flex-none"><i className="fa-solid text-white fa-chevron-right"></i></div>
        </div>
        <div className="max-w-[736px] w-full flex items-center justify-center text-[16px] md:text-[22px] font-medium text-center px-4 md:px-0">
            Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.
        </div>
    </div>
    <div className="text-white text-[10px] flex items-center mt-12 justify-between w-[91px] h-[11px]">
        <div><i className="fa fa-circle"></i></div>
        <div><i className="fa-regular fa-circle"></i></div>
        <div><i className="fa-regular fa-circle"></i></div>
        <div><i className="fa-regular fa-circle"></i></div>
        <div><i className="fa-regular fa-circle"></i></div>
    </div>
    <div className="mt-14">
        <button className="bg-indigo-600 text-white font-medium text-lg rounded-full w-[240px] h-[60px]">Create an Account</button>
    </div>
</section>

        </>
    )
}

export default Slider