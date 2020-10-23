import React from 'react';

import './Home.scss';
import '../../components/HomeHeader/HomeHeader';
import '../../components/Search/Search';
import logo from '../../assets/logo-RickAndMorty.png';
import characteropedia from '../../assets/Characteropedia.png';

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
      <section className='home-header'>
        <div className='logos'>
          <img
            className='home-header--image'
            src={logo}
            alt='rick and morty logo'
          />
          <img
            className='home-header--image'
            src={characteropedia}
            alt='characteropedia'
          />
        </div>
        <div className='search-form'>
          <form>
            <input
              className='search-field'
              type='text'
              placeholder='Search for a character'></input>
            <input
              className='submit-button'
              type='submit'
              value='submit'></input>
          </form>
        </div>
      </section>
      {results ? <RenderedCards data={results} /> : <h1>Loading Image</h1>}
    </section>
  );
};

export default Home;
