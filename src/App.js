import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);

  console.log('App component render() counter: ', counter)


  function incrementCounter() {
    setCounter((prevValue) => prevValue + 1);
    console.log('new counter', counter)
  }

  return (
    <div className="App">
      <h1>
        Counter: {counter}
      </h1>

      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
