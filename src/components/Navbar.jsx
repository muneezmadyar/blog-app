// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'      
    }else{
      document.body.style.overflow = 'auto' 
    }
    return ()=>{
      document.body.style.overflow = 'auto' 
    };

  },[showMobileMenu])



  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className=' mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-20 bg-white'>
        <a href="/">
        <img className='w-full h-7' src={assets.logo} alt="Logo" />
        </a>
    
      <div className='flex justify-center items-center'>
        <ul className='hidden md:flex gap-7 text-black'>
          <li><a href="/Blog" className="cursor-pointer hover:text-hcolor">Blog</a></li>
          <li><a href="#About" className="cursor-pointer hover:text-hcolor">About</a></li>
          <li><a href="#" className='w-12'><img className='cursor-pointer w-6 h-6' src={assets.search_icon} alt="" /></a></li>
        </ul>
        <Link to={'/contact'}>
        <button className="hidden md:block bg-hcolor px-8 py-2 ml-3 rounded-lg text-white cursor-pointer">Contact Us</button>
        </Link>
        <Link to={'/sign'}>
        <button className="hidden md:block bg-hcolor px-8 py-2 ml-3 rounded-lg text-white cursor-pointer">Signup</button>
        </Link>
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 filter invert cursor-pointer' alt="" />
        </div>
      </div>
      {/* --------mobile-menu----------- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <li>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py2 rounded-full inline-block'>Blog</a>
          </li>
         <li>
         <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py2 rounded-full inline-block'>About</a>
         </li>
          <li>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py2 rounded-full inline-block'><img className='cursor-pointer w-6 h-6' src={assets.search_icon} alt="" /></a>
          </li>
          
          <li>
          <Link to="/contact" >
  <button className="bg-hcolor px-8 py-2 ml-3 rounded-lg text-white cursor-pointer">
    Contact Us
  </button>
</Link>

</li>

         

          </ul>
       


       
      </div>

    </div>
  );
};

export default Navbar;
