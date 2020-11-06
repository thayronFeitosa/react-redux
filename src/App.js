import './App.css';
import React, { useState } from 'react'
import Intervalor from './Components/Intervalo';
import Media from './Components/Media';
import Soma from './Components/Soma';
import Sorteio from './Components/Sorteio';



function App() {

  const [min, setMin] = useState([])
  const [max, setMax] = useState([])

  return (
    <div className="App">
      <h1>Exercicio react-redux (Simples)</h1>
      <div className="linha">

        <Intervalor min={min} max={max}
        onMinChange={setMin}
        onMaxChange={setMax}
        >

        </Intervalor>

      </div>

      <div className="linha">
        <Media min={min} max={max} ></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}>y</Sorteio>
      </div>
    </div>
  );
}

export default App;
