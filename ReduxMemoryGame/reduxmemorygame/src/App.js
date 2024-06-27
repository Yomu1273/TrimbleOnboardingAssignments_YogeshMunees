import { Provider } from 'react-redux';
import './App.css';
import Memory from './Memory';

function App() {
  return (
    <div className="App">
      <h1>Memory Test using Redux</h1>
      <div>
          <Memory/>
      </div>
    </div>
  );
}

export default App;
