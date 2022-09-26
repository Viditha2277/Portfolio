import React from 'react';
import Contents from './Contents';

const Education = () => {
  return (
    <div name='main' className='w-full h-screen bg-black flex justify-center items-center'>
        <Contents />

      

    <div className='flex flex-col justify-center items-center w-full h-full'>

        {/* Under Graduate */}
        <div className='mt-16 max-w-[900px] w-full md:grid grid-cols-2 gap-8 px-4'>

          <a href='https://www.vignanlara.org/'>
            <div className='sm:text-left p-4 shadow-md shadow-[#917548] hover:scale-110 duration-500'>
            <p className='text-4xl font-bold inline border-b-2  border-orange-400 text-orange-600'>
              UnderGraduate
            </p>
            <br></br>
            <p className='text-xl pt-8 inline text-white'>
              Vignan’s Lara Institute of Technology & Science (2019-2023)
            </p>
            <br></br>
            <p className='text-xl pt-8 inline text-white'>
              *Computer Science and Engineering
            </p>
            <br></br>
            <p className='text-xl pt-8 inline text-white'>
              *CGPA - 7.5
            </p>
          </div>
          </a>
          <div></div>

        </div>

        <br></br>

        <div className='max-w-[900px] w-full md:grid grid-cols-2 gap-8 px-4'>
          
          <div></div>
          <a href="http://www.svedu.in/">
            <div className='sm:text-right p-4 shadow-md shadow-[#917548] hover:scale-110 duration-500'>
            <p className='text-4xl font-bold inline border-b-2 border-orange-400 text-orange-500'>
              Intermediate
            </p>
            <br></br>
            <p className='text-xl pt-8 inline text-white'>
              Sri Venkateshwara Junior College
            </p>
            <br></br>
            <p className='text-xl pt-8 inline text-white'>
              *CGPA - 9.73
            </p>
          </div>
          </a>
            
        </div>

        <br></br>

        <div className='max-w-[900px] w-full md:grid grid-cols-2 gap-8 px-4'>

          <a href='http://kkrgowtham.com/'>
          <div className='sm:text-left p-4 shadow-md shadow-[#917548] hover:scale-110 duration-500'>
            <p className='text-4xl font-bold inline border-b-2 border-orange-400 text-orange-500'>
              High School
            </p>
            <br></br>
            <p className='text-xl pt-8 inline text-white'>
              Dr K K R Gowtham School
            </p>
            <br></br>
            <p className='text-xl pt-8 inline text-white'>
              *CGPA - 10.0
            </p>
          </div>
          </a>
          <div></div>

        </div>

    </div>

    </div>
  )
}

export default Education;