/* eslint-disable no-undef */
// import logo from './logo.svg';
import './App.css';
import {useState, useEffect, Component} from 'react';

const cityName = () => {
  // eslint-disable-next-line
  const [name, setName] = useState('');

  // eslint-disable-next-line
  useEffect(() => {
    setName('陆小凤');
  }, []);

  return [name, setName];
};

function AppFN() {
  // console.log('workInProgress', workInProgress);
  // console.log('workInProgressRoot', workInProgressRoot);
  // console.log('workInProgressHook', workInProgressHook);
  // debugger;

  const [count, setCount] = useState(0);

  // 实际React不依赖名称执行hook, 而是这里的位置和当前上下文
  const [name, setName] = cityName();

  return (
    <span className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button
        onClick={() => {
          setCount(org => (org + 73) % 321);
        }}>
        {count}
      </button>
      <button
        onClick={() => {
          setName(org => (org !== '燕南飞' ? '燕南飞' : '司空摘星'));
        }}>
        {name}
      </button>
    </span>
  );
}

class AppClass extends Component {
  render() {
    // debugger;
    return (
      <div>
        <p>this is class comp</p>
      </div>
    );
  }
}

export default AppClass;
// export default AppFN;
