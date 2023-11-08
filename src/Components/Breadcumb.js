import '../index.css'
import BreadLink from './BreadLink'

const Breadcumb = ({breadBg , title , pageName , nonParagraf }) => {
  return (
    <div>
            <div className={`${breadBg && 'breadcumb relative'}`}>
                <div className='relative z-10 flex flex-col items-center justify-center lg:gap-3 gap-4 pb-10 px-3'>
                    <BreadLink pageName={pageName}  />
                    <h2 className={`text-[56px] font-medium max-lg:text-4xl text-center  ${breadBg ? 'text-white' : 'text-black' }`}>{title}</h2>
                    {
                      nonParagraf ? null : <p className={` text-lg font-light lg:max-w-[500px] text-center ${breadBg ? 'text-white' : 'text-black' } `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                    }
                </div>
            </div>
    </div>
  )
}

export default Breadcumb