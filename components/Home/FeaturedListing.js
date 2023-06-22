import React from 'react'
import properties from "../../data/properties.json"
import { ImLocation } from "react-icons/im";

function FeaturedListing() {

  function currencyFormat(num) {
    return '$ ' + num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
    console.log(properties)
    const data = properties.hits
    console.log(data)
    const d = properties.hits[0].id
    console.log(d)

  return (
    <div className='my-16 space-y-12 md:space-y-16'>
       <h2 className='text-4xl font-semibold text-[#333333] tracking-wide'>Featured Listing</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10'>
        {data.slice(0,4).map((property) => (
            <div key={property.id} className='space-y-3'>
               <div className='relative'>
                <p className='absolute top-3 left-3 bg-[#222430] text-white px-4 py-3 rounded-full'>{currencyFormat(property.price)}</p>
                <img src={property.coverPhoto.url} alt={property.title} className='w-full h-96 md:h-full aspect-square object-cover rounded-2xl'/>
               </div>
               <h3 className='text-2xl font-semibold tracking-wide leading-[2.3rem] line-clamp-2 text-[#333333]'>{property.title}</h3>
               <div className='flex items-center space-x-2'>
                <ImLocation className='w-5 h-5 text-[#222430]' />
                <p className='tracking-wide text-[#666666]'>{property.location[2].name}, {property.location[1].name}</p>
               </div>
            </div>
        ))}

       </div>
    </div>
  )
}

export default FeaturedListing