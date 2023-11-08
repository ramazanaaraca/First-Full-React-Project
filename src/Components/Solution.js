import '../index.css';
import Button from './Button'

const Solution = () => {
  return (
    <section className='my-[148px]'>
        <div className='max-container'>
            <div className='solution-bg rounded-3xl relative flexCenter'>
                <div className='flexCenter flex-col z-10 relative text-center text-white gap-5'>
                    <h3 className='text-[64px] font-normal  lg:w-[600px] leading-[60px] max-lg:text-[40px] max-lg:leading-[40px]'>Tailor-made learning solutions</h3>
                    <p className=' text-xl font-light lg:w-[800px] max-lg:text-base max-lg:px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo sed do eiusmod tempo</p>
                    <Button
                    title='Contact us today'
                     />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution