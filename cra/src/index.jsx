// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';

// legacy模式
// ReactDOM.render()
// Concurrent模式
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('React', React);
console.log('ReactDOM', ReactDOM);
console.log('root', root);

root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <div style={{ border: '1px solid red' }}>
    <App />
  </div>
);
