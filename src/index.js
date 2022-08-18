import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const arrCities=["Lucknow","Agra","New Delhi","Jaipur","Mumbai","Pune","Bangalore","Shimla","Buxwaha","Bokaro"];
let arrCitiesB=[];
for(let i=0;i<arrCities.length;i++){
  if(arrCities[i].charAt(0)=="B"){
    arrCitiesB.push(arrCities[i])
  }
}
const element=(<ul>
  {arrCitiesB.map(item => {
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
