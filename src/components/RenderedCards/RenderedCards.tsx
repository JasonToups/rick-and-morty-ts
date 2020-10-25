import React from 'react';

import './RenderedCards.scss';
import Card from '../Card/Card';

const RenderedCards = ({ results }: { [key: string]: any }) => {
  const resultsArray = results.results;
  const resultsInfo = results.info;
  const count = resultsInfo.count;
  const pages = resultsInfo.pages;
  const next = resultsInfo.next;
  const prev = resultsInfo.prev;

  interface RenderedCards {
    renderCards: Function;
    result: object[];
  }

  // const returnArray = [];

  const renderCards = (array: object[], info: object): JSX.Element[] => {
    console.log('rendering cards');
    interface infoValue {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }
    const holdArray = [];

    // array.map(result: Card) => {
    //   return <div>result</div>

    // }
    // TODO BUG - When I loop over the response array to push new Card components to it, it's not pushing JSX into the array. So when I go to render the array on the dom, it's not JSX, it's an object.
    for (let x = 0; x < array.length; x++) {
      console.log(array[x].id);
      holdArray.push(
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
    const returnArray = Array.isArray(holdArray);
    console.log(typeof returnArray);
    return holdArray;
    // printInfo(resultsInfo);
    // printArray(resultsArray);
    // createCards();
  };
  // renderCards(resultsArray, resultsInfo);

  return (
    <section className='rendered-cards'>
      <div className='rendered-cards--header'>
        <h1>Number of Results: {count}</h1>
      </div>
      <div className='rendered-cards--results'>
        {renderCards(resultsArray, resultsInfo)}
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
