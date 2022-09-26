import React from 'react'
import Contents from './Contents';

const Eca = () => {
  return (
    <div name='work' className='w-full lg:h-screen text-gray-300 bg-black flex justify-center items-center'>
        <Contents />

      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full '>

        {/* Title */}
        <div className='mt-16 pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-orange-500 border-orange-400'>
            Extra Curricular Activities
          </p>
          <p className='py-6'>// These are some of the things that I do during my free time</p>
        </div>

        <div className='pb-8'>
          <h1 className='text-2xl text-orange-400'>👉 Watching Dramas</h1>
          <p className=''>K-drama is short for “Korean drama” which pertains to television series created in South Korea. These series have become popular not only in Korea but globally, making them more accessible for K-drama fans through streaming websites like Netflix.</p>
          <a className="text-orange-100" href="https://www.viki.com/tv/37790c-voice-4">My Fav Drama</a>
        </div>

        <div className='pb-8'>
          <h1 className='text-2xl text-orange-400'>👉 Listening to Music</h1>
          <p className=''>Music can improve mood, decrease pain and anxiety, and facilitate opportunities for emotional expression. Research suggests that music can benefit our physical and mental health in numerous ways.</p>
          <a className="text-orange-100" href="https://www.youtube.com/watch?v=2pOVz45p8Ho">My Fav Song</a>
        </div>

        <div className='pb-8'>
          <h1 className='text-2xl text-orange-400'>👉 Playing Badminton</h1>
          <p className=''>Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side).</p>
          <a className="text-orange-100" href="https://en.wikipedia.org/wiki/P._V._Sindhu">My Fav Player</a>
        </div>

      </div>

    </div>
  )
}

export default Eca;

/*

       {/* Activitie - 1 

        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          <div className='sm:text-left p-4'>
            <p className='text-2xl font-bold inline text-orange-400'>
              Watching Dramas
            </p>
            <br></br>
            <p className='text-lg pt-8 inline text-white'>
              Some matter about about dramas
            </p>
          </div>
          <div
            style={{ backgroundImage: `url("https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home-1024x512.jpg")`}}
            className=' shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-80'
          >
            {/* Hover Effects 
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>

<br></br>
<br></br>

        {/* Activitie - 2 

        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          <div
            style={{ backgroundImage: `url("https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home-1024x512.jpg")`}}
            className=' shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-80'
          >
            {/* Hover Effects 
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>

          </div>

          
          <div className='sm:text-left p-4'>
            <p className='text-2xl font-bold inline text-orange-400'>
              Undergraduate
            </p>
            <br></br>
            
            <p className='text-lg pt-8 inline text-white'>
              Computer Science and Engineering
            </p>
            
          </div>

        </div>

*/