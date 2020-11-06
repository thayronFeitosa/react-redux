import './App.css';
import React from 'react'
import Intervalor from './Components/Intervalo';
import Media from './Components/Media';
import Soma from './Components/Soma';
import Sorteio from './Components/Sorteio';



function App() {

  return (
    <div className="App">
      <h1>Exercicio react-redux (Simples)</h1>
      <div className="linha">

        <Intervalor >

        </Intervalor>

      </div>

      <div className="linha">
        <Media ></Media>
        <Soma ></Soma>
        <Sorteio>y</Sorteio>
      </div>
    </div>
  );
}

export default App;
