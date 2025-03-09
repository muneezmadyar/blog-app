import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className=' min-h-screen mb-4 flex items-center w-full bg-hcolor'>
        <div className=' container flex flex-row items-center justify-center py-10'>
            <div className='w-full px-20 '>
                <h1 className='font-raleway text-5xl font-bold leading-snug text-white'>How AI will <br/> Change the Future</h1>
                <p className='text-white font-raleway text-base font-normal leading-7 mt-5'>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>

                <button className='bg-white py-4 px-10 rounded-lg font-raleway text-sm font-bold leading-5 mt-16'>Read more</button>
            </div>

            <div className='w-full'>
                <img className='w-96 m-auto' src={assets.header_image} alt="" />

            </div>

        </div>
        
    </div>
  )
}

export default Header