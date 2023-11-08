import React from 'react'
import AboutAviza from '../assets/img/abaout_aviza.png';
import NewAviza from '../assets/img/aviza_new.png';
import Button2 from './Button2';
import Teaches from '../assets/img/teaches.svg';
import Wrapper from './Wrapper';
import Button from './Button';


const About = ({otherPage = 'button2' , changeButton = true , order}) => {
    
    

  return (
    <Wrapper
    Child='grid lg:grid-cols-2 lg:gap-[80px] gap-10 max-lg:place-items-center items-center'
    Parent='mt-[148px]'
    >
        <div className={`col-span-1 ${order}`}>
            <div className='relative'>
                <img 
                src={changeButton ? AboutAviza : NewAviza} 
                alt="about"
                width='100%'/>
                {
                otherPage === 'button2'
                &&
                <div className='lg:flex hidden items-center gap-3 bg-white text-black font-medium text-base rounded-full duration-300 ps-3 pe-8 py-3 absolute bottom-[20%] left-[-10%] shadow-sm max-lg:left-[1%]'>
                    <div className='bg-black p-2 rounded-full flexCenter duration-300 '><img className='w-[20px] h-[20px]'  src={Teaches} alt='teaches'   /></div>
                    <span>Qualited Teachers</span> 
                </div>
                }
            </div>
        </div>
        <div className='col-span-1 '>
            <div className='gap-5 flex flex-col items-start justify-end h-full'>
                <h2 className=' text-[40px] lg:text-[55px] leading-[50px] lg:leading-[63px] font-medium text-black max-w-[300px] '>About Aviza Academy</h2>
                <p className={`text-base font-normal text-black  ${otherPage ? 'mb-5' : 'mb-1'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                {otherPage === 'button2' && <Button2 toPage='/About' />}
                {otherPage === 'paragraf' && (
                <p className='text-base font-normal text-black mb-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                )}
                {otherPage === 'button' && <Button title='Read More' />}
            </div>
        </div>
            
    </Wrapper>
  )
}

export default About;