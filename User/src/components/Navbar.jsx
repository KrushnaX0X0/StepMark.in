import React, { useRef } from 'react'
import LOGO from "../assets/images/stepmarkLogo.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    const navRef = useRef(null);
    useGSAP(() => {
    gsap.to(navRef.current, {
        scrollTrigger: {
            trigger: 'body', 
            start: 'top top',
            end: '+=50', 
            scrub: 0.5,   
        },
        width: "95%",
        ease: "none",
        delay:0.1,
        duration:1
    });
});

  return (
    <div ref={navRef} className='backdrop-blur-sm  z-[999] h-17 w-[80%] px-2 border-b-[1px] border-gray-400 flex items-center justify-between  mx-auto fixed left-[50%] translate-x-[-50%] '>
        <div className='h-[100%] w-[70px] overflow-hidden'>
            <img src={LOGO} className='h-full w-full object-fill'/>
        </div>
        <div className='flex gap-10'> 
            {/* <span className='text-gray-600 hover:text-black cursor-pointer'>Home</span> */}
            <span className='text-gray-600 hover:text-black cursor-pointer'>trips</span>
            <span className='text-gray-600 hover:text-black cursor-pointer'>contact</span>
            <span className='text-gray-600 hover:text-black cursor-pointer'>About Us</span>
        </div>
        <div className='bg-orange-400 px-4 py-1 rounded-md'>Login</div>
    </div>
  )
}

export default Navbar