import React from 'react';

import './Home.scss';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import RenderedCards from '../../components/RenderedCards/RenderedCards';

const Home = () => {
  const { useState, useEffect } = React;
  const [results, setResults] = useState(null);
  const [renderCards, setRenderCards] = useState(null);
  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setResults(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <section>
      <HomeHeader />
      <RenderedCards />
    </section>
  );
};

export default Home;
