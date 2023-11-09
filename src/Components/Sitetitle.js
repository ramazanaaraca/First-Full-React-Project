import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Sitetitle = ({title, custom, head , toPage}) => {
  
    const combinedClassname = `flex items-center lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0 mt-[128px] mb-[80px] ${custom}`
    const titleClassname = `lg:text-[55px] text-[36px] font-medium lg:text-start text-center leading-[40px] ${head}`
    title = title ? title : 'Site Title'

    
  return (
    <div className='max-container'>
        <div className={combinedClassname}>
            <h2 className={titleClassname}>{title}</h2>
            <Link to={toPage}><Button>See All Trainings</Button></Link>
        </div>
    </div>
  )
}

export default Sitetitle;