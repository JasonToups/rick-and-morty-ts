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
    const returnArray = [];
    console.log('rendering cards');
    interface infoValue {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }
    function printInfo(info: infoValue) {
      console.log(info.count);
    }
    interface arrayValue {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: object;
      location: object;
      image: string;
      episode: string[];
      url: string;
      created: string;
    }
    function printArray(results: arrayValue) {
      console.log(results.id);
    }

    printInfo(resultsInfo);
    // for (let x = 0; x < array.length; x++) {
    //   printArray(array);
    // }
  };
  renderCards(resultsArray, resultsInfo);

  return (
    <section className='rendered-cards'>
      <div className='rendered-cards--header'>
        <h1>Number of Results: {count}</h1>
      </div>
      <div className='rendered-cards--results'>
        <Card imgSrc='https://rickandmortyapi.com/api/character/avatar/1.jpeg' />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default RenderedCards;
