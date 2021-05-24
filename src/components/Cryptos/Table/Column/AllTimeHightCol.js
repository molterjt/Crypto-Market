import React from 'react';
import '../CryptoTableStyle.scss';

export const AllTimeHightCol = ({price, colClassName}) => 
  <div 
    className={`row-col `+ colClassName }
    style={{color: 'blueviolet'}}
  >
    ${price}
  </div>
