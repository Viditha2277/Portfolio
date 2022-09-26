import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
//import Contents from './Contents';

const Main = () => {
  return (
    <div name='main' className='w-full h-screen bg-black'>
      <div>
        <img className='w-20' src='https://lionquotes.net/wp-content/uploads/2021/09/V-Letter-Images-V-Letter-Words-For-Dp-Photo-Download.jpg'/>
      </div>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 py-8 flex flex-col justify-center h-[550px] lg:mt-16'>

        <p className='text-orange-200'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-orange-500'>
          Viditha
        </h1>

        <h2 className='text-3xl sm:text-4xl font-bold text-orange-400'>
          I'm an UnderGraduate
        </h2>

        <p className='text-white py-4 max-w-[700px]'>
          I’m a student who is currently pursuing B.Tech in Computer Science and Engineering.
        </p>
        
        <Link to="/home">
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-400 hover:border-orange-400'>
            View More
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
        </Link>

      </div>

    </div>
  )
}

export default Main;