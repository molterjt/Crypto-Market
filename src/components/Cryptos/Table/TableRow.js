import React from 'react';
import {PriceCol, PriceChangeCol, AllTimeHightCol, NameCol} from './Column';
import './CryptoTableStyle.scss';

export const CryptoTableRow = ({data, selectCurrency}) => {
  const {
    id,
    name, 
    symbol, 
    current_price: price,
    price_change_percentage_1h_in_currency: hr,
    price_change_percentage_24h_in_currency: day,
    price_change_percentage_7d_in_currency: week,
    price_change_percentage_30d_in_currency: month,
    price_change_percentage_200d_in_currency: twoHundredDay,
    ath,
  } = data;
  return(
    <div className="table-row" key={id}>  
      <NameCol colClassName={'col-name'} name={name} id={id} selectCurrency={selectCurrency}/>    
      <div className="row-col col-symbol">{symbol}</div>
      <PriceCol colClassName={'col-price'} price={Number(price).toFixed(2)} priceChange={Number(hr).toFixed(2)} ath={ath} />
      <PriceChangeCol colClassName={'col-hour'} priceChange={Number(hr).toFixed(2)}/>
      <PriceChangeCol colClassName={'col-day'} priceChange={Number(day).toFixed(2)}/>
      <PriceChangeCol colClassName={'col-week'} priceChange={Number(week).toFixed(2)}/>
      <PriceChangeCol colClassName={'col-month'} priceChange={Number(month).toFixed(2)}/>
      <PriceChangeCol colClassName={'col-month'} priceChange={Number(twoHundredDay).toFixed(2)}/>
      <AllTimeHightCol colClassName={'col-month'} price={Number(ath).toFixed(2)}/>
    </div>
  )
}