import React from 'react'
import Contents from './Contents';

const Projects = () => {
  return (
    <div name='work' className='w-full lg:h-screen text-gray-300 bg-black flex justify-center items-center'>
        <Contents />

      <div className='max-w-[900px] mx-auto p-4 pt-20 flex flex-col justify-center w-full h-full'>

        {/* Title */}
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-orange-500 border-orange-400'>
            Projects
          </p>
          <p className='py-6'>// These are some of the Projects that I've done</p>
        </div>

        {/*  Cards Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url("https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home-1024x512.jpg")`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Portfolio
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


          <div
            style={{ backgroundImage: `url("https://inc42.com/wp-content/uploads/2020/12/Zomato_Feature_Social_1360x1020.jpg")` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Zomato Clone
              </span>
              <div className='pt-8 text-center'>
                <a href='https://zomato-d6e5f.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Viditha2277/ZomatoClient'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url("https://www.glamsham.com/wp-content/uploads/2021/02/BookMyShow-Stream.jpg")` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Book My Show Clone
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/Viditha2277/BookMyShow'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://bmspro-bf30d.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url("https://www.edigitallibrary.com/img/libraryBooks.jpg")` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Book Managment System
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Viditha2277/BookManagement'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url("https://blog.exhibitday.com/wp-content/uploads/task-management.jpg")` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tasky
              </span>
              <div className='pt-8 text-center'>
                <a href='https://viditha2277.github.io/Tasky/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Viditha2277/Tasky'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-orange-400 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url("https://media.istockphoto.com/photos/asia-map-closeup-on-digital-display-picture-id1334455983?b=1&k=20&m=1334455983&s=170667a&w=0&h=WJFOJZdjxmAGcnxe_uDcJ2P-yAPiCCzle3xbYTj0YNQ=")` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weather Forecasting
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

      </div>
    </div>
  )
}

export default Projects;