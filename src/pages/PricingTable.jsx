import React from 'react'

function PricingTable() {
  return (
    <div>
        <section className='bg-indigo-900 text-white flex flex-col items-center justify-center gap-16 py-16'>
    <div className='w-full max-w-[586px] text-center px-4'>
        <div className='font-bold text-[32px] sm:text-[42px] leading-[42px] sm:leading-[52px] tracking-[-0.4px] mb-4'>Plans & Pricing</div>
        <div className='font-medium text-[18px] sm:text-[22px] leading-[28px] sm:leading-[32px]'>Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</div>
    </div>
    <div className='w-full max-w-[1200px] flex flex-col sm:flex-row justify-between gap-8 px-4'>
        <div className='border-2 border-slate-400 w-full sm:w-[370px] flex flex-col justify-evenly items-center rounded-[10px] p-6'>
            <div className='w-full flex flex-col items-center mb-6'>
                <div className='font-medium text-[22px] leading-[32px] mb-2'>Starter</div>
                <div className='flex items-baseline'>
                    <div className='font-bold text-[42px] leading-[42px] tracking-[-1px]'>$9.99</div>
                </div>
            </div>
            <div className='w-full'>
                <ul className='space-y-4'>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>2 GB of space</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>14 days of backups</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Social integrations</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Client billing</li>
                    <li className='flex items-center opacity-70'><i className="fa-solid fa-check text-green-300 mr-2"></i>Remote access</li>
                    <li className='flex items-center opacity-70'><i className="fa-solid fa-check text-green-300 mr-2"></i>Custom domain</li>
                    <li className='flex items-center opacity-70'><i className="fa-solid fa-check text-green-300 mr-2"></i>24 hours support</li>
                    <li className='flex items-center opacity-70'><i className="fa-solid fa-check text-green-300 mr-2"></i>Admin tools</li>
                    <li className='flex items-center opacity-70'><i className="fa-solid fa-check text-green-300 mr-2"></i>Collaboration tools</li>
                    <li className='flex items-center opacity-70'><i className="fa-solid fa-check text-green-300 mr-2"></i>User management</li>
                </ul>
            </div>
            <button className='mt-6 w-[230px] h-[60px] rounded-full border-2 border-gray-200 flex items-center justify-center font-medium text-[20px] leading-[26px] text-white'>
                Get Started
            </button>
        </div>

        <div className='border-2 border-slate-400 w-full sm:w-[370px] flex flex-col justify-evenly items-center rounded-[10px] p-6'>
            <div className='w-full flex flex-col items-center mb-6'>
                <div className='font-medium text-[22px] leading-[32px] mb-2'>Professional</div>
                <div className='flex items-baseline'>
                    <div className='font-bold text-[42px] leading-[42px] tracking-[-1px]'>$19.99</div>
                </div>
            </div>
            <div className='w-full'>
                <ul className='space-y-4'>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>2 GB of space</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>14 days of backups</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Social integrations</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Client billing</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Remote access</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Custom domain</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>24 hours support</li>
                    <li className='flex items-center opacity-70'><i className="fa-solid fa-check text-green-300 mr-2"></i>Admin tools</li>
                    <li className='flex items-center opacity-70'><i className="fa-solid fa-check text-green-300 mr-2"></i>Collaboration tools</li>
                    <li className='flex items-center opacity-70'><i className="fa-solid fa-check text-green-300 mr-2"></i>User management</li>
                </ul>
            </div>
            <button className='mt-6 w-[230px] h-[60px] rounded-full bg-customPink flex items-center justify-center font-medium text-[20px] leading-[26px] text-white'>
                Get Started
            </button>
        </div>

        <div className='border-2 border-slate-400 w-full sm:w-[370px] flex flex-col justify-evenly items-center rounded-[10px] p-6'>
            <div className='w-full flex flex-col items-center mb-6'>
                <div className='font-medium text-[22px] leading-[32px] mb-2'>Team</div>
                <div className='flex items-baseline'>
                    <div className='font-bold text-[42px] leading-[42px] tracking-[-1px]'>$49.99</div>
                </div>
            </div>
            <div className='w-full'>
                <ul className='space-y-4'>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>2 GB of space</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>14 days of backups</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Social integrations</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Client billing</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Remote access</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Custom domain</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>24 hours support</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Admin tools</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>Collaboration tools</li>
                    <li className='flex items-center'><i className="fa-solid fa-check text-green-300 mr-2"></i>User management</li>
                </ul>
            </div>
            <button className='mt-6 w-[230px] h-[60px] rounded-full border-2 border-gray-200 flex items-center justify-center font-medium text-[20px] leading-[26px] text-white'>
                Get Started
            </button>
        </div>
    </div>
</section>

    </div>
  )
}

export default PricingTable