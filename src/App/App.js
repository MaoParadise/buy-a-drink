import React from 'react'
import './App.css';
import { DrinkTable } from '../components/DrinkTables/DrinkTable';
import { NavBar } from '../components/Header/NavBar';
import { Footer } from '../components/Footer/Footer';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <DrinkTable>
      </DrinkTable>
      <Footer />
    </React.Fragment>
  );
}



export default App;
