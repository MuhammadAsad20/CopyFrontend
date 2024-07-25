import React from 'react'

function ShowCase() {
  return (
    <div>
      <section className='bg-purple-900 text-white h-auto md:h-[1130px] flex flex-col items-center justify-center p-4'>
  <div className='w-full md:w-[970px] h-auto md:h-[52.2px] flex flex-col md:flex-row justify-between mb-8'>
    <div className='w-full md:w-[213px] h-auto md:h-[52px] font-bold text-[28px] md:text-[42px] leading-[36px] md:leading-[52px] tracking-[-0.4px] mb-4 md:mb-0'>Last works</div>
    <div className='w-full md:w-[170px] h-[50px] rounded-full flex items-center justify-center font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] border-2' style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
      View all Works
    </div>
  </div>
  <div className='w-full md:w-[970px] h-auto md:h-[816px] flex flex-col justify-between'>
    <div className='w-full md:w-[970px] h-auto md:h-[371px] flex flex-col md:flex-row justify-between'>
      <div className='w-full md:w-[470px] h-auto md:h-[371px] flex flex-col items-center justify-between mb-8 md:mb-0'>
        <div className='w-full h-[280px] rounded-[10px] overflow-hidden'>
          <img src="https://rb.gy/r7rsu4" alt="Description" className="w-full h-full object-cover"/>
        </div>
        <div className='w-[152px] h-auto flex flex-col items-center'>
          <div className='w-[50px] h-[26px] flex items-start justify-center font-bold text-[14px] leading-[26px] tracking-[2px]'>
            UI kit
          </div>
          <div className='w-full h-[32px] flex items-start justify-center font-medium text-[18px] md:text-[22px] leading-[24px] md:leading-[32px]'>
            Mozart Project
          </div>
        </div>
      </div>
      <div className='w-full md:w-[470px] h-auto md:h-[371px] flex flex-col items-center justify-between mb-8 md:mb-0'>
        <div className='w-full h-[280px] rounded-[10px] overflow-hidden'>
          <img src="https://rb.gy/80h3ua" alt="Description" className="w-full h-full object-cover"/>
        </div>
        <div className='w-[252px] h-auto flex flex-col items-center'>
          <div className='w-[50px] h-[26px] flex items-start justify-center font-bold text-[14px] leading-[26px] tracking-[2px]'>
            Framework
          </div>
          <div className='w-[80%] h-[32px] flex items-start justify-center font-medium text-[18px] md:text-[22px] leading-[24px] md:leading-[32px]'>
            Startup Framework 2.0
          </div>
        </div>
      </div>
    </div>
    <div className='w-full md:w-[970px] h-auto md:h-[371px] flex flex-col md:flex-row justify-between'>
      <div className='w-full md:w-[470px] h-auto md:h-[371px] flex flex-col items-center justify-between mb-8 md:mb-0'>
        <div className='w-full h-[280px] rounded-[10px] overflow-hidden'>
          <img src="https://rb.gy/u1bpn1" alt="Description" className="w-full h-full object-cover"/>
        </div>
        <div className='w-[152px] h-auto flex flex-col items-center'>
          <div className='w-[50px] h-[26px] flex items-start justify-center font-bold text-[14px] leading-[26px] tracking-[2px]'>
            Photos
          </div>
          <div className='w-full h-[32px] flex items-start justify-center font-medium text-[18px] md:text-[22px] leading-[24px] md:leading-[32px]'>
            From the Sky
          </div>
        </div>
      </div>
      <div className='w-full md:w-[470px] h-auto md:h-[371px] flex flex-col items-center justify-between'>
        <div className='w-full h-[280px] rounded-[10px] overflow-hidden'>
          <img src="https://rb.gy/vv7d26" alt="Description" className="w-full h-full object-cover"/>
        </div>
        <div className='w-[152px] h-auto flex flex-col items-center'>
          <div className='w-[50px] h-[26px] flex items-start justify-center font-bold text-[14px] leading-[26px] tracking-[2px]'>
            Pictures
          </div>
          <div className='w-full h-[32px] flex items-start justify-center font-medium text-[18px] md:text-[22px] leading-[24px] md:leading-[32px]'>
            Air Forces
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default ShowCase