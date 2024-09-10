import React from 'react'
import headpic from '../headpic1.jpg'
import { GiTicket } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";


const HeadImage = () => {
  return (
    <div className='relative w-full'>
        <img src={headpic} alt="headpic" className='w-full lg:h-96 md:h-[385px] sm:h-[285px]' />
        <div className='w-full m-4 flex justify-center '>
        <div className='w-3/4 container  absolute top-[20%]'>
            <div className='w-[35%]'>
            <h1 className='text-4xl font-bold text-white'>Leave the office behind <br/>and <span className='text-orange-400'>unwind</span></h1>
            <h4 className='text-lg font-semibold text-white'>Welcome to our cozy cabin nestled in the heart of the mountains! Our cabin is the perfect getaway for those seeking peace and relaxation in a natural setting.</h4>
            </div>
        </div>

        <div className='w-3/4 container bg-white rounded-md shadow-md absolute -bottom-6'>
            <div className='p-4 gap-2 rounded-lg flex justify-center items-center'>
                <div className='w-1/2 border rounded-lg bg-slate-400 text-gray-700 p-2 px-3 flex justify-between items-center '>
                    <div className='flex justify-start items-center gap-2'>
                    <GiTicket/>
                    <inputtext>I want to go . .</inputtext>
                    </div>
                    <FiSearch/>
                </div>
                <div className='w-1/6 border rounded-lg bg-slate-400 text-gray-700 p-2 gap-2 flex items-center '>
                    <IoCalendarOutline/>
                    <inputtext >Check in</inputtext>
                </div>
                <div className='w-1/6 border rounded-lg bg-slate-400 text-gray-700 p-2 gap-2 flex items-center '>
                    <IoCalendarOutline/>
                    <inputtext>Check Out</inputtext>
                </div>
                <div className='w-1/2 border rounded-lg bg-green-900 text-gray-100 p-2 gap-2 flex items-center '>
                    <BsPeopleFill/>
                    <inputtext>Find Journey</inputtext>
                </div>
            </div>
        </div>


        </div>
    </div>
  )
}

export default HeadImage