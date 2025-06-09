import React from 'react'
import { assets } from '../assets/assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 bg-white text-center inline-flex gap-2 border rounded-full px-6 py-2 border-neutral-400'>
        <p >Best Text to Image Genarator</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-500'>image</span>, in seconds</h1>

      <p className='text-center max-w-xl mx-auto mt-5 text-gray-500'>Just type, and watch the magic happen</p>
    
      <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>
        Generate Image
      <img className='h-5' src={assets.star_group} alt="" />
      </button>

      <div className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item, index)=>(
          <img className='rounded hover:scale-150 transition-all duration-300 cursor-pointer max-sm:w-10'
          src={index %2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
          alt="" key={index} width={70}/>

        ))}
      </div>

      <p className='mt-2 text-neutral-400'>Generated Images from Kolpo-Chitro</p>
    </div>
  )
}

export default Header
