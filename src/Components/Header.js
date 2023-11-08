import '../index.css';
import Logo from '../assets/img/aviza_academy_logo.svg';
import Search from '../assets/img/search_icon.svg';
import User from '../assets/img/black_person.svg';
import Dropdown from './Dropdown';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { button } from '@material-tailwind/react';

const  Header = () => {

  const { user , setUser } = useAuth()
  
  const handleOut = () => {
    setUser(false)
  }

  const NavProps = [
    {title:'Trainings' , link:'/Trainings'},
    {title:'Exams' , link:'/Term'},
    {title:'About Aviza' , link:'/About'},
    {title:'News' , link:'/News'},
    {title:'Contact' , link:'/Contact'}
  ];  

  return (
    <header className='py-6'>
        <div className='max-container'>
            <div className='flexBetween'>
                <div>
                    <Link to="/">
                    <img 
                    src={Logo} 
                    alt="aviza-logo" 
                    width="251px" 
                    height="40px" />
                    </Link>
                </div>
                <nav className=''>
                    <ul className='hidden lg:flex items-center gap-10'>
                    {NavProps.map((navlist, index) => (
                        <li key={index}>
                            <NavLink 
                            to={navlist.link}
                            className='font-normal text-base color-black duration-300 hover:text-[#E43D30]'
                            >
                                {navlist.title}
                            </NavLink>
                        </li>     
                    ))
                    }
                    </ul>
                </nav>
                <div className='flex items-center gap-6'>
                    <div>
                        <NavLink to='/Search'>
                            <img 
                            className='cursor-pointer hidden xl:inline'
                            src={Search} 
                            alt="search icon"
                            width=''
                            height='' />
                        </NavLink>
                    </div>
                   {
                    user ?
                    <NavLink onClick={handleOut} to='/Login' className='flex items-center gap-5  rounded-full  text-white duration-300 hover:text-[#E43D30]'>
                    <img
                    className='bg-[#F2F2F2] p-2 rounded-full' 
                    src={User}
                    alt="user" />
                    <div className='font-normal text-sm underline text-black'>Ramazank</div>
                    </NavLink> 
                    : <NavLink to='/Login' className='flex items-center gap-5 py-[8px] px-[13px] rounded-full bg-black text-white duration-300 hover:text-[#E43D30]'>
                    <div className='font-normal text-sm '>Login / Register</div>
                    <img
                    className='bg-white p-2 rounded-full' 
                    src={User}
                    alt="user" />
                </NavLink>
                   }
                    <Dropdown />
                </div>
            </div>
        </div>
    </header>
  )
}

export default  Header;