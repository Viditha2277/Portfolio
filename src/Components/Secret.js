import React, {  useState } from 'react';
import Contents from './Contents';

const Secret = () => {

    const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);

  return (
    <div name='work' className='w-full h-screen text-gray-300 bg-black flex justify-center items-center'>
        <Contents />

      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        {/* Title */}
        <div className='pb-8'>
          <p className='text-6xl font-bold inline text-orange-400 '>
            Do you want to know my SECRET!!!
          </p>

          <p className={nav ?'py-6 text-3xl': 'hidden'}>
            It's a secret na......... how can I tell you. Just go to next page 😛😛😛😛
          </p>

        <div  onClick={handleClick}>
          {nav ? 
          <div></div> :
          <button className='text-white border-2 hover:bg-orange-400 hover:border-orange-400 px-4 py-3 my-8 mx-auto'>
            Click me 👽
          </button>
          
          }
        </div>

        </div>

      </div>

    </div>
  )
}

export default Secret;

/*



*/