import React from 'react';

import './HomeHeader.scss';
import logo from '../../assets/logo-RickAndMorty.png';
import characteropedia from '../../assets/Characteropedia.svg';

import Search from '../Search/Search';

const HomeHeader = () => {
  return (
    <section className='home-header'>
      <div className = 'logos'>
        <img className='home-header--image' src={logo} alt='rick and morty logo'/>
        <img className='home-header--image' src={characteropedia} alt='characteropedia'/>
      </div>
      <div className = 'search-form'>
        <Search/>
        <Search/>
        <Search/>
      </div>
    </section>
  )
};

export default HomeHeader;