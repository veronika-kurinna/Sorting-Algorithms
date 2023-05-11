import './App.css';
import { Container } from './Components/Container';
import { generateArray } from './Components/Sorting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Sorting Algorithms Visualizer</h2>
        <Container numbers={generateArray()}/>
      </header>
    </div>
  );
}

export default App;



