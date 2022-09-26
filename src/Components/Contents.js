import React, {  useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TbFileCertificate } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';
import { MdCastForEducation } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { MdConnectWithoutContact } from 'react-icons/md';
import { MdOutlineLocalActivity } from 'react-icons/md';
import { MdSettingsSuggest } from 'react-icons/md'
import { GiSecretBook } from 'react-icons/gi'
//import { SiExpertsexchange } from 'react-icons/si';
import { Link } from "react-router-dom";

const Contents = () => {

   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);

  return (
    <>
     <div className="fixed top-0 w-full h-[80px] flex justify-between items-center px-4 bg-black lg:hidden">

      <div>
        <img className='w-20 lg:hidden' src='https://lionquotes.net/wp-content/uploads/2021/09/V-Letter-Images-V-Letter-Words-For-Dp-Photo-Download.jpg'/>
      </div>
      
      {/* Hamburger, Small Screen */}
      <div onClick={handleClick} className='lg:hidden z-10 text-orange-400'>
          {nav ? <FaTimes /> : <FaBars />}
      </div>
      
      {/* Mobile Menu */}
      <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center space-y-4' : 'hidden'}>
          <li className='text-2xl text-orange-400'>
            <Link onClick={handleClick} to="/home">
              Home
            </Link>
          </li>
          <li className='text-2xl text-orange-400'>
            <Link onClick={handleClick} to="/education">
              Education
            </Link>
          </li>
          <li className='text-2xl text-orange-400'>
            <Link onClick={handleClick} to="/projects">
              Projects
            </Link>
          </li>
          <li className='text-2xl text-orange-400'>
            <Link onClick={handleClick} to="/certifications">
              Certifications
            </Link>
          </li>
          <li className='text-2xl text-orange-400'>
            <Link onClick={handleClick} to="/skills">
              Skills
            </Link>
          </li>
          <li className='text-2xl text-orange-400'>
            <Link onClick={handleClick} to="/eca">
              Extra Curricular Activities
            </Link>
          </li>
          <li className='text-2xl text-orange-400'>
            <Link onClick={handleClick} to="/contact">
              Contact me
            </Link>
          </li>
          {/*<li className='text-4xl'>
            <Link onClick={handleClick} to="/experience">
              Experience
            </Link>
          </li>*/}
          <li className='text-2xl text-orange-400'>
            <Link onClick={handleClick} to="/secret">
              Secret
            </Link>
          </li>
          <li className='text-2xl text-orange-400'>
            <Link onClick={handleClick} to="/git">
              Suggestions
            </Link>
          </li>
      </ul>
    </div>

    {/* Large Screen */}
     <div className='hidden lg:flex fixed flex-col left-0'>{/*border,name,height,ml-[-100px],w-[160px],h-[68px]*/}
        
        <ul className='flex flex-col space-y-4'>

          <li className='w-[160px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/home'
            >
              Home <FaHome size={30} />
            </a>
          </li>

          <li className='w-[160px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/education'
            >
              Education <MdCastForEducation size={30} />
            </a>
          </li>

          <li className='w-[160px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/projects'
            >
              Projects <BsCodeSlash size={30} />
            </a>
          </li>

          <li className='w-[180px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/certifications'
            >
              Certifications <TbFileCertificate size={30} />
            </a>
          </li>

          <li className='w-[180px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/skills'
            >
              Skills <GiSkills size={30} />
            </a>
          </li>

          <li className='w-[180px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/eca'
            >
              ECA <MdOutlineLocalActivity size={30} />
            </a>
          </li>

          <li className='w-[180px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/contact'
            >
              Contact <MdConnectWithoutContact size={30} />
            </a>
          </li>

          {/*<li className='w-[180px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/experience'
            >
              Experience <SiExpertsexchange size={30} />
            </a>
          </li>*/}

          <li className='w-[180px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/secret'
            >
              Secret <GiSecretBook size={30} />
            </a>
          </li>

          <li className='w-[180px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-orange-400'
              href='/git'
            >
              Suggestions <MdSettingsSuggest size={30} />
            </a>
          </li>


        </ul>

      </div>
    </>
    
  )
}

export default Contents;