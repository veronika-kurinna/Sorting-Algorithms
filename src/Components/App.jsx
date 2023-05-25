import './../Css/App.css';
import { Content } from './Content';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='app pt-4'>
      <h2 className='header'>Sorting Algorithms Visualizer</h2>
      <Content/>
    </div>
  );
}

export default App;