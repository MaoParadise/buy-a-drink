import React from 'react'
import './App.css';
import { DrinkTable } from '../components/DrinkTables/DrinkTable';
import { NavBar } from '../components/Header/NavBar';
import { Footer } from '../components/Footer/Footer';
import { Information } from '../components/Information/Information';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <DrinkTable />
      <Information />
      <Footer />
    </React.Fragment>
  );
}



export default App;
