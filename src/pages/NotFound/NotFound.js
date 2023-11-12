import React from 'react'
import Wrapper from '../../Components/Wrapper'
import Button from '../../Components/Button'
import img404 from '../../assets/img/404_img.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Wrapper
    Child='grid lg:grid-cols-2 items-center my-[148px] max-lg:justify-center max-lg:gap-10 '
    >
        <div className='col-span-1 '>
            <span className='block text-6xl font-medium  mb-[30px] '>Oops...</span>
            <h2 className='text-3xl font-normal mb-[38px] '>
                Page not found
            </h2>
            <p className=' text-lg font-light mb-[38px]'>
            This page doesn’t exist or was removed! we suggest you back to home.
            </p>
            <Link to='/'><Button>Back to home</Button></Link>
        </div>
        <div className=''>
            <img src={img404} alt="404" />
        </div>
    </Wrapper>
  )
}

export default NotFound