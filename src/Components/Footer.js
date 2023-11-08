import Logo from '../assets/img/light_aviza_academy_logo.svg';
import Facebook from '../assets/img/facebook.svg'
import { Social } from '../data';
import { FooterNav } from '../data';

const Footer = ({label }) => {
  return (
    <footer className='bg-black pt-[75px]'>
        <div className='max-container'>
            <div className='flexBetween mb-[47px] max-lg:flex-col max-lg:gap-5'>
                <a href="/">
                <img
                    src={Logo} 
                    alt="aviza-logo" 
                    width="251px" 
                    height="40px" />
                    </a>
                <nav className='flex items-center gap-9'>
                    {Social.map((icons , index) => (
                        <a key={index} href={label}>
                            <img src={Facebook} alt="social" />
                        </a>
                    ))}    
                </nav>
            </div>
            <div className='grid lg:grid-cols-2 gap-[100px] pb-[70px]'>
                <div className='text-white max-lg:text-center'>
                    <h4 className='font-medium text-3xl mb-3'>About Us</h4>
                    <p className='font-light text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
                <div className='text-white'>
                    <h4 className='font-medium text-3xl mb-3 max-lg:text-center'>Aviza Academy</h4>
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
               <p className='font-light text-base'>
               © 2022 Aviza Academy. All rights reserved.
                </p>
                <a href="" className='font-light text-base'>Code of Conduct</a>
                <a href="" className='font-light text-base'>Privacy Policy</a>
                <a href="" className='font-light text-base'>Cookie Declaration</a>                
            </div>
        </div>
    </footer>
  )
}

export default Footer