import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Plans</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/freeInstallation.png'
              text='Free installation and 10% off on electricity bill'
              // label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/fullBenifits.png'
              text='Buy full set and get 100% benifits'
              // label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ongrid.png'
              text='On-Grid Systems'
              // label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/offgrid.png'
              text='Off-Grid Systems'
              // label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/hybrid.png'
              text='Hybrid Systems'
              // label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
