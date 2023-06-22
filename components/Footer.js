import React from 'react'
import { FaCity } from 'react-icons/fa'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='pt-16 bg-[#fafafa]'>
        <div className='max-w-7xl px-5 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 mb-5'>

                <div className='space-y-5'>
                    <div className='flex items-center space-x-3'>
                        <FaCity className='w-8 h-8 text-[#3854B5]'/>
                        <h1 className='font-bold text-2xl text-[#333333]'>Dhalem</h1>
                    </div>
                    <p className='text-[#666666] tracking-wide leading-7'>
                        Dubai, known for its opulent architecture, breathtaking skylines, 
                        and extravagant lifestyle, is a city that exudes luxury and glamour.
                    </p>
                </div>

                <div className='space-y-5'>
                    <h4 className='font-semibold text-xl text-[#333333]'>Useful Links</h4>
                    <div className='flex flex-col space-y-3'>
                        <Link href="/" className='text-[#666666] tracking-wide leading-7 hover:text-[#333333]'>Home</Link>
                        <Link href="/listing/dubai" className='text-[#666666] tracking-wide leading-7 hover:text-[#333333]'>Listing</Link>
                        <Link href="/blog" className='text-[#666666] tracking-wide leading-7 hover:text-[#333333]'>Blog</Link>
                        <Link href="/contact" className='text-[#666666] tracking-wide leading-7 hover:text-[#333333]'>Contact</Link>
                    </div>
                </div>

                <div className='space-y-5'>
                    <h4 className='font-semibold text-xl text-[#333333]'>Popular Listings</h4>
                    <div className='flex flex-col space-y-3'>
                        <Link href="/listing/dubai" className='text-[#666666] tracking-wide leading-7 hover:text-[#333333]'>Dubai</Link>
                        <Link href="/listing/abu%20dhabi" className='text-[#666666] tracking-wide leading-7 hover:text-[#333333]'>Abu Dhabi</Link>
                        <Link href="/listing/sharjah" className='text-[#666666] tracking-wide leading-7 hover:text-[#333333]'>Sharjah</Link>
                        <Link href="/listing/hatta" className='text-[#666666] tracking-wide leading-7 hover:text-[#333333]'>Hatta</Link>
                    </div>
                </div>

                <div className='space-y-5'>
                    <h4 className='font-semibold text-xl text-[#333333]'>Social Links</h4>
                    <div className='flex space-x-2'>
                        <SocialIcon url='https://www.instagram.com/akshaycodes3/' fgColor="white" bgColor="#3854B5"/>
                        <SocialIcon url='https://github.com/webonly-designs' fgColor="white" bgColor="#3854B5"/>
                        <SocialIcon url='https://www.youtube.com/channel/UCZQ5lfHxbiu81oziZpJ5p7g' fgColor="white" bgColor="#3854B5"/>
                    </div>
                </div>

            </div>
            <div className='border-t-2 bg-gray-50'>
                <p className='py-5 text-center text-[#666666] text-sm'>© 2023 Copyright — Dhalem</p>
            </div>
        </div>
    </div>
  )
}

export default Footer