import React from 'react'
import Contents from './Contents';

const Experience = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-black'>
        <Contents />

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        {/* Title */}
        <div className='pb-8'>
          <p className='text-6xl font-bold inline border-b-4 text-orange-500 border-orange-400'>
            Experience
          </p>
          <p className='py-6 text-white'>I don't have any experience right now</p>
        </div>

      </div>

    </div>
  )
}

export default Experience;