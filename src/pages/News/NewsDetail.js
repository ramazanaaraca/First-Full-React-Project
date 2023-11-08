import React from 'react'
import BreadLink from '../../Components/BreadLink'
import SubImg from '../../assets/img/sub_page_img.png';
import Wrapper from '../../Components/Wrapper';
import NewsP from '../../Components/NewsP';
import { NEWS_DETAİL } from '../../data';

const NewsDetail = () => {
  return (
    <Wrapper>
        <BreadLink  pageName='Categories' mainTitle={NEWS_DETAİL[0].mainTitle} />
        <div className='mt-6 mb-16'>
            <img src={SubImg} alt="sub" width='100%' />
        </div>
       {
        NEWS_DETAİL.map((detail) => (
            <NewsP
            {...detail}
            />
        ))
       }
    </Wrapper>
  )
}

export default NewsDetail