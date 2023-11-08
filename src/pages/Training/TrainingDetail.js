import React from 'react'
import Wrapper from '../../Components/Wrapper'
import Training from '../../Components/Training'
import { TRAINING_DATA } from '../../data'
import Tab from '../../Components/Tab'
import Button from '../../Components/Button'
import BreadLink from "../../Components/BreadLink";
import Male from '../../assets/img/male_person.png'
import Female from '../../assets/img/female_person.png'
import Input from '../../Components/Input'
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'

const TrainingDetail = ({traniningRow = 0 , TrainingCol = 1 }) => {

  const {user} = useAuth()

  return (
    <Wrapper
    
    >

    <BreadLink 
    pageName='Trainings'
    mainTitle={TRAINING_DATA[0].title}
    className='mb-[40px]'
    />  

    {
    TRAINING_DATA.slice(traniningRow  , TrainingCol).map((detail) => (
        <Training
        detail={true} 
        {...detail}
        >
          <div className='my-14'>
          {
            user ? <Link to='/Login'><Button title='Buy' /></Link> : <Link to='/Login'><Button title='Register now' /></Link>
          }
          </div>
        
        </Training>
    ))
    }
    <Tab />
    <div className='bg-[#F7F7F7] pt-[20px] rounded-[20px] mb-[148px]'>
      <div className='grid lg:grid-cols-2 items-center'>
        <div className='col-span-1 max-lg:order-1'>
          <div className='flex items-end max-lg:justify-center'>
            <img src={Female} alt="person" className='relative left-[60px] z-10' width='100%' />
            <img src={Male} alt="person" className='relative right-[110px] ' width='100%'/>
          </div>
        </div>
        <div className='col-span-1 py-[40px] px-[80px]'>
          <h2 className=' text-[32px] font-medium text-black mb-[36px] leading-[32px]'>Don’t hesitate to get information.</h2>
          <form  action="">
            <div className='grid lg:grid-cols-2 gap-3'> 
              <Input 
              AttName='input'
              LabelName='Name'
              />
              <Input 
              AttName='input'
              LabelName='Surname'
              />
              <Input 
              AttName='input'
              LabelName='E-Mail Address'
              />
              <Input 
              AttName='input'
              LabelName='Phone Number'
              />
              <div className='mt-[36px]'>
                <Button
                title='Send'
                />
              </div>
            </div>
          </form>
        </div>
      </div>  
    </div>   
      
    </Wrapper>
  )
}

export default TrainingDetail