import './App.css';
import { Container } from './Components/Container';

let numbers = [45, 67, 213, 157, 95, 255, 150, 24, 50, 100];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Sorting Algorithms Visualizer</h2>
        <Container numbers={numbers}/>
      </header>
    </div>
  );
}

export default App;



