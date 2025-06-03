import React, { useState } from 'react';


import { Link, useNavigate } from 'react-router-dom';
import favicon from '/favicon.svg'
import {assets} from '../assets/assets/assets'

const Navbar = () => {

  const [user, setUser] = useState(true)   //for now logged out, when true user logged in
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
  <div>
    <button className='flex items-center gap-2 px-5 py-2 bg-amber-100 border  rounded-full'>
      <img className='w-5' src={assets.credit_star} alt="" />
      <p>Credits Left :50</p>
    </button>
    <p>Hi, Sumaiya</p>
    <div className='relative group'>
      <img src={assets.user} alt="" className='w-10 drop-shadow'/>
      <div className="absolute hidden group-hover:block"></div>
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