import React from 'react'
import { ImLocation } from "react-icons/im";
import { HiHome } from "react-icons/hi"
import {FaBed, FaBath} from "react-icons/fa"

function PropertyList({property}) {
  return (
    <div className='space-y-3'>
        <div className='relative'>
            <p className='absolute top-3 left-3 bg-[#222430] text-white px-4 py-3 rounded-full'>$ {property.price}</p>
            <img src={property.coverPhoto.url} alt={property.title} className='w-full h-96 md:h-full aspect-square object-cover rounded-2xl'/>
        </div>
        <h3 className='text-2xl font-semibold tracking-wide leading-[2.3rem] line-clamp-2 text-[#333333]'>{property.title}</h3>
        <div className='flex items-center space-x-2'>
            <ImLocation className='w-5 h-5 text-[#222430]' />
            <p className='tracking-wide text-[#666666]'>{property.location[2].name}, {property.location[1].name}</p>
        </div>
        <div className='flex items-center justify-between bg-[#fafafa] px-2 py-4 rounded-lg'>
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
  )
}

export default PropertyList