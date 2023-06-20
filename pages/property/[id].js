import { useRouter } from 'next/router'
import React from 'react'
import property from '../../data/property.json'
import ImageCarousel from '@/components/ImageCarousel'

function Property() {
    const r = useRouter()
  return (
    <div className='py-16 max-w-7xl mx-auto'>
        <p className='font-bold'>
            Hello
        </p>
        <ImageCarousel images={property.photos} />
    </div>
  )
}



export default Property