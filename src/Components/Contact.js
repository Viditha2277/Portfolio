import React from 'react'
import Contents from './Contents';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub, BsTwitter } from 'react-icons/bs';

const Contact = () => {
  return (
    <div name='work' className='w-full h-screen text-gray-300 bg-black flex justify-center items-center'>
        <Contents />

      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full '>

        {/* Title */}
        <div className='mt-16 pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-orange-500 border-orange-400'>
            Want to get in touch with me ?
          </p>
          <p className='py-6'>// These are some of the sources where you can get in touch with me</p>
        </div>

        <div className='pb-8'>
          <h1 className='text-lg'>🔗 Connect through LinkedIn 🏹
            <a className="" href="https://www.linkedin.com/in/viditha2277/"><FaLinkedinIn size={30} className='inline hover:scale-150' /></a>
          </h1>
        </div>

        <div className='pb-8'>
          <h1 className='text-lg'>🔗 Check out more projects on 🏹
            <a className="text-orange-100" href="https://github.com/Viditha2277"><BsGithub size={30} className='inline hover:scale-150' /></a>
          </h1>
        </div>

        <div className='pb-8'>
          <h1 className='text-lg'>🔗 Follow me on 🏹
            <a className="text-orange-100" href="https://twitter.com/vidithaavuthu"><BsTwitter size={30} className='inline hover:scale-150' /></a>
          </h1>
        </div>

        <div className='pb-8'>
          <h1 className='text-lg'>🔗 Mail me at - vidithaavuthu@gmail.com</h1>
        </div>

      </div>

    </div>
  )
}

export default Contact;