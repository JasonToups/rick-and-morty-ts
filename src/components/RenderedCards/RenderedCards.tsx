import React from 'react';

import './RenderedCards.scss';
import Card from '../Card/Card';

const RenderedCards = ({ results }: { [key: string]: any }) => {
  // const { useState, useEffect } = React;
  // const [data, setData] = useState(null);
  const count = results.info.count;
  const resultsInfo = results.info;
  const resultsArray = results.results;

  // useEffect(() => {
  //   console.log('setting data');
  //   setData(results);
  //   // printData();
  // }, []);

  // useEffect(() => {
  //   if (data != null) {
  //     console.log('we have data, rendering cards');
  //     renderCards();
  //   } else {
  //     console.log('there is no data');
  //     setData(results);
  //   }
  // }, [data]);

  const renderCards = (array: string[], info: object) => {
    console.log('rendering cards');
    console.log(array);
    interface infoValue {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }
    function printInfo(info: infoValue) {
      console.log(info.count);
    }
    printInfo(resultsInfo);
  };
  renderCards(resultsArray, resultsInfo);

  return (
    <section className='rendered-cards'>
      <div className='rendered-cards--header'>
        <h1>Number of Results: {count}</h1>
      </div>
      <div className='rendered-cards--results'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default RenderedCards;
