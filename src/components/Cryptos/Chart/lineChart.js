import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import {Loading} from '../../Common/Loading';
import axios from 'axios';
import {HistorySearch} from './historySearch';
import {RangeSlider} from '../../Common/RangeSlider';
import "./lineChart.scss";

export const MyChart = ({selectedCurrency, selectCurrency}) => {
  const [crypts, setCrypts] = React.useState([]);
  const [coinName, setCoinName] = React.useState("")
  const [historicalSearch, setHistoricalSearch] = React.useState('max');
  const [newSearchRange, setNewSearchRange] = React.useState(false);

  React.useEffect(() => {
    async function fetchCoinChart() {
      const coin_id = selectedCurrency.id;
      const coin_name = selectedCurrency.name;
      const url = `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=usd&days=${historicalSearch}&interval=daily`
      if (coin_name) setCoinName(coin_name);
      const result = await axios.get(
        url, {
          headers: { 'accept': 'application/json'},
        },
      );
      const processedData = [];
      {Object.values(result.data.prices).forEach((d) => {
        let date = new Date(d[0]).toLocaleDateString();
        let price = d[1]
        processedData.push({
          date: date,
          price: price,
        });
      })}
      setCrypts(processedData);
    }
    fetchCoinChart();
    setNewSearchRange(false);
  }, [newSearchRange, setNewSearchRange]);

  const renderLineChart = (data) => (
    <ResponsiveContainer width={'100%'} height={600}>
      <LineChart  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="linear" dataKey="price" stroke="yellowgreen" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="price" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>

  );

  const newSearch = (days = null) => {
    if(days) {
      setHistoricalSearch(days);
    }
    setNewSearchRange(true);
    setCrypts([]);
  }

  
  return (
    crypts.length < 1 
      ? (<Loading/>)
      : (
      <div className="container">
        <a 
          className="back-btn" 
          onClick={() => selectCurrency(null)}>
          Return to Table
        </a>
        <h2 className="coin-name">{coinName}</h2>
        <HistorySearch 
          setHistoryRange={newSearch}
          historicalSearch={historicalSearch}  
        />
        <RangeSlider 
          crypts={crypts}
          setHistoricalSearch={setHistoricalSearch}
          historicalSearch={historicalSearch}
          newSearch={newSearch}
        />
        { renderLineChart(crypts) }
      </div>
    )
  );
  
}

