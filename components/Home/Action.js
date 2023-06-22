import Link from 'next/link'
import React from 'react'

function Action() {
  return (
    <div className='mb-16 max-w-7xl mx-auto px-5'>
        <div className='bg-black/95 py-24 rounded-2xl px-5'>
            <div className='space-y-5 flex flex-col items-center justify-center'>
                <h2 className='text-4xl font-semibold text-white tracking-wide max-w-md mx-auto text-center'>Let's Move to Your Dream Family Home.</h2>
                <Link href="/contact" className='bg-[#3854B5] px-8 text-white py-3 rounded-full hover:bg-white hover:text-[#3854B5]'>
                    <p className='text-lg font-semibold'>Book Showing</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Action