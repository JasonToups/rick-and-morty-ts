import React from 'react';

import './RenderedCards.scss';
import Card from '../Card/Card';

const RenderedCards = ({ results }: { [key: string]: any }) => {
  const { useState, useEffect } = React;
  const [data, setData] = useState(null);
  const count = results.info.count;
  const info = results.info;
  const resultsArray = results.results;

  console.log(info);
  console.log(resultsArray);

  // useEffect(() => {
  //   console.log('setting data');
  //   setData(results);
  //   // printData();
  // }, []);

  useEffect(() => {
    if (data != null) {
      console.log('we have data, rendering cards');
      renderCards();
    } else {
      console.log('there is no data');
      setData(results);
    }
  }, [data]);

  const renderCards = () => {
    console.log('rendering cards');
    console.log(data);
  };

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
