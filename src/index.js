import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let i,j,flag,arrPrime=[];
const prime=()=>{
  for(i=1;i<=100;i++){
    flag=0;
    for(j=2;j<i;j++){
    if(i%j===0){
      flag=1;
    }
    }
    if(flag===0){
      arrPrime.push(i);
    }
  }  
}

prime();
const element=(<ul>
  {arrPrime.map(item => {
    return (
      <li>
        {item} 
      </li>
    )
  })}
</ul>);
root.render(element)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();