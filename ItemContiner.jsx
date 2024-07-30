import React from 'react'
import Item from '../components/Item'
import planeImage from '../assets/images/plane.png'
import {myDreem ,Company , Explore, Terms ,Help  } from './Menus'


export default function ItemContiner() {
  return (
    <div className=' container flex text-left item-center   '> 
        <div className='w-[225px] h-[70px] flex gap-[4px] ml-[100px] '>
          <img  className='w-[24px] h-[24px]' src={planeImage} />
          <Item links={myDreem} title="my Dream place " />
        </div>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-[50px]  ml-[90px]  '>   
        <Item className="pl-[90px]" links={Company} title="Company" />
        <Item links={Explore} title="Explore"  />
        <Item links={Terms} title="Terms and Policiy" />
        <Item links={Help} title="Help"  />
        </div>
      
    </div>
  )
}
