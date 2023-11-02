/* eslint-disable */
import React, {useState, useEffect, useLayoutEffect} from 'react';
import './App.css';

const cityName = () => { // 自定义hook如果没有use开头能执行吗
  const [name, setName] = useState('花满楼');

  useLayoutEffect(() => {
    setName('司空摘星');
  }, ['d']);
  useState('燕南飞');

  return [name, setName];
};
function App() {
  useState('a'); // HACK 函数hook链::  a -> 8 -> 4 -> 司空摘星 -> 4 -> 燕南飞 -> End
  useEffect(() => {}, ['b']); // tag: 8 Passive
  useLayoutEffect(() => {}, ['c']); // tag: 4 Layout

  // 实际React不依赖名称执行hook, 而是这里的位置和当前上下文
  const [name, setName] = cityName();

  return (
    <React.StrictMode> {/* HACK fiber链: 3 -> 0 -> 8 -> 5_h2 -> 5_li -> 7 -> 6 -> End */}
      <h3>
        <li id="1">
          <>
            {name}帧循环
            <img />
          </>
          <span id="2">宏任务</span>
        </li>
        <p id="3">时间切片</p>
      </h3>
    </React.StrictMode>
  );
}

export default App;
