import React from 'react'

function StepDetail({ count,title,description }) {
  return (
    <div className='space-y-3'>
        <div className='w-16 h-16 bg-black rounded-full flex justify-center items-center'>
            <p className='text-white text-2xl font-medium'>{count}.</p>
        </div>
        <h3 className='text-2xl font-semibold tracking-wide leading-[2.3rem] line-clamp-2 text-[#333333]'>{title}</h3>
        <p className='text-[#666666] tracking-wide leading-7'>{description}</p>
    </div>
  )
}

export default StepDetail