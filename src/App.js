import React from 'react';
import './App.scss';
import {CryptoTable} from './components/Cryptos/Table';
import {MyChart} from './components/Cryptos/Chart/lineChart';
import {COIN_GECKO_TOP_100} from './Constants.js';
import {fetchData} from './hooks';
import {Loading} from './components/Common/Loading';

export const App = () => {
  const [crypts, setCrypts] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  React.useEffect(() => {
    fetchData(COIN_GECKO_TOP_100, setCrypts);
  }, [setCrypts]);
  return(
    <div className="base" >
     {
       selected
       ? (<MyChart selectedCurrency={selected} selectCurrency={setSelected}  />)
       :(
        <>
          {crypts
            ? (
              <div className="app-container">
                <div className="header-info" >
                  <h2>Top 100 CryptoCurrency</h2>
                </div>
                <CryptoTable crypts={crypts} selectCurrency={setSelected}/>
              </div>
            )
            : ( <Loading /> )
          }
        </>
       )
     }
    </div>
  )
}