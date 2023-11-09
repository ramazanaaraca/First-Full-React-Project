import { Link } from 'react-router-dom'
import Arrowİcon from '../assets/img/red.svg'


const BreadLink = ({pageName , mainTitle , className}) => {


  return (
    <div className={`flexCenter pt-10 ${className}`}>
      <ul className='flex items-center gap-4 bg-[#FDF3F3] py-1 px-7 rounded-full'>
          <li>
              <Link to="/" className=' text-xs font-normal text-[#E43D30]'>Homepage</Link>
          </li>
          <li>
            <img src={Arrowİcon} alt="" />
          </li>
          <li>
              <Link className='text-xs font-normal underline text-[#E43D30]' to='' >
                {pageName}
                </Link>
          </li>
         {
          mainTitle ?  <> <li> <img src={Arrowİcon} alt="" />  </li> <li className='text-xs font-normal underline text-[#E43D30]'>  {mainTitle} </li> </> : null 
        }        
                
                 
                 
         
      </ul>
    </div>  
  )
}

export default BreadLink