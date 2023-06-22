import { useRouter, useState, useEffect } from 'next/router'
import React from 'react'
import property from '../../data/property.json'
import ImageCarousel from '@/components/ImageCarousel'
import Nav from '@/components/Nav'
import { ImLocation } from "react-icons/im";
import {MdVerified, MdLeaderboard, MdRealEstateAgent} from "react-icons/md"
import { HiHome } from "react-icons/hi"
import {FaBed, FaBath, FaHouseUser, FaPhone, FaCheckDouble} from "react-icons/fa"
import {GiModernCity} from "react-icons/gi"
import Link from 'next/link'


function Property() {
    const r = useRouter()
    function currencyFormat(num) {
      return '$ ' + num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const id = property.videos[0].url.split('/')
    const len = id.length
    const videoId = id[len - 1] 

  return (
    <div>
      <Nav />
      <div className='py-16 max-w-7xl mx-auto px-5'>
        <div className='mb-8 md:flex items-center justify-between space-y-3 md:space-y-0'>
          <h2 className='text-2xl md:text-3xl font-semibold tracking-wide leading-[2.3rem] line-clamp-2 text-[#333333] md:mr-10'>{property.title}</h2>
          <p className='py-2 px-6 rounded-lg bg-green-100 uppercase text-sm flex-shrink-0 inline-block font-medium text-[#333333]'>{property.purpose}</p>
        </div>
        <div className='mb-8'>
          {property.photos.length > 0 ? (
            <ImageCarousel images={property.photos}/>
          ):(
            <img className='w-full rounded-2xl bg-gray-50 h-[450px] object-contain' src={property.photos[0]}/>
          )}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-4 mb-10'>
            <div className='space-y-3'>
              <div className='flex items-center'>
                <ImLocation className='w-5 h-5 mr-2 text-[#222430]' />
                <p className='tracking-wide text-[#666666]'>{property.location[3]?.name}, {property.location[2].name}, {property.location[1].name}</p>
               </div>
               <div className='flex items-center'>
                <MdVerified className='w-5 h-5 mr-2 text-[#222430]' />
                <p className='tracking-wide text-[#666666]'>{property.isVerified ? 'Verified' : 'Not Verified'}</p>
               </div>
               <div className='flex items-center justify-between bg-[#fafafa] px-2 md:px-4 py-4 rounded-lg'>
                  <div className='flex items-center space-x-2'>
                    <HiHome className='w-4 h-4 text-[#222430]'/>
                    <p className='text-sm tracking-wide text-[#666666]'>{property.area.toFixed(1)} sq m</p> 
                  </div>
                  <div className='flex items-center space-x-2'>
                    <FaBed className='w-4 h-4 text-[#222430]'/>
                    <p className='text-sm tracking-wide text-[#666666]'>{property.rooms} Bed</p> 
                  </div>
                  <div className='flex items-center space-x-2'>
                    <FaBath className='w-4 h-4 text-[#222430]'/>
                    <p className='text-sm tracking-wide text-[#666666]'>{property.baths} Bath</p> 
                  </div>
                </div>
            </div>
            <div className='space-y-3'>
              <div className='flex items-center'>
                <GiModernCity className='w-5 h-5 mr-2 text-[#222430]' />
                <p className='tracking-wide text-[#666666]'>{property.category[0]?.name}, {property.category[1]?.name}</p>
               </div>
               <div className='flex items-center'>
                <MdLeaderboard className='w-5 h-5 mr-2 text-[#222430]' />
                <p className='tracking-wide text-[#666666]'>{property.score} City Score</p>
               </div>
               <p className='text-[#333333] font-bold md:text-3xl text-2xl'>{currencyFormat(property.price)}</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8'>

            <div className='md:col-span-2 space-y-5'>
              <h2 className='text-2xl md:text-3xl font-semibold text-[#333333] tracking-wide mb-5'>Property Details</h2>
              <p className='text-[#666666] tracking-wide leading-7'>{property.description}</p>
              <div>
                {property.videos[0].url && (
                  <div className='w-full h-64 md:h-96 rounded-2xl bg-gray-50 relative'>
                    <iframe
                      className=" min-w-full min-h-full w-auto h-auto bg-cover rounded-2xl"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      id="mainVideo"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>

            <div className='space-y-5'>
              <div className='w-full h-48 p-7 bg-gray-50 rounded-2xl '>
                <img src={property.agency.logo.url} className='w-full h-full object-contain'/>
              </div>
              <div className='space-y-3'>
                <div className='flex'>
                  <span className='mr-2'>
                    <MdRealEstateAgent className='w-5 h-5 text-[#222430]' />
                  </span>
                  <p className='tracking-wide text-[#666666]'>{property.agency.name}</p>
                </div>
                <div className='flex'>
                  <span className='mr-2'>
                    <FaHouseUser className='w-5 h-5 text-[#222430]' />
                  </span>
                  <p className='tracking-wide text-[#666666]'>{property.contactName}</p>
                </div>
                <div className='flex'>
                  <span className='mr-2'>
                    <FaPhone className='w-5 h-5 text-[#222430]' />
                  </span>
                  <p className='tracking-wide text-[#666666]'>{property.phoneNumber.phone}</p>
                </div>
                <div className='flex my-8'>
                  <Link href="/contact" className='w-full text-center text-white py-3 px-8 bg-[#3854B5] rounded-full font-semibold hover:bg-[#333333]'>Book Showing</Link>
                </div>
              </div>
            </div>

         </div>
      </div>
    </div>
  )
}



export default Property