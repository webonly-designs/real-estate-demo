import Link from 'next/link'
import React, { useState } from 'react'
import {FaBars, FaWindowClose, FaCity} from "react-icons/fa"

function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='max-w-7xl mx-auto p-5 flex justify-between items-center relative'>
        <div className='flex items-center space-x-3'>
            <FaCity className='w-8 h-8 text-[#3854B5]'/>
            <h1 className='font-bold text-2xl text-[#333333]'>Dhalem</h1>
        </div>
        <div className='hidden lg:flex items-center space-x-12'>
            <Link href="/" className='text-black/60 hover:text-black/80'>
                Home
            </Link>
            <Link href="/listing/dubai" className='text-black/60 hover:text-black/80'>
                Listing
            </Link>
            <Link href="/" className='text-black/60 hover:text-black/80'>
                Services
            </Link>
            <Link href="/blog" className='text-black/60 hover:text-black/80'>
                Blog
            </Link>
            <Link href="/" className='text-black/60 hover:text-black/80'>
                About
            </Link>
            <Link href="/contact" className='text-black/60 hover:text-black/80'>
                Contact Us
            </Link>
            <Link href="/contact" className='py-2 px-6 bg-[#3854B5] text-white rounded-full hover:bg-black'>
                Get a Quote
            </Link>
        </div>
        <div className='lg:hidden'>
            <FaBars className='w-5 h-5 cursor-pointer hover:text-[#3854B5]' onClick={() => setIsMenuOpen(true)}/>
            {isMenuOpen && (
                <div className='absolute top-0 left-0 w-full z-10 bg-white'>
                    <div className='p-5 flex flex-col space-y-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <FaCity className='w-8 h-8 text-[#3854B5]'/>
                                <h1 className='font-bold text-2xl text-[#333333]'>Dhalem</h1>
                            </div>
                            <FaWindowClose className='w-5 h-5 cursor-pointer hover:text-[#3854B5]' onClick={() => setIsMenuOpen(false)}/>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <Link href="/" className='text-black/60 hover:text-black/80' onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                            <Link href="/listing/dubai" className='text-black/60 hover:text-black/80' onClick={() => setIsMenuOpen(false)}>
                                Listing
                            </Link>
                            <Link href="/" className='text-black/60 hover:text-black/80' onClick={() => setIsMenuOpen(false)}>
                                Services
                            </Link>
                            <Link href="/blog" className='text-black/60 hover:text-black/80' onClick={() => setIsMenuOpen(false)}>
                                Blog
                            </Link>
                            <Link href="/" className='text-black/60 hover:text-black/80' onClick={() => setIsMenuOpen(false)}>
                                About
                            </Link>
                            <Link href="/" className='text-black/60 hover:text-black/80' onClick={() => setIsMenuOpen(false)}>
                                Contact Us
                            </Link>
                            <Link href="/" className='py-2 px-6 bg-[#3854B5] text-white rounded-full text-center hover:bg-black' onClick={() => setIsMenuOpen(false)}>
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Nav