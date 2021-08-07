import React from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Tiles from './Components/Tiles/Tiles';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Tiles />
    </React.Fragment>
  );
}

export default App;
