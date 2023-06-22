import React from 'react'
import StepDetail from './StepDetail'

function Steps() {
  return (
    <div className='max-w-7xl py-16 px-5 mx-auto'>
        <div className='space-y-10'>
            <h2 className='text-4xl font-semibold text-[#333333] tracking-wide max-w-md'>Easy Step to Buy Property on Dhalem Real Estate</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <StepDetail 
                    count="1" 
                    title="View Lisitng" 
                    description="Explore stunning homes with breathtaking views or charming cottages with character."
                />
                <StepDetail 
                    count="2" 
                    title="Contact Us"
                    description="Reach out to experienced agents or agencies to gather information and express your interest in the properties."
                />
                <StepDetail 
                    count="3"
                    title="Request a Visit"
                    description="Schedule a convenient time to assess the properties and determine suitability."
                />
                <StepDetail
                    count="4"
                    title="Buy the House"
                    description="Negotiate and finalize the purchase with the agent, completing necessary paperwork and securing financing." 
                />
            </div>
        </div>
    </div>
  )
}

export default Steps