import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function LandingPage() {
  return (
    <>
    <section className="bg-violet-300 h-auto min-h-[850px] sm:h-[850px]">
    <div>
    <Navbar/>
    </div>
    <div>
      <Slider/>
    </div>
    </section>
    </>
  )
}

export default LandingPage