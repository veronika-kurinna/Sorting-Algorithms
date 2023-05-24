import './../App.css';
import { Container } from './Container';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <header>
        <h2 className='header'>Sorting Algorithms Visualizer</h2>
        <Container/>
      </header>
    </div>
  );
}

export default App;