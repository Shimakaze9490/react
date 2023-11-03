import ReactDOM from 'react-dom/client'; // 新版
// import ReactDOM from 'react-dom'; // 旧版
import React from 'react';
import App from './App';
import './Scheduler.ts';

window.flag = false;

// console.log('ReactDOM', ReactDOM);
// console.log('React', React);


/* HACK 挂载容器 */
const rootDom = document.getElementById('root');

const app = <App />;

/* HACK Legacy模式 */
// const root = ReactDOM.render(app, rootDom, () => {
//   console.log(`渲染完成!`);
// });

/* HACK Concurrent模式 */
const root = ReactDOM.createRoot(rootDom);
root.render(app);

// console.log('rootDom', rootDom);
// console.log('root', root);
// console.log('app', app);
