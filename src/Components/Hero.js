import Play from '../assets/img/play_btn.svg';
import Arrow from '../assets/img/arrow_icon.svg';
import Button from './Button';


const Heros = () => {
  return (
    <section className='px-5 rounded-3xl'>
        <div className='hero relative w-full rounded-3xl hero-overlay'>
            <div className='max-container h-full max-w[1920px]'>
                <div className='flexStart h-full relative z-10'>
                    <div className='flex flex-col items-start max-w-[570px]  '>
                        <h1 className='font-medium lg:text-6xl text-4xl text-white'>Never stop learning.
                        Life never stops
                        teaching!</h1>
                        <p className='font-base text-xl text-white mt-5 mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                        <div className='flex items-center gap-5'>
                            <Button
                            type='button'
                            icon={Arrow} >
                              Get Started  
                            </Button>
                            <img
                            className='cursor-pointer' 
                            src={Play} 
                            alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Heros;