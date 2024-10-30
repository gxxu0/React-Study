import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//+++++++++++++++++++++++chapter_03
import Library from "./chapter_03/Library";

/** 
//import문을 사용하여 라이브러리 컴포넌트를 가져온 뒤, react-dom을 사용하여 root DOM 노드에 랜더링 하도록 함.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
    <App />
  </React.StrictMode>
);
*/

//+++++++++++++++++++++++chapter_04
import Clock from "./chapter_04/Clock";

/**
setInterval(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Library />
      <Clock/>
      <App />
    </React.StrictMode>
  );
}, 1000)
 */

//+++++++++++++++++++++++chapter_05
import CommentList from './chapter_05/CommentList';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Library />
    <Clock />
    <CommentList />
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
