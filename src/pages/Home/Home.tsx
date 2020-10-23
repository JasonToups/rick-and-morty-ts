import React from 'react';

import './Home.scss';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import RenderedCards from '../../components/RenderedCards/RenderedCards';

const Home = () => {
  return (
    <section>
      <HomeHeader />
      <RenderedCards />
    </section>
  );
};

export default Home;
