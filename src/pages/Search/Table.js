import React from 'react'


const Table = ({ data }) => {

  

  return (
    <div className='self-start flex flex-col w-full'>
        
            {
                data.map((item , index) => (
                    <ul className='pb-5 mb-5 border-b' key={index}>
                        <li><h3 className='text-xl font-medium'>{item.title}</h3></li>
                        <li><p className='text-base font-normal'>{item.paragraf}</p></li>
                    </ul>
                ))
            }
        
    </div>
  )
}

export default Table