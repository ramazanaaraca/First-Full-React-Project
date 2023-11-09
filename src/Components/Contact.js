import React from 'react'
import Wrapper from './Wrapper'
import Input from './Input'
import Button from './Button'
import ContactImg from '../assets/img/contact_page_img.png'
import { FastField, Form, Formik } from 'formik'
import { ContactSchema } from '../Validations/ContactChema'
import { useAuth } from '../Context/AuthContext'

const Contact = () => {


  return (
    <Wrapper
    Parent='my-[148px]'
    Child='grid lg:grid-cols-2 lg:gap-[80px] gap-10 max-lg:place-items-center items-center'
    >
        <div className=' col-span-1'>
            <div className='text-2xl font-medium mb-2'>Don’t hesitate to get information.</div>
            <p className='text-base font-light mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <Formik
                initialValues={{
                    email:'',
                    userName:'',
                    userSurname:'',
                    phone:'',
                    message:'',
                }}

                onSubmit= { (values  , {resetForm}) => {
                    resetForm();
                }}

                validationSchema={ContactSchema}
            >
               {({values}) => (
                    <Form>
                        <div className='grid lg:grid-cols-2 gap-5 mb-5'>
                            <Input
                            name='userName'
                            value={values.userName}
                            type='text' 
                            LabelName='Name'/>
                            <Input
                            name='userSurname'
                            value={values.userSurname}
                            type='text' 
                            LabelName='Surname'/>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-5 mb-5'>
                            <Input
                            name='email'
                            value={values.email}
                            type='email' 
                            LabelName='E-Mail Address'/>
                            <Input
                            name='phone'
                            value={values.phone}
                            type='number' 
                            LabelName='Phone Number'/>
                        </div>
                        <div className='grid lg:grid-cols-1 gap-5 mb-5'>
                            <Input
                            name='message'
                            value={values.message   }
                            AttName='textarea'  
                            type='textarea' 
                            LabelName='Your Message'/>
                        </div>
                        <Button type='submit'>Send</Button> 
                    </Form>
               )}
            </Formik>
        </div>
        <div className='col-span-1'>
            <img src={ContactImg} alt="ContactImg" />
        </div>    

    </Wrapper>
  )
}

export default Contact