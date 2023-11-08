import React from 'react'
import Wrapper from './Wrapper'
import Input from './Input'
import Button from './Button'
import ContactImg from '../assets/img/contact_page_img.png'

const Contact = () => {
  return (
    <Wrapper
    Parent='my-[148px]'
    Child='grid lg:grid-cols-2 lg:gap-[80px] gap-10 max-lg:place-items-center items-center'
    >
        <div className=' col-span-1'>
            <div className='text-2xl font-medium mb-2'>Don’t hesitate to get information.</div>
            <p className='text-base font-light mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <form action="POST" >
                <div className='grid lg:grid-cols-2 gap-5 mb-5'>
                    <Input
                    type='text' 
                    For='me' 
                    LabelName='Name'/>
                    <Input
                    type='text' 
                    For='me' 
                    LabelName='Surname'/>
                </div>
                <div className='grid lg:grid-cols-2 gap-5 mb-5'>
                    <Input
                    type='text' 
                    For='me' 
                    LabelName='E-Mail Address'/>
                    <Input
                    type='text' 
                    For='me' 
                    LabelName='Phone Number'/>
                </div>
                <div className='grid lg:grid-cols-1 gap-5 mb-5'>
                    <Input
                    AttName='textarea'  
                    type='textarea' 
                    For='me' 
                    LabelName='Your Message'/>
                </div>
                <Button>Send</Button> 
                
               
            </form>
        </div>
        <div className='col-span-1'>
            <img src={ContactImg} alt="ContactImg" />
        </div>    

    </Wrapper>
  )
}

export default Contact