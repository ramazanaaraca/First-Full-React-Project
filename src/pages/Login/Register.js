import React from 'react'
import Wrapper from '../../Components/Wrapper'
import LoginWrapper from '../../Components/LoginWrapper'
import Input from '../../Components/Input'
import Breadcumb from '../../Components/Breadcumb'
import Button from '../../Components/Button'
import { Link, Navigate, Outlet } from 'react-router-dom'
import RadioDefault from '../../Components/Radio'
import Checkboxx from '../../Components/Checkboxx'
import { Formik , Form , resetform} from 'formik'
import { useAuth } from '../../Context/AuthContext'
import Radio from '../../Components/Radio'
import { RegisterSchema } from '../../Validations/RegisterChema'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const { setRegister , mail } = useAuth();

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
                email: mail.mail || '',
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
              setRegister(values)
              resetForm();
              navigate('/Login')
              console.log(values)
            }}

            validationSchema={RegisterSchema}
            
            >
               {({values}) => (
                    <Form className='flex items-center justify-center'>
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