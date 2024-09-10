import React from 'react'
import Cards from './Cards'

const Sectionthree = ({title, data}) => {
  return (
        <div className='w-full bg-blue-100 shadow-sm flex justify-center border border-white m-4'>
    <div className='w-3/4 container p-3 m-4'>
        <h1 className='text-gray-900 font-bold text-2xl'>
            <span className=' border-b-2 border-yellow-600 '>{title.split(' ')[0]}</span> {title.split(' ').slice(1).map((i) => i+" ")}
        </h1>
        <span className='my-4 text-gray-700 text-lg flex justify-between'>
            <h3>
                {data}
            </h3>
            <button className='underline '>View All Experience</button>
        </span>
        <div className='flex items-center justify-center gap-4 p-2'>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    </div>
    
</div>
  )
}

export default Sectionthree