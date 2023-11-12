import React from 'react'
import Book from '../assets/img/aviza_academy_book.svg'
import Blogpic from '../assets/img/blog_img.png';
import Card from './Card';
import Button from './Button';
import { Link } from 'react-router-dom';
import { scrollTop } from './ScrollTop';

const Blog = ({toPage}) => {

    const blogItems = [
        {
          title: 'Banking intermediation',
          paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
          img: '../assets/img/our_tran_img.png',
          label: '#1',
          blogTitle:'Blog'
        },
        {
            title: 'Banking intermediation',
            paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
            img: '../assets/img/our_tran_img.png',
            label: '#1',
            blogTitle:'Blog'
          },
          {
            title: 'Banking intermediation',
            paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
            img: '../assets/img/our_tran_img.png',
            label: '#1',
            blogTitle:'Blog'
          },
        
      ];

  return (
    <section className='mt-[148px]'>
        <div className='max-container'>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className=' col-span-1'>
                    <div className='flex flex-col gap-6 lg:items-start items-center h-[100%]  justify-between'>
                        <div className='flex items-center lg:items-start  flex-col gap-6 w-full '>
                            <h2 className='lg:text-[55px] text-[36px] font-medium text-center lg:text-start leading-[40px] w-full  '>Latest from our
                            blog & customers</h2>
                            <Link
                             onClick={scrollTop}
                            to={toPage}><Button>Read all stories</Button></Link>
                        </div>
                        <img className='lg:ms-10 ms-0 w-[260px] lg:w-[335px]'  src={Book} alt="blogimg" /> 
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='flex flex-col gap-[40px]'>
                        {blogItems.map((discover,index) => (
                        <div className='col-span-1' key={index}>    
                            <Card
                            custom='lg:flex-row flex-col bg-white !p-0 hover:!bg-white justify-between gap-5'
                            order='lg:order-1 order-2 '
                            text='max-w-full'
                            img='w-[198px] h-[168px]'
                            blogTitle='Blog' 
                            discover={discover}
                            image={Blogpic}/>   
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog