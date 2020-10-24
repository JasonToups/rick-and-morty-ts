import React from 'react';

import './RenderedCards.scss';
import Card from '../Card/Card';

const RenderedCards = ({ data }: { [key: string]: any }) => {
  const { useState, useEffect } = React;
  const [results, setResults] = useState(null);
  const count = data.info.count;

  useEffect(() => {
    setResults(data);
    // printData();
  }, []);

  useEffect(() => {
    renderCards();
  }, [results]);

  const renderCards = () => {
    if (results != null) {
      console.log(results);
    }
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
