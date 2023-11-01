import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import React, {useState, useEffect, useLayoutEffect} from 'react';
// import './index.css';
// import App from './App';

// legacy模式
// ReactDOM.render()
// Concurrent模式
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('React', React);
console.log('ReactDOM', ReactDOM);
console.log('root', root);

function App() {
  useState('a');
  useEffect(() => {}, ['b']);
  useLayoutEffect(() => {}, ['c']);
  return (
    <React.StrictMode>
      <li id="1">
        <>帧循环 <img /></>
        <span id="2">宏任务</span>
        <p id="3">时间切片</p>
      </li>
    </React.StrictMode>
  );
}

root.render(
  <div style={{border: '1px solid red'}}>
    <App />
  </div>
);
