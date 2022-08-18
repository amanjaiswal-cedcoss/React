import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let fact=1,i;
const factorial=(num)=>{
  for(i=1;i<=num;i++){
    fact*=i;
  }
  return fact;
}
let element=factorial(6);
root.render(<h1>{element}</h1>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
