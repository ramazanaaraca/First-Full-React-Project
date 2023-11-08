import React from 'react'

const NewsP = ({id , title , paragraf , paragraf2 , mainTitle}) => {
  
    

  return (
    <div className='mb-[70px]' >
        <div className={`font-medium mb-2 ${id === 0 ? 'text-[32px]' : 'text-[22px]'}`}>{mainTitle ? mainTitle : title}</div>
        <p className='font-light text-base text-black mb-4'>{paragraf}</p>
        <p className='font-light text-base text-black'>{paragraf2}</p>
    </div>  
  )
}

export default NewsP