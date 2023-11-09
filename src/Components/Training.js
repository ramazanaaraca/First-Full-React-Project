import WorkShop from '../assets/img/workshop_img.png';
import Book from '../assets/img/book.svg';
import Button from './Button';
import { TRAINING_DATA } from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react'


function TrainingCard({cardText , icon ,  redText}) {
    return (
        
        <div className={`p-[20px] bg-[#F7F7F7]  col-span-1 ${icon ? 'max-lg:!rounded-[10px] lg:mr-1 max-lg:mb-1' : 'rounded-[10px]' }`}>
            <div className='flex items-center gap-2'>
                <img src={Book} alt=""  />
            <div className='flex flex-col items-start leading-4'>
                {
                icon ? <span className=' text-xs text-[#E43D30]'>{redText}</span> : null       
                }
                <div className=' text-base font-normal'>{cardText}</div>
            </div>
            </div>
        </div>
        
    )
}


const Training = ({info , title , paragraf , cards , border , detail , children }) => {


  return (
    <div className={detail ? null : 'mt-[70px] p-[30px] border border-[#DBDBDB] rounded-[20px] '}>
        <div className='lg:grid lg:grid-cols-12 gap-12 items-center'>
            <div className={detail ? 'col-span-5 order-1 w-full' : ' w-full col-span-4'}>
                <div className='relative w-full'>
                    <img src={WorkShop} alt="workshop" width='100%' className=' object-cover w-full max-w-[500px]' />
                    {detail ? null : <div className='p-[10px] bg-black rounded-[10px] text-sm font-medim text-white absolute top-[19px] left-[25px]'>{info}</div>}
                </div>
            </div>
            <div className={detail ? 'col-span-7' : 'col-span-8'}>
                <div>
                    <h5 className={`text-[30px] font-medium ${detail ? 'lg:w-[400px] leading-[36px] mb-5' : null}`}>{title}</h5>
                    <p className={` text-base font- normal capitalize mb-5 ${detail ? 'mb-10' : null}`} >{paragraf}</p>
                    <div className='grid lg:grid-cols-3 items-start  gap-2 mb-[20px]'>
                        {
                        cards.map((card, index) => (
                            <TrainingCard 
                            key={index} 
                            cardText={card.cardText} />
                            ))
                        }
                        {
                        detail 
                        ? 
                        cards.map((card, index) => (
                            <TrainingCard 
                            key={index} 
                            cardText={card.cardText} />
                            ))
                        : 
                        null 
                        }
                    </div>
                    <div className='grid lg:grid-cols-12'>
                        <div className={detail ? 'col-span-12' : 'col-span-8'}>
                            <div className='grid lg:grid-cols-2 corner'>
                                {
                                border.map((borders, index) => (
                                    <TrainingCard 
                                    key={index} 
                                    cardText={borders.cardText} 
                                    redText={borders.redText} 
                                    icon={true} />
                                    ))
                                }
                            </div>
                        </div>
                        {
                            detail ? null : <div className='col-span-4 justify-self-end self-end max-lg:mt-5'>
                                            <Link to='detail'>
                                                <Button>Learn more</Button>
                                            </Link>
                                            
                                    </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        {children}
    </div>
  )
}

export default Training