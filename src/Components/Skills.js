import React from 'react';
import Contents from './Contents';

const Skills = () => {
  return (
    <div name='work' className='w-full lg:h-screen text-gray-300 bg-black flex justify-center items-center'>
        <Contents />

      <div className='sm:pt-8 max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        {/* Title */}
        <div className='mt-16 pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-orange-400 border-orange-400'>
            Skills
          </p>
          <p className='py-6'>// These are some of the Languages that I've learnt</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>

              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://live.staticflickr.com/8065/8220185645_dd4c773717.jpg" alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>

              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>

              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>

              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>

              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" alt="HTML icon" />
                  <p className='my-4'>GitHub</p>
              </div>

              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png" alt="HTML icon" />
                  <p className='my-4'>Node JS</p>
              </div>

              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://www.tutorialsteacher.com/Content/images/home/mongodb.svg" alt="HTML icon" />
                  <p className='my-4'>Mongo DB</p>
              </div>

              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="HTML icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
              
              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='mx-auto w-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="HTML icon" />
                  <p className='my-4'>C & C++</p>
              </div>
              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://5.imimg.com/data5/TK/YX/MK/SELLER-1943297/data-structures-training-in-gurgaon-500x500.png" alt="HTML icon" />
                  <p className='my-4'>Data Structures</p>
              </div>
              <div className='shadow-md shadow-[#917548] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-24' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1200px-Database-mysql.svg.png" alt="HTML icon" />
                  <p className='my-4'>MySQL</p>
              </div>
              

          </div>

      </div>

    </div>
  )
}

export default Skills;