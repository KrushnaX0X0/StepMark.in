import React from 'react'
import Navbar from '../components/Navbar'
import VIDEO from "../assets/images/bgvidd.mp4"
import IMG1 from "../assets/images/hero.png"
import IMG2 from "../assets/images/marks.jpeg"
import Pincards from '../components/Pincards'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      {/* hero section  */}
      <div className='w-screen relative h-screen bg-red-200'>
        {/* video layer */}
        <div className='h-full w-full overflow-hidden'>
          <img src={IMG1} className='h-full w-full object-fill' />
        </div>
        <div className='h-full flex flex-col  items-center justify-center w-full absolute top-0 hero-overlay'>
          <h1 className='text-7xl text-center'>"Step out.Mark memories."</h1>
          <p className='w-[70%] text-center mt-4 text-gray-600'>Beyond the destination lies the journey that defines you. We curate intentional travel experiences designed to leave an impression that lasts a lifetime.</p>
          <button className='bg-orange-400 px-6 py-1 mt-7 cursor-pointer rounded-md'>Start tour <i className="ri-arrow-right-up-line"></i></button>
        </div>
      </div>

      {/* why choose us  */}
      <div className='h-[50vh] relative w-screen relative overflow-hidden'>
        <h1 className=' text-center  text-4xl font-light'> why stepMark ? </h1>
        <div className='w-[70%] mx-auto text-center text-xl mt-6  relative '>
          <p className='font-light'>Step Mark is a Pune And Satara -based travel company dedicated to giving you the ultimate trekking and touring experience. We specialize in organizing group adventures that highlight the region’s rich history, diverse cultures, and stunning landscapes. Our mission is to foster a community of passionate travelers who appreciate the beauty and stories behind every journey. Join us as we explore India, making memories that last a lifetime!</p>
        </div>
        <div className='absolute right-0 top-0 bg-blue-100 overflow-hidden z-[-1]'>
          <img src={IMG2} className='h-full w-full object-fill' />
        </div>
      </div>

      {/* tours explorer */}
      <Pincards/>
    </div>
  )
}

export default Home