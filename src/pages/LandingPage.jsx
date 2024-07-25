import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function LandingPage() {
  return (
    <>
    <section className="bg-purple-950 h-auto min-h-[500px] sm:min-h-[850px]">
  <div>
    <Navbar />
  </div>
  <div>
    <Slider />
  </div>
</section>
</>
  )
}

export default LandingPage