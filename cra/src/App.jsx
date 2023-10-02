/* eslint-disable no-undef */
// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  // console.log('workInProgressRoot', workInProgressRoot);
  // console.log('workInProgress', workInProgress);
  // console.log('workInProgressHook', workInProgressHook);
  // debugger;

  const [count, setCount] = useState(0);

  return (
    <span className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={() => {
        setCount(org => org + 2)
      }}>{count}</button>
    </span>
  );
}

export default App;
