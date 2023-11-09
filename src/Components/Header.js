import '../index.css';
import Logo from '../assets/img/aviza_academy_logo.svg';
import Search from '../assets/img/search_icon.svg';
import User from '../assets/img/black_person.svg';
import Dropdown from './Dropdown';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import {FiMenu , FiX} from 'react-icons/fi'
import { useState } from 'react';
import classNames from 'classnames';

const  Header = () => {

  const { user , setUser } = useAuth()
  const [menu , setMenu] = useState(false)
  
  const handleOut = () => {
    setUser(false)
  }

  const handleMenu = () => {
    setMenu((openMenu) => !openMenu)
    console.log(menu)   
  }

  const NavProps = [
    {title:'Trainings' , link:'/Trainings'},
    {title:'Exams' , link:'/Term'},
    {title:'About Aviza' , link:'/About'},
    {title:'News' , link:'/News'},
    {title:'Contact' , link:'/Contact'}
  ];  

  return (
    <header className='py-6 relative'>
        <div className='max-container'>
            <div className='flexBetween'>
                <div>
                    <Link to="/">
                    <img 
                    src={Logo} 
                    alt="aviza-logo" 
                    className='lg:w-[251px] w-[190px] z-[999] relative' 
                    height="40px" />
                    </Link>
                </div>
                <nav className='max-lg:fixed max-lg:left-0 max-lg:top-0  max-lg:z-[99] max-lg:h-[100vh] max-lg:py-[60px] bg-blue'>
                    <ul className={classNames ({
                        'hidden  lg:flex items-center gap-10' : true,
                        '!flex max-lg:flex-col max-lg:px-[90px]' : menu,
                        'hidden px-0': !menu
                    })}>
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
                                className='cursor-pointer xl:inline'
                                src={Search} 
                                alt="search icon"
                                width=''
                                height='' />
                            </NavLink>
                        </div>
                        <div className='hamburger block lg:hidden' onClick={handleMenu}>
                            {
                                menu ? 
                                <FiX
                                className='cursor-pointer' 
                                size={30}/> 
                                :
                                <FiMenu
                                className='cursor-pointer' 
                                size={30}/>   
                            }
                        </div>
                    {
                        user ?
                        <NavLink onClick={handleOut} to='/Login' 
                        className={classNames
                            ({
                                'hidden lg:flex items-center gap-5  rounded-full  text-white duration-300 hover:text-[#E43D30] max-lg:mx-[70px]   max-lg:fixed max-lg:left-0 max-lg:z-[99] max-lg:top-[400px] ' : true ,
                                '!flex' : menu,
                                'hidden': !menu
                            })
                        }>
                        <img
                        className='bg-[#F2F2F2] p-2 rounded-full' 
                        src={User}
                        alt="user" />
                        <div className='font-normal text-sm underline text-black'>Ramazank</div>
                        </NavLink> 
                        : <NavLink to='/Login' 
                        className={classNames
                        ({
                            'hidden lg:flex items-center gap-5 py-[8px] px-[13px] max-lg:mx-[55px]  rounded-full bg-black text-white duration-300 hover:text-[#E43D30] max-lg:fixed max-lg:left-0 max-lg:z-[99] max-lg:top-[400px] ' : true,
                            '!flex' : menu,
                            'hidden': !menu
                        })
                        }>
                        <div className='font-normal text-sm '>Login / Register</div>
                        <img
                        className='bg-white p-2 rounded-full' 
                        src={User}
                        alt="user" />
                    </NavLink>
                    }
                        <Dropdown
                        className={
                            classNames ({
                                'max-lg:fixed max-lg:left-0 max-lg:z-[99] max-lg:top-[400px]' : true
                            })
                        }
                        />
                    </div>
            </div>
        </div>
    </header>
  )
}

export default  Header;