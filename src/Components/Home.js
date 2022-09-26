import React from 'react';
import Contents from './Contents';

const Home = () => {
  return (
    <div name='main' className='w-full h-screen bg-black flex justify-center items-center'>
        <Contents />

        <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-5xl font-bold inline border-b-4 border-orange-400 text-orange-500'>
              About
            </p>
          </div>
          <div></div>

        </div>

          <div className='max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4 text-white'>

            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Viditha, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm currently a final-year computer science major at Vignan's Lara Institute of Technology & Science who is interested in Web development and seeking exciting opportunities related to it. I am passionate about building excellent software that improves
              the lives of those around me.</p>  
            </div>
            
          </div>

        </div>

    </div>
  )
}

export default Home;