import React from 'react'
import Wrapper from '../../Components/Wrapper'
import Breadcumb from '../../Components/Breadcumb'
import Training from '../../Components/Training'
import { TRAINING_DATA } from '../../data'
import Button from '../../Components/Button'


const TrainingPage = () => {

  return (
    <Wrapper>
      <Breadcumb
      breadBg={true}
      title='Training'
      pageName='Training'
      />
      {
        TRAINING_DATA.map((tran , index) => (
          <Training
          key={index}
          {...tran}
          >
          </Training>
        ))
      }
    </Wrapper>
  )
}

export default TrainingPage