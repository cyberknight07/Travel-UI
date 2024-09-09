import React from 'react'
import cabin1 from '../cabin1.jpg'
import { FaRupeeSign } from 'react-icons/fa'
import { BiStar } from 'react-icons/bi'

const Cards = () => {
  return (
    <div className='w-2/5 bg-black rounded-lg shadow-sm hover:shadow-md'>
        <div className='rounded-lg'>
            <img src={cabin1} className=' shadow-md' />
            <div className='p-3 text-gray-300 '>
                <h4 className='text-[12px]'>Goa - India</h4>
                <span className='flex items-center justify-between mb-2'>
                <h4 className='text-[14px] font-bold'>Rustic Country Retreat</h4>
                <h4 className='text-[14px] font-bold flex items-center '><FaRupeeSign/> 2000<sup>PP</sup></h4>
                </span>
                <h4 className='text-[12px] mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, expedita perferendis minus neque aut eum, sed voluptates modi beatae eaque odio temporibus culpa perspiciatis assumenda commodi quidem reiciendis facere laborum!</h4>
                <div className='flex items-center gap-2 text-[12px]'>
                  <icons className='flex items-center'>
                    <BiStar/>
                    <BiStar/>
                    <BiStar/>
                    <BiStar/>
                    <BiStar/>
                  </icons>
                  <reviews>82 reviews</reviews>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards