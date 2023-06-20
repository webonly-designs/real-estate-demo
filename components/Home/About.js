import React from 'react'

function About() {
  return (
    <div className='py-16 bg-[#fafafa]'>
        <div className='max-w-7xl mx-auto px-5 md:flex items-center justify-between md:space-x-10 space-y-5'>
            <div className='space-y-5'>
                <h2 className='text-4xl font-semibold text-[#333333] tracking-wide'>Our Vision</h2>
                <p className='text-[#666666] tracking-wide leading-7'>
                    Our vision at Dhalem Real Estate Company is to revolutionize the real estate 
                    industry by leveraging cutting-edge technology and unparalleled expertise to 
                    provide our clients with exceptional service and value.
                </p>
                <img src="vision.jpg" alt="vision" className='w-full h-96 rounded-lg object-cover'/>
            </div>
            <div className='space-y-5 md:flex md:flex-col-reverse'>
                <div className='space-y-5 md:mt-5'>
                    <h2 className='text-4xl font-semibold text-[#333333] tracking-wide'>Our Mission</h2>
                    <p className='text-[#666666] tracking-wide leading-7'>
                        We are dedicated to delivering exceptional value and results, 
                        leveraging our deep knowledge of local markets, cutting-edge technology, and 
                        strategic partnerships to help our clients achieve their property goals.
                    </p>
                </div>
                <img src="mission.png" alt="vision" className='w-full h-96 rounded-lg object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default About