import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countHandler = () =>{
    setCount((prevState) => prevState + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
      {count}
      <button onClick={e=>countHandler()}>Increment Counter</button>
      </header>
    </div>
  );
}

export default App;
