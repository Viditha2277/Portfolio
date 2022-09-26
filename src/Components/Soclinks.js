import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Soclinks = () => {
  return (
    <div className='sm:hidden md:flex fixed flex-col bottom-0 right-0'>{/*border,name,height,ml-[-100px],w-[160px]*/}
        <ul className='fixed lg:bottom-10 right-16'>

          <li className='h-[60px] flex items-center text-orange-400 rounded-full border-1 shadow-sm shadow-[#917548] hover:scale-110 duration-500'>
            <a
              href='https://www.linkedin.com/in/viditha2277/'
            >
             <FaLinkedinIn size={30} />
            </a>
          </li>

          <li className='h-[60px] flex items-center text-orange-400 rounded-full border-1 shadow-sm shadow-[#917548] hover:scale-110 duration-500'>
            <a
            href='https://github.com/Viditha2277'
            >
              <BsGithub size={30} />
            </a>
          </li>

        </ul>
    </div>
  )
}

export default Soclinks;