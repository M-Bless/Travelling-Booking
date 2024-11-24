import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Explore beautiful scenery like waterfalls'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Get to know the Culture of Africa'
              label='Traditions'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Have some moments in the breeze of Indian Ocean'
              label='Enjoyment'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Get to see amazing wildlife'
              label='Wildlife'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Vacation in quality hotels'
              label='Relaxation'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;