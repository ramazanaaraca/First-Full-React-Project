import { Outlet } from 'react-router-dom'
import Wrapper from '../../Components/Wrapper'


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