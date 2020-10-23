import React from 'react';

import './RenderedCards.scss';

const RenderedCards = ({ data }: { [key: string]: any }) => {
  const { useState, useEffect } = React;
  const [results, setResults] = useState(null);

  useEffect(() => {
    printData();
  }, []);

  const printData = () => {
    console.log(data);
  };

  return (
    <section className='rendered-cards'>
      <div className='rendered-cards--header'>
        <h1>Number of Results:</h1>
      </div>
      <div className='rendered-cards--results'>
        <h1>Card</h1>
        <h1>Card</h1>
        <h1>Card</h1>
        <h1>Card</h1>
      </div>
    </section>
  );
};

export default RenderedCards;
