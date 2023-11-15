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
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../store/auth/hooks';
import { Formik , Form} from 'formik'
import { NewsSchema } from '../../Validations/NewsChema'
import { scrollTop } from '../../Components/ScrollTop'

const TrainingDetail = ({traniningRow = 0 , TrainingCol = 1 }) => {

  const {slug} = useParams()
  const user = useAuth()

  return (
    <Wrapper
    
    >

    <BreadLink 
    pageName='Trainings'
    mainTitle={TRAINING_DATA[0].title}
    className='mb-[40px]'
    />  
    Training Detail : {slug}
    {
    TRAINING_DATA.slice(traniningRow  , TrainingCol).map((detail , index) => (
        <Training
        detail={true}
        key={index} 
        {...detail}
        >
          <div className='my-14'>
          {
            user ? <Link onClick={scrollTop} to='/Login'><Button>Buy</Button></Link> : <Link onClick={scrollTop} to='/Login'><Button>Register now</Button></Link>
          }
          </div>
        
        </Training>
    ))
    }
    <Tab />
    <div className='bg-[#F7F7F7] pt-[20px] rounded-[20px] mb-[148px] '>
      <div className='grid lg:grid-cols-2 items-center'>
        <div className='col-span-1 max-lg:order-1'>
          <div className='flex items-end max-lg:justify-center'>
            <img src={Female} alt="person" className='relative lg:left-[60px] left-[50px] z-10 lg:w-full w-[220px] '  />
            <img src={Male} alt="person" className='relative lg:right-[110px] right-[63px] lg:w-full w-[240px] ' />
          </div>
        </div>
        <div className='col-span-1 py-[40px] lg:px-[80px] px-[20px]'>
          <h2 className='lg:text-[32px] text-[26px] font-medium text-black mb-[36px] leading-[32px]'>Don’t hesitate to get information.</h2>
          <Formik
          initialValues={{
            email:'',
            userName:'',
            userSurname:'',
            phone:'',
          }}

          onSubmit= { ( values  , {resetForm}) => {
            console.log(values)
            resetForm();
          }}
          
          validationSchema={NewsSchema}

          >
            
              {({values}) => (
                <Form>
                  <div className='grid lg:grid-cols-2 gap-3'> 
                  <Input
                  value={values.userName}
                  name='userName' 
                  LabelName='Name'
                  />
                  <Input
                  value={values.userSurname}
                  name='userSurname' 
                  LabelName='Surname'
                  />
                  <Input
                  value={values.email} 
                  name='email'
                  LabelName='E-Mail Address'
                  />
                  <Input
                  value={values.phone} 
                  name='phone'
                  LabelName='Phone Number'
                  />
                  <div className='mt-[36px]'>
                    <Button type='submit'>Send</Button>
                  </div>
                </div>
              </Form>
              )}

              
            
          </Formik>
        </div>
      </div>  
    </div>   
      
    </Wrapper>
  )
}

export default TrainingDetail