import React from 'react'
import Arrow from '../assets/img/arrow_icon.svg';
import { Link } from 'react-router-dom';

const Button2 = ({title , icon , toPage}) => {
    
   title = title ? title : 'More Details';
   icon = icon ? icon : Arrow;
  

  return (
    <Link to={toPage} className='flex items-center gap-3  text-black font-medium text-base rounded-full duration-300  group'>
        {icon && <div className='bg-[#E43D30] p-2 rounded-full flexCenter duration-300 group-hover:bg-[#e43c30d2]'><img className='w-[15px] h-[15px]'  src={icon} alt="icon"   /></div>}
        {title}
    </Link>
  )
}

export default Button2;