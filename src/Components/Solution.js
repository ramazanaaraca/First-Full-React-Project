import { Link } from 'react-router-dom';
import '../index.css';
import Button from './Button'
import { scrollTop } from './ScrollTop';

const Solution = () => {
  return (
    <section className='my-[148px]'>
        <div className='max-container'>
            <div className='solution-bg rounded-3xl relative flexCenter px-3'>
                <div className='flexCenter flex-col z-10 relative text-center text-white gap-5 max-lg:gap-3'>
                    <h3 className='text-[64px] font-normal  lg:w-[600px] w-full leading-[60px] max-lg:text-[32px] max-lg:leading-[40px]'>Tailor-made learning solutions</h3>
                    <p className=' text-xl font-light lg:w-[800px] max-lg:text-sm max-lg:px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo sed do eiusmod tempo</p>
                    <Link
                    onClick={scrollTop} 
                    to='/Contact'
                    ><Button ButtonName='div'>Contact us today</Button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution