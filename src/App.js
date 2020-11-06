import './App.css';
import Card from './Components/Card'
import Intervalor from  './Components/Intervalo'
function App() {
  return (
    <div className="App">
      <h1>Exercicio react-redux (Simples)</h1>
      <div className="linha">

      <Intervalor></Intervalor>
  
      </div>

      <div className="linha">
      <Card title="Card 2" green>x</Card>
      <Card title="card 3" blue>y</Card>
      <Card title="card 4" purple>y</Card>
      </div>
    </div>
  );
}
 
export default App;
