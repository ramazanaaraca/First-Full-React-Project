import React from 'react'
import Wrapper from '../../Components/Wrapper'
import LoginWrapper from '../../Components/LoginWrapper'
import Input from '../../Components/Input'
import Breadcumb from '../../Components/Breadcumb'
import Button from '../../Components/Button'
import {  Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate , useLocation } from 'react-router-dom'
import { useFormik , Formik , Form} from 'formik';
import Checkboxx from '../../Components/Checkboxx'
import {LoginSchema} from '../../Validations/LoginChema'
import { CreateSchema } from '../../Validations/CreateChema'

const Login = () => {

  const { setUser } = useAuth();

  const navigate = useNavigate();

  return (
    <>
        <Breadcumb
        pageName='Login/Register'
        title='Login/Register'
        nonParagraf={true}
        />
        <div className='grid lg:grid-cols-2 gap-10 '>
        <Formik
         className='col-span-1'
        initialValues=
            {
                {
                    email:'',
                    password:'',
                    accept: false,
                }
            }

            onSubmit= { values => {
                setUser(values)


                navigate('/')
            } }

            validationSchema={LoginSchema} //validasyon işlemi
        >
                {({values}) => (
                  
                <Form>
                    <div  className='col-span-1'>
                        <LoginWrapper>
                            <h3 className='text-3xl font-medium mb-[36px]'>I have an account</h3>
                                <div className='flex flex-col gap-5'>
                                    <Input
                                    value={values.firstName}
                                    type='email'
                                    LabelName='E-Mail Address'
                                    name='email'
                                    />
                                    <Input
                                    value={values.password}
                                    LabelName='Password'
                                    type='password'
                                    name='password'
                                    />
                                </div>
                            <div className='flexBetween max-lg:flex-col max-lg:items-start max-lg:gap-2 max-lg:mb-4 mt-[36px]'>
                                <div><Checkboxx label='Remember Me' name='accept' /> </div>
                                <Button  type='submit'>Login</Button>
                            </div>
                            <Link to='ForgotPassword' className='text-base font-normal underline text-[#E43D30]'>
                            Forgot Your Password?
                            </Link>
                        </LoginWrapper>
                    </div>
                </Form>
                      
                )}


        </Formik>
        <Formik
        className='col-span-1'
        initialValues=
            {
                {
                    mail:'',
                }
            }

            onSubmit= { values => {
                setUser(values)
            } }

            validationSchema={CreateSchema} //validasyon işlemi
        >
                {({values}) => (
                        <Form>
                            <LoginWrapper>
                                <h3 className='text-3xl font-medium mb-[36px]'>Create an account</h3>
                                    <div className='flex flex-col gap-5'>
                                        <Input
                                        value={values.mail}
                                        type='email'
                                        LabelName='E-Mail Address'
                                        name='mail'
                                        />
                                    </div>
                                <div className=' mt-[36px]'>
                                    <Button type="submit" navigate >Next Step</Button>
                                </div>
                            </LoginWrapper>
                        </Form>
                )}


        </Formik>         
            
        </div>       

    </>
  )
}

export default Login