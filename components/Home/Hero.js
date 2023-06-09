import Link from 'next/link'
import React, { useState } from 'react'
import {FaSearch} from "react-icons/fa"

function Hero() {
  const [place, setPlace] = useState("")
  return (
    <div className='lg:flex items-center my-6 lg:my-16 lg:space-x-24'>

      <div className='lg:w-1/2 space-y-5 md:space-y-10'>
        <h1 className='text-4xl lg:text-5xl font-semibold leading-[3rem] lg:leading-[4rem] tracking-wide text-[#333333]'>Bring Your Family's Happiness to Your <br className='hidden lg:inline-flex'/> Dream House</h1>
        <p className='text-[#666666] tracking-wide leading-7'>
          Dubai, known for its opulent architecture, breathtaking skylines, 
          and extravagant lifestyle, is a city that exudes luxury and glamour.
          Discover the Luxurious Lifestyle of Dubai through our Premier Real Estate Listings.
        </p>
        <form>
          <div className='flex items-center space-x-4 bg-[#fafafa] p-3 rounded-full'>
            <FaSearch className='w-4 h-4 ml-2 text-[#ebebeb]' />
            <input 
              type="text"
              placeholder='Enter a location in UAE here ... (like Dubai)'
              className='text-sm flex-1 bg-transparent outline-none'
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            {place.length > 0 ? (
              <Link href={`listing/${place}`}
                className='py-2 px-8 bg-[#3854B5] rounded-full text-white hover:bg-black'
                
              >
                  Search
              </Link>
            ):(
              <button 
                className='py-2 px-8 bg-gray-400 rounded-full text-white'
                disabled={true}
              >
                  Search
              </button>
            )}
          </div>
        </form>
        <div className='flex items-center space-x-16'>
          <div className='space-y-1'>
            <p className='text-2xl font-semibold'>300+</p>
            <p className='text-[#666666] tracking-wide'>Awards Winning</p>
          </div>
          <div className='space-y-1'>
            <p className='text-2xl font-semibold'>80+</p>
            <p className='text-[#666666] tracking-wide'>Property Ready</p>
          </div>
          <div className='space-y-1'>
            <p className='text-2xl font-semibold'>450+</p>
            <p className='text-[#666666] tracking-wide'>Happy Customers</p>
          </div>
        </div>

      </div>
      
      <div className='lg:w-1/2 mt-8 lg:mt-0'>
        <img src='dhalem-hero.jpg' className='w-full h-96 md:h-[500px] lg:h-full rounded-2xl object-cover'/>
      </div>

    </div>
  )
}

export default Hero