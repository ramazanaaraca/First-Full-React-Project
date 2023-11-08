import React from 'react'
import { OUR_CARD } from '../data'
import OurCard from './OurCard'
import Trust from '../../src/assets/img/chek_icon.svg'
import Wrapper from './Wrapper'

const OurValues = ({forTitle , cards = OUR_CARD}) => {

 const cardsData = cards;

  return (
    <Wrapper
    Parent='mt-[72px]'
    >
     {!forTitle &&   
        <div className='flexCenter flex-col pb-[72px] text-center lg:gap-5 gap-3'>
        <h2 className='lg:text-[56px] text-4xl font-medium '>Our Values</h2>
        <p className='text-base font-light lg:max-w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
        </div> 
      }
      <div className='flexCenter flex-wrap gap-7'>
          {
            cardsData.map((card , index) => (
              <OurCard
              key={index}
              img={Trust}
              title={card.title}
              description={card.description}
              />
            ))
          }
      </div>
    </Wrapper>
  )
}

export default OurValues