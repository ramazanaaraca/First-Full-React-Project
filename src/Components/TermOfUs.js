import React from 'react'
import Wrapper from './Wrapper'
import Breadcumb from './Breadcumb'
import NewsP from './NewsP'
import { TRAM_DATA } from '../data'

const TermOfUs = () => {
  return (
    <Wrapper>
        <Breadcumb
        nonParagraf={true} 
        pageName='Term of Use'
        title='Term of Use'
        />
        {
            TRAM_DATA.map((tram , index) => (
                <NewsP
                key={index} 
                {...tram}
                />
            ))
        }
    </Wrapper>
  )
}

export default TermOfUs