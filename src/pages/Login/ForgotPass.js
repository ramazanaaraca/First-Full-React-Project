import React from 'react'
import LoginWrapper from '../../Components/LoginWrapper'
import Input from '../../Components/Input'
import Breadcumb from '../../Components/Breadcumb'
import Button from '../../Components/Button'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

const ForgotPass = () => {

  const navigate = useNavigate()

  return (
    <>
        <Breadcumb
          pageName='Forgot Your Password'
          title='Forgot Your Password'
          nonParagraf={true}
          />
        <div className='grid lg:grid-cols-1  gap-10 '>
            <Formik
            initialValues={
              {
                mail : ''
              }
            }
            onSubmit={ values => {
              console.log(values)
              setTimeout(() => {
                navigate('/Login')
              }, 2000 );
            }}

            >
              {({values }) => (
                <Form className='flex items-center justify-center'>
                  <LoginWrapper className={'md:w-[50%] w-[100%]'} >
                          <p className=' text-base font-normal mb-5'>Forgot your password ? Enter your email address below. In a few minutes, we will send you an e-mail allowing you to set a new password.</p>
                          <div className='flex flex-col gap-5'>
                              <Input
                              name='mail'
                              value={values.mail}  
                              type='e-mail'
                              LabelName='E-Mail Address'
                              />
                          </div>
                          {/* {mail && <div className="text-sm text-green-500 font-medium" >Your Submit İs Success</div>} */}
                          <div className='flex flex-col items-start mt-5'>
                          <Button type='submit'>Change the password</Button>
                          </div>
                  </LoginWrapper>      
                </Form>
                )}
                              
            </Formik>
        </div>
    </>
  )
}

export default ForgotPass