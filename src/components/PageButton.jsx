import React from 'react'

const PageButton = ({name}) => {
  return (
    <div className='cursor-pointer'>
        <span className='text-black rounded-md p-2 hover:border-t hover:border-l border-black hover:shadow-md'>{name}</span>
    </div>
  )
}

export default PageButton