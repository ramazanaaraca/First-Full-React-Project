import Logo from '../assets/img/light_aviza_academy_logo.svg';
import { Social } from '../data';
import { FooterNav } from '../data';
import { Link } from 'react-router-dom';

const Footer = ({label }) => {
  return (
    <footer className='bg-black pt-[75px]'>
        <div className='max-container'>
            <div className='flexBetween mb-[47px] max-lg:flex-col max-lg:gap-5'>
                <a href="/">
                <img
                    src={Logo} 
                    alt="aviza-logo"  
                    height="40px"
                    className='lg:w-[251px] w-[220px]' />
                    </a>
                <nav className='flex items-center gap-9'>
                    {Social.map((icons , index) => (
                        <Link key={index} href={label}>
                            <img src={icons.icon} alt="social" />
                        </Link>
                    ))}    
                </nav>
            </div>
            <div className='grid lg:grid-cols-2 lg:gap-[100px] gap-[60px] pb-[40px] lg:pb-[70px]'>
                <div className='text-white max-lg:text-center'>
                    <h4 className='font-medium lg:text-3xl text-2xl mb-3'>About Us</h4>
                    <p className='font-light lg:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
                <div className='text-white'>
                    <h4 className='font-medium lg:text-3xl text-2xl mb-3 max-lg:text-center'>Aviza Academy</h4>
                    <nav>
                        <ul className='flex items-center flex-wrap justify-between gap-5 max-lg:text-center'>
                            {FooterNav.map((link,index) => (
                                <li 
                                key={index}
                                className='text-white w-[150px]'
                                >
                                    <a
                                    href={link.label}
                                    className='text-base font-light duration-300 hover:text-[#E43D30]'
                                    >{link.namenav}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='border-t  border-[#ffffff41] text-white flex items-center gap-10 pt-5 pb-8 max-lg:flex-col max-lg:gap-2'>
               <p className='font-light lg:text-base text-xs'>
               © 2022 Aviza Academy. All rights reserved.
                </p>
                <a href="" className='font-light lg:text-base text-xs'>Code of Conduct</a>
                <a href="" className='font-light lg:text-base text-xs'>Privacy Policy</a>
                <a href="" className='font-light lg:text-base text-xs'>Cookie Declaration</a>                
            </div>
        </div>
    </footer>
  )
}

export default Footer