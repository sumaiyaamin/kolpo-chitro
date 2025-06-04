


import { Link, useNavigate } from 'react-router-dom';
import favicon from '/favicon.svg'
import {assets} from '../assets/assets/assets'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

  const { user} = useContext(AppContext);
  
  const navigate = useNavigate()
  
  return (
    <div className='flex items-center justify-between py-4'>
  <Link to="/" className="flex items-center space-x-2">
    <img src={favicon} alt="Kolpo Chitro Logo" className="w-10 sm:w-12 lg:w-12" />
    <h2 className="text-xl font-bold text-gray-800">Kolpo Chitro</h2>
  </Link>

<div>
   {/* if user is logged in first div will show if not second div */}
  {user ? 
  <div className='flex items-center gap-3 sm:gap-4'>
    <button onClick={()=>navigate('/buy')}className='flex items-center gap-2 px-5 py-2 bg-blue-100 border  rounded-full hover:scale-105 transition-all duration-700'>
      <img className='w-5' src={assets.credit_star} alt="" />
      <p className='text-sm sm:text-sm font-medium text-gray-600'>Credits Left :50</p>
    </button>
    <p className='text-gray-600 max-sm:hidden pl-4'>Hi, Sumaiya</p>
    <div className='relative group'>
      <img src={assets.profile_icon} alt="" className='w-10 drop-shadow'/>
      <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded py-12">
        <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
          <li  className='text-center cursor-pointer pr-10 py-1 px-2'>
            Logout
          </li>
        </ul>
      </div>
    </div>
  </div> :
  
  
  <div className='flex items-center gap-2 sm:gap-4 lg:gap-8'>
    <p onClick={()=> navigate('/buy')} className='cursor-pointer'>Pricing</p>
<button onClick={()=>navigate('/result')}className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>

</div>} 


</div>


</div>


    
  );
};

export default Navbar;