import React from 'react';
import '../CryptoTableStyle.scss';

export const PriceChangeCol = ({priceChange, colClassName}) => 
  <div 
    className={`row-col `+ colClassName }
    style={
      priceChange >= 0 ? {color: 'green'} : {color: 'red'}
    }
  >
    {priceChange}%
  </div>