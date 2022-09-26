import React from 'react'
import Contents from './Contents'
import Soclinks from './Soclinks'

const Git = () => {
  return (
    <>
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
        <Contents />
        <form method='POST' action="https://getform.io/f/a9b33b20-9007-4c50-b4c8-5814bc23cfb2" className='flex flex-col pt-5 max-w-[600px] w-full'>
            <div className='mt-12 pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-400 text-orange-500'>Feedback</p>
                <p className='text-gray-300 py-4'>// Submit the form below to provide your feedback about website experience</p>
            </div>
            <input className='bg-black text-white p-2 shadow-sm shadow-[#917548]' type="text" placeholder='Name' name='name' />
            <input className='my-4 text-white bg-black p-2 shadow-sm shadow-[#917548]' type="email" placeholder='Email' name='email' />
            <textarea className='text-white bg-black p-2 shadow-sm shadow-[#917548]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-orange-400 hover:border-orange-400 px-4 py-3 mt-8 mx-auto flex items-center'>Submit 🤞</button>
        </form>
        <Soclinks />
    </div>
    
    </>
  )
}

export default Git;