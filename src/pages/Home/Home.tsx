import React from 'react';
import logo from '../../assets/logo-RickAndMorty.png';
import characteropedia from '../../assets/Characteropedia.svg';

const Home = () => {
  return (
    <section>
      <div className = 'header'>
        <img src={logo} alt='rick and morty logo'/>
        <img src={characteropedia} alt='characteropedia'/>
      </div>
    </section>
  )
}

export default Home;