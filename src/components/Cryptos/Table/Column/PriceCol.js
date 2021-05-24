import React from 'react';
import '../CryptoTableStyle.scss';

export const PriceCol = ({price, priceChange, colClassName, ath}) => {
  const pColor = priceChange >= 0 ? 'green' : 'red';
  const pWeight = price >= ath ? 'bold' : 'normal';
  const pBord = price >= ath ? '1px solid yellowgreen' : 'null';
  return (
    <div 
      className={`row-col `+ colClassName }
      style={{color: pColor, fontWeight: pWeight, border: pBord}}
    >
      ${price}
    </div>
  )
}
  