import React from 'react'
import Crown from '../assets/img/crown_icon.svg'
import Card from './Card';
import { EXAMS_ITEMS } from '../data';

const Exams = () => {
    

  return (
    <section>
        <div className='max-container'>
            <div className='grid lg:grid-cols-3 gap-4'>
                {EXAMS_ITEMS.map((discover,index) => (
                    <div className='col-span-1' key={index}>
                        <Card
                        order='order-1 '
                        image={Crown}
                        custom='flex-col gap-7'
                        discover={discover}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Exams