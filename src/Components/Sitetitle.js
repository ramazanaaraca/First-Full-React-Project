import React from 'react'
import Button from './Button'

const Sitetitle = ({title, custom, head }) => {
  
    const combinedClassname = `flex items-center lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0 mt-[128px] mb-[80px] ${custom}`
    const titleClassname = `lg:text-[55px] text-[40px] font-medium lg:text-start text-center leading-[40px] ${head}`
    title = title ? title : 'Site Title'

    
  return (
    <div className='max-container'>
        <div className={combinedClassname}>
            <h2 className={titleClassname}>{title}</h2>
            <Button
            title='See All Trainings' 
            />
        </div>
    </div>
  )
}

export default Sitetitle;