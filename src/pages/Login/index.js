import { Outlet } from 'react-router-dom'
import Wrapper from '../../Components/Wrapper'
import LoginWrapper from '../../Components/LoginWrapper'
import Input from '../../Components/Input'
import Breadcumb from '../../Components/Breadcumb'
import Button from '../../Components/Button'
import CheckboxRippleEffect from '../../Components/CheckboxRippleEffect'
import { Link } from 'react-router-dom'

const LoginLayout = () => {
  return (
   <>
      <Wrapper
      Parent='mb-[148px]'
      >
      <Outlet />    
      </Wrapper>
   </>
  )
}

export default LoginLayout