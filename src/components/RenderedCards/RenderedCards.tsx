import React from 'react';

import './RenderedCards.scss';
import Card from '../Card/Card';

const RenderedCards = ({ results }: { [key: string]: any }) => {
  const resultsInfo = results.info;
  const count = resultsInfo.count;
  const pages = resultsInfo.pages;
  const next = resultsInfo.next;
  const prev = resultsInfo.prev;

  // const returnArray = [];

  const resultsArray = results.results;

  const renderCards = (array: object[], info: object) => {
    console.log('rendering cards');
    interface infoValue {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }
    const returnArray = [];
    for (let x = 0; x < resultsArray.length; x++) {
      console.log(returnArray);
      returnArray.push(
        <Card
          key={resultsArray[x].id}
          imgSrc={resultsArray[x].image}
          imgAlt={resultsArray[x].name}
          name={resultsArray[x].name}
          status={resultsArray[x].status}
          species={resultsArray[x].species}
          gender={resultsArray[x].gender}
          location={resultsArray[x].location}
          episode={resultsArray[x].episode[0]}
        />,
      );
    }
    console.log(returnArray);
    return returnArray;
    // printInfo(resultsInfo);
    // printArray(resultsArray);
    // createCards();
  };
  renderCards(resultsArray, resultsInfo);

  return (
    <section className='rendered-cards'>
      <div className='rendered-cards--header'>
        <h1>Number of Results: {count}</h1>
      </div>
      <div className='rendered-cards--results'>
        <Card
          imgSrc='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          imgAlt='Rick Sanchez'
          name='Rick Sanchez'
          status='Alive'
          species='Human'
          gender='Male'
          location='Earth (Replacement Dimension)'
          episode='1'
        />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default RenderedCards;
