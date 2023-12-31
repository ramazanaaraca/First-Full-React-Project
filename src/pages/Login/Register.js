import React from 'react'
import LoginWrapper from '../../Components/LoginWrapper'
import Input from '../../Components/Input'
import Breadcumb from '../../Components/Breadcumb'
import Button from '../../Components/Button'
import Checkboxx from '../../Components/Checkboxx'
import { Formik , Form } from 'formik'
import Radio from '../../Components/Radio'
import { RegisterSchema } from '../../Validations/RegisterChema'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate();
 

  return (
    <>
        <Breadcumb
          pageName='Register'
          title='Register'
          nonParagraf={true}
          />
        <div className='grid lg:grid-cols-1  gap-10 '>
            <Formik
            
            initialValues = {
              {
                email:'',
                surName:'',
                firstName:'',
                phone:'',
                password:'',
                confirmpassword:'',
                accept: false,
                gender: '2',
              }
            }

            onSubmit = { (values , {resetForm}) => {
              console.log(values)
              // resetForm();
              // navigate('/Login')
            }}

            validationSchema={RegisterSchema}
            
            >
               {({values }) => (
                    <Form
                    className='flex items-center justify-center'>
                      <LoginWrapper className={'md:w-[50%] w-[100%]'} >
                            <div className='flex flex-start flex-col mb-5'>
                              <span className='text-sm font-normal'>Titre</span>
                              <Radio  name='gender'  />
                            </div>
                            <div className='flex flex-col gap-5'>
                               <Input
                                value={values.firstName}
                                LabelName='Firstname'
                                type='text'
                                name='firstName'
                                />
                                <Input
                                value={values.surName}
                                LabelName='surName'
                                type='text'
                                name='surName'
                                />
                                <Input
                                value={values.email}
                                type='e-mail'
                                LabelName='E-Mail Address'
                                name='email'
                                />
                                <Input
                                value={values.phone}
                                LabelName='Phone'
                                type='text'
                                name='phone'
                                />
                                <Input
                                value={values.password}
                                LabelName='Password'
                                type='password'
                                name='password'
                                />
                                <Input
                                value={values.confirmpassword}
                                LabelName='Confirm Password'
                                type='password'
                                name='confirmpassword'
                                />
                            </div>
                            <div className='flex flex-col items-start mt-5'>
                                <div className='mb-5'><Checkboxx label=' I have read and accept the terms and conditions and the
                                  privacy policy.' name='accept' /></div>
                                <Button type='submit' disabled={!values.accept}>Login</Button>
                            </div>
                      </LoginWrapper>  
                    </Form>
               )} 
            </Formik>
        </div>
    </>
  )
}

export default Register