import React from 'react';
import logo from '../../assets/logo-RickAndMorty.png';
import characteropedia from '../../assets/Characteropedia.svg';

import Search from '../../components/Search/Search'

const Home = () => {
  return (
    <section>
      <div className = 'header'>
        <img src={logo} alt='rick and morty logo'/>
        <img src={characteropedia} alt='characteropedia'/>
      </div>
      <Search/>
    </section>
  )
}

export default Home;