import React from 'react'
import './App.css';
import { DrinkTable } from '../components/DrinkTables/DrinkTable';
import { NavBar } from '../components/Header/NavBar';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <DrinkTable>
      </DrinkTable>
      <BarFooter>
      </BarFooter>
    </React.Fragment>
  );
}

const BarFooter = () => {
  return(
    <p> BarFooter </p>
  )
}

export default App;
