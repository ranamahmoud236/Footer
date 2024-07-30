import React from 'react'


export default function Item({links , title }) {
  return (
   <ul >
    <h1 className='mb-1 roboto-medium  hover:underline hover:decoration-blue-500 '>{title }</h1>
    {
        links.map((link)=> (
            <li  key ={links.name }> 
                <a className='text-[#4F4F4F] roboto-regular text-[14px] hover:underline hover:decoration-blue-500 ' href={links.link}>{link.name}</a>
            </li>
        ))
    }

   </ul>
  )
}
