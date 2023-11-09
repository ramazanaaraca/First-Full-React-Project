import React from 'react'
import Wrapper from '../../Components/Wrapper'
import LoginWrapper from '../../Components/LoginWrapper'
import Input from '../../Components/Input'
import Breadcumb from '../../Components/Breadcumb'
import Button from '../../Components/Button'
import { Link, Outlet } from 'react-router-dom'
import RadioDefault from '../../Components/Radio'
import Checkboxx from '../../Components/Checkboxx'


const Register = () => {
  return (
    <>
        <Breadcumb
          pageName='Register'
          title='Register'
          nonParagraf={true}
          />
        <div className='grid lg:grid-cols-1  gap-10 '>
            <form action="" className='flex items-center justify-center'>
                <LoginWrapper className={'md:w-[50%] w-[100%]'} >
                        <div className='flex flex-start flex-col'>
                          <span className='text-sm font-normal'>Titre</span>
                          <RadioDefault />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <Input
                            type='e-mail'
                            LabelName='E-Mail Address'
                            />
                            <Input
                            LabelName='Password'
                            type='password'
                            />
                            <Input
                            LabelName='Password'
                            type='password'
                            />
                            <Input
                            LabelName='Password'
                            type='password'
                            />
                             <Input
                            LabelName='Password'
                            type='password'
                            />
                             <Input
                            LabelName='Password'
                            type='password'
                            />
                        </div>
                        <div className='flex flex-col items-start mt-5'>
                            <div className='relative right-3 mb-5'><Checkboxx /></div>
                            <Button>Login</Button>
                        </div>
                    
                </LoginWrapper>      
            </form>
        </div>
    </>
  )
}

export default Register