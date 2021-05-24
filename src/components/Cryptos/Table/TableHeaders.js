import React from 'react';
import './CryptoTableStyle.scss';

export const TableHeaders = () => 
  <div className="table-headers">  
    <h3 className="col-name">Name</h3>
    <h3 className="col-symbol">Sym</h3>
    <h3 className="col-price">Price $</h3>
    <h3 className="col-hour">1HR</h3>
    <h3 className="col-day">24HR</h3>
    <h3 className="col-week">7D</h3>
    <h3 className="col-month">Month</h3>
    <h3 className="col-twoHundred">200D</h3>
    <h3 className="col-ath">ATH</h3>
  </div>