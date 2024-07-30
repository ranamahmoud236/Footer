import React from 'react'
import ItemContiner from './ItemContiner'

export default function Footer() {
  return (
   <footer className="absolute w-full  ">
        <div className='w-[820px] h-[70px] mt-[2480px] mx-[310px] gap-[16px] '>
     
            <h1 className=' roboto-bold  items-center  leading-[39.2px]   text-[28px] w-[820px] h-[32px] cursor-default   '> Explore the world with My Dream place </h1>
            <a className='roboto-regular items-center leading-[22.4px] text-[16px] text-[#2F80ED] w-[820px] h-[22px] cursor-default  ' href='#'>Discover new places and experiences </a>

        </div>
        <div className='mt-[80px] cursor-default '> 
            <ItemContiner />

        </div>
        <div className='container   bg-[#EBEBEB]  w-[1440px] h-[40px] '>
          
            <p className='roboto-regular text-[#4F4F4F] py-[10px] ml-[1083px] mt-[60px] '> ©  my Dream Place 2022</p>
          
        </div>
      


   </footer>
  )
}
