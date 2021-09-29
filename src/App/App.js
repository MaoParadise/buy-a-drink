import React from 'react'
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <BarHeader>
      </BarHeader>
      <DrinkTable>
      </DrinkTable>
      <BarFooter>
      </BarFooter>
    </React.Fragment>
  );
}

const BarHeader = () => {
  return(
    <p> BarHeader </p>
  )
}


const DrinkTable = () =>{
  return(
    <p> DrinkTable </p>
  )
}

const BarFooter = () => {
  return(
    <p> BarFooter </p>
  )
}

export default App;
