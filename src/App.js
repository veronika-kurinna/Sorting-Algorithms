import './App.css';
import { Container } from './Components/Container';

let numbers = [45, 67, 213, 157, 95, 255, 122, 24, 50, 100, 36, 280, 112, 135, 79, 190, 87, 267, 234, 169];

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



