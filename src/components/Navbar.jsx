import React from 'react'
import PageButton from './PageButton';

const Navbar = () => {
  return (
    <div className='w-full shadow-md flex justify-center border border-white'>
        <div className='w-3/4 container  flex justify-between items-center p-3'>
        {/* Heading */}
        <div className='text-2xl font-bold '>
            <span >Travellers</span>
        </div>
        {/* Section pages */}
        <div className='flex  items-center gap-2'>
            {/* Home */}
            <PageButton name = 'Home'/>
            {/* About */}
            <PageButton name = 'About'/>
            {/* Login Circle */}
            <PageButton name = 'Login'/>
        </div>

    </div>
    </div>
  )
}

export default Navbar;