import React from 'react';
import Tracks from '../tracks/Tracks'; 
import Search from '../tracks/Search';

//Definisco il layout di base

const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <Tracks />
    </React.Fragment>
  );
};

export default Index;
