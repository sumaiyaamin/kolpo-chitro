import React, { useState } from 'react';
import { assets } from '../assets/assets/assets';

const Result = () => {
  
  const [image,setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState(' ')

  const onSubmitHandler = async (e)=>{

  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
        <div className='relative'>
        <img src={image} alt="" className='max-w-sm rounded' />
      <span className={`absolute bottom-0 left-0 h-1 bg-blue-600 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0 transition-all duration-[10s]'}` } />

      </div>
      <p className={!loading ? 'hidden' : ' ' }>Loading . . .</p>
      </div>
      {/* initially isImageLoaded state is false, hence user will see the default result ui */}

  {!isImageLoaded && 
    <div className='flex w-full  max-w-xl bg-neutral-300 text-neutral-600 rounded-full mt-10 text-sm p-0.5'>
        <input onChange={e=>{setInput(e.target.value)}}
         value={input}
         type="text" placeholder='Describe your vision' 
        className='flex-1 bg-transparent outline-none ml-8 max-sm:20'/>

        <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white '>Generate</button>
      </div>
      }
    {/* When state is changed, that means there is a image , then the generate another and download button will appear */}
    {isImageLoaded &&
      <div className='flex gap-2 flex-wrap justify-center text-shite text-sm p-0.5 mt-10 rounded-full'>
 {/* if user wants to generate another image, it will take the user to input field  */}
        <p onClick={()=>{setIsImageLoaded(false)}}  
        className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor pointer'>Generate Another</p>
        <a className='bg-zinc-900 px-8 py-3 text-white rounded-full cursor pointer' href={image} download >Download</a>
      </div>
}
    </form>
  );
};

export default Result;