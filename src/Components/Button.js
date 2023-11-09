import '../index.css';
import Arrow from '../assets/img/arrow_icon.svg';



const Button = ({children , icon , ButtonName = 'button' , ...props  }) => {
  icon = icon ? icon : Arrow;
  return (
    <ButtonName {...props} className='flex items-center gap-5 bg-[#E43D30] text-white ps-8 pe-3 py-3 rounded-full duration-300 hover:bg-[#e43c30d2] group lg:text-base text-sm'>
        {children}
        {icon && <div className='bg-[#B92E23] p-2 rounded-full flexCenter duration-300 group-hover:bg-[#e43c30d2]'><img className=' w-[15px] h-[15px]'  src={icon} alt="icon"  /></div>}
    </ButtonName>
  )
}

export default Button;