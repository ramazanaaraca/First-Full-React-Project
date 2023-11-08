import React from 'react'
import Wrapper from '../../Components/Wrapper'
import LoginWrapper from '../../Components/LoginWrapper'
import Input from '../../Components/Input'
import Breadcumb from '../../Components/Breadcumb'
import Button from '../../Components/Button'
import CheckboxRippleEffect from '../../Components/CheckboxRippleEffect'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate , useLocation } from 'react-router-dom'
import { useFormik } from 'formik';
 
const Login = () => {
    
    
        const { setUser } = useAuth();

        const navigate = useNavigate()
        const location = useLocation()


        const {handleChange , handleSubmit , values} = useFormik({
            initialValues: {
                firstName: '',
                password: '',
            },
            onSubmit: values => {
                setUser(values)
                navigate( '/')
            }
        })


        const handleLogin = () => {
            setUser({
                id : 1
            })
            

            navigate( '/')
        }

  return (
    <>
        <Breadcumb
          pageName='Login/Register'
          title='Login/Register'
          nonParagraf={true}
          />
        <div className='grid lg:grid-cols-2 gap-10 '>
            <form onSubmit={handleSubmit} className='col-span-1'>
                <LoginWrapper>
                    <h3 className='text-3xl font-medium mb-[36px]'>I have an account</h3>
                        <div className='flex flex-col gap-5'>
                            <Input
                            value={values.firstName}
                            onChange={handleChange}
                            type='e-mail'
                            LabelName='E-Mail Address'
                            id='firstName'
                            />
                            <Input
                            value={values.password}
                            onChange={handleChange}
                            LabelName='Password'
                            type='password'
                            id='password'
                            />
                        </div>
                    <div className='flexBetween max-lg:flex-col  mt-[36px]'>
                        <div className='relative right-3'><CheckboxRippleEffect labelName='Remember Password'/></div>
                        <Button title='Login'  />
                    </div>
                    <Link to='ForgotPassword' className='text-base font-normal underline text-[#E43D30]'>
                    Forgot Your Password?
                    </Link>
                </LoginWrapper>      
            </form>
            <form action=""  className='col-span-1'>
                <LoginWrapper>
                    <h3 className='text-3xl font-medium mb-[36px]'>Create an account</h3>
                        <div className='flex flex-col gap-5'>
                            <Input
                            type='e-mail'
                            LabelName='E-Mail Address'
                            />
                        </div>
                    <div className=' mt-[36px]'>
                        <Button type="submit" navigate title='Next Step' />
                    </div>
                </LoginWrapper>      
            </form>
        </div>
    </>
  )
}

export default Login