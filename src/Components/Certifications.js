import React from 'react';
import Contents from './Contents';

const Certifications = () => {
  return (
    <div name='certifications' className='w-full lg:h-screen text-gray-300 bg-black flex justify-center items-center'>
        <Contents />

      <div className='max-w-[900px] mx-auto p-4 pt-20 flex flex-col justify-center w-full h-full'>

        {/* Title */}
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-orange-500 border-orange-400'>
            Certifications
          </p>
          <p className='py-6'>// These are some of the Courses that I've done</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url("https://cdn.slidesharecdn.com/ss_thumbnails/fullstackppt-171127063649-thumbnail-4.jpg?cb=1642765601")`}}
            className=' shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div lg:hover:scale-110 duration-100'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Full Stack Web Development
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.devtown.in/product/full-stack-training-and-internship'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Source
                  </button>
                </a>
                {/*<a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Code
                  </button>
                </a>*/}
              </div>
            </div>

            {/* Info */}
            

          </div>


          <div
            style={{ backgroundImage: `url("https://tts.net.in/wp-content/uploads/2022/03/Python-01-2.png")` }}
            className=' shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div lg:hover:scale-110 duration-200'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Programming in Python
              </span>
              <div className='pt-8 text-center'>
                <a href='https://apssdc.in/home/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Source
                  </button>
                </a>
                
              </div>
            </div>
          </div>


        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url("https://dme2wmiz2suov.cloudfront.net/User(12509894)/CourseBundles(4341)/651640-1._C_LANGUAGE.jpg")` }}
            className=' shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div lg:hover:scale-110 duration-200'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Problem Solving in C
              </span>
              <div className='pt-8 text-center'>
                <a href='https://onlinecourses.nptel.ac.in/noc22_cs45/preview'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Source
                  </button>
                </a>
                
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url("https://noviseuforia.com/en/wp-content/uploads/sites/4/hackingEtico-1024x580.jpg")` }}
            className=' shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div lg:hover:scale-110 duration-200'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Ethical Hacking
              </span>
              <div className='pt-8 text-center'>
                <a href='https://trainings.internshala.com/hacking-course/?utm_source=Google-PM&utm_campaign=CT-PM-Ethical-Hacking-June22&utm_adgroup=Adgroup-1&utm_locationinterest=9300921&utm_placement=&utm_creative=&gclid=Cj0KCQjw5ZSWBhCVARIsALERCvwPSSldE-7h0p8sfOtTFXbwgrem9Ft00dynAhd6TRdWnYXl6hjr5PMaAsuAEALw_wcB'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Source
                  </button>
                </a>
                
              </div>
            </div>
          </div>


        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url("https://images.techopedia.com/images/uploads/computer-electronics-laptop-pc-furniture-tabletop.jpg")` }}
            className=' shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div lg:hover:scale-110 duration-200'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Online Privacy
              </span>
              <div className='pt-8 text-center'>
                <a href='https://onlinecourses.nptel.ac.in/noc22_cs37/preview'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Source
                  </button>
                </a>
                
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url("https://techhubgadgets.com/wp-content/uploads/2020/07/Retrieving-data-wait-a-few-seconds-MS-Excel-error.jpg")` }}
            className=' shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div lg:hover:scale-110 duration-200'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                MS Excel
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.simplilearn.com/tutorials/excel-tutorial?tag=ms%20excel'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Source
                  </button>
                </a>
                
              </div>
            </div>
          </div>


        </div>
        
      </div>

    </div>
  )
}

export default Certifications;