import React from 'react'

const Pincards = () => {
  return (
    <div className='w-screen h-screen '>
          <div className=" mt-7 flex items-center justify-center relative h-[70px]">
              <h1 className='text-center text-4xl'>Popular Tours <i className="ri-heart-3-fill text-red-500"></i></h1>
              <button className='absolute right-[10%]  text-center underline cursor-pointer text-gray-500'>explore more <i className="ri-arrow-right-up-long-line "></i></button>
          </div>
    </div>
  )
}

export default Pincards