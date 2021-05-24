import axios from 'axios';
import {COIN_CHART_DATA} from '../Constants.js';
import React, { useEffect } from 'react';

export const fetchData = async (path, setFunc) => {
  const result = await axios.get(
    path,
    {
      headers: {
        'accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
  setFunc(result.data);
  console.log('res: ', result);
}

export const fetchChartData = async (id, setFunc) => {
  const result = await axios.get(
    COIN_CHART_DATA(id), {
      headers: { 'accept': 'application/json'},
    },
  );
  console.log(result.data.prices)
  const processedData = [];
  {Object.values(result.data.prices).forEach((d) => {
    let date = new Date(d[0]).toLocaleDateString();
    let price = d[1];
    processedData.push({
      date: date,
      price: price,
    });
  })}
  setFunc(processedData);
}

export const useEventListener = (eName, handler, element = window) => {
  const savedHandler = React.useRef();
  React.useEffect( () => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect( () => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eName, eventListener);

    return () => {
      element.removeEventListener(eName, eventListener);
    };
  }, [eName, element] );
}