import Down from '../assets/img/arrow_down.svg';
import { Popover } from '@headlessui/react';
import classNames from "classnames"
import { useTranslation } from 'react-i18next';



const LangPop = () => {
 
  const {i18n} = useTranslation();  

  const handleChange = async lang => {
    await i18n.changeLanguage(lang)
  }
  
  return (
    <Popover className='relative'>
     {
     
      ({open}) => (

        <>
          <Popover.Button className='flex items-center gap-1.5 px-4 py-3 bg-[#E9E9E9] rounded-full'>
          <div className='text-xs font-medium w-4'>{i18n.language}</div>
          <div>
            <img 
            src={Down} 
            alt="arrow" 
            width='12px' 
            height='12px'
            className={
              classNames({
                'transition-all  ease-linear' : true ,
                'rotate-180' : open === true 
              })
            } />
          </div>
        </Popover.Button>
        <Popover.Panel className='flex flex-col items-center gap-1.5  absolute top-full z-[99] w-[64px] py-3 bg-[#E9E9E9] rounded-2xl text-xs'>
          <button onClick={() => handleChange('Tr')} className='hover:bg-gray-50 w-full py-2 transition-all'>Tr</button>
          <button onClick={() => handleChange('En')}className='hover:bg-gray-50 w-full py-2 transition-all'>En</button>
        </Popover.Panel>
      </>
      )
     }
    </Popover>
  )
}

export default LangPop;