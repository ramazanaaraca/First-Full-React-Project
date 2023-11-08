import React from 'react'


const OurCard = ({img , title ,description}) => {
  return (
   <div className='flex items-center justify-center flex-col g-[13px] bg-[#F7F7F7] px-[30px] py-8 rounded-[20px] md:w-[376px] max-md:w-full'>
        <img src={img} alt="" />
        <h3 className='text-[32px] font-medium text-black'>{title}</h3>
        <p className='text-base font-light text-black  text-center'>{description}</p>
   </div>
  )
}

export default OurCard