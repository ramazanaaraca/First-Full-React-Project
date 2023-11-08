import React from 'react';
import Training from '../assets/img/our_tran_img.png';
import NewCars from '../assets/img/news_card.png';
import Card from './Card';
import { DISCOVER_ITEMS } from '../data';

const Discover = ({custom = 'max-lg:flex-col' , order='max-lg:order-1' , ForCol , className , discover = DISCOVER_ITEMS , text , id }) => {
  
  const discoverData = discover 

  return (
    <section className={className}>
      <div className='max-container'>
        <div className={`grid  gap-5 ${ForCol ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}` }>
          {discoverData.map((discover) => (
            <div className='col-span-1' key={id}>
              <Card
              text={text}
              custom={custom}
              order={order}
              discover={discover}
              image={ForCol ? NewCars : Training}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
