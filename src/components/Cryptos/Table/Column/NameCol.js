import React from 'react';
import '../CryptoTableStyle.scss';

export const NameCol = ({id, name, colClassName, selectCurrency}) => 
  <div className={`row-col `+ colClassName }>
    <button
      className="name-btn" 
      onClick={(e) => {
        e.preventDefault();
        selectCurrency({id: id, name: name})
      }}
    >
      {name}
    </button>
  </div>