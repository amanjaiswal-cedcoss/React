import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
let hr=0,min=0,sec=0,mil=99,stopwatchClick=1,Interval;

  const handleClick = () => {
    stopwatchClick++;
    if(stopwatchClick%2==0){
      Interval=setInterval(Counter,10)
      root2.render(<div id="stopwatchBtn">
<button id="btnStopwatch" onClick={handleClick}>Stop</button></div>)
      
  }
        else{
          clearInterval(Interval)
          root2.render(<div id="stopwatchBtn">
          <button id="btnStopwatch" onClick={handleClick}>Start</button></div>)
        }
  }

  
function Counter(){


  if (mil < 99) {
    mil++;
  }
  else {
    mil = 0;
    if (sec < 59) {
        sec++;
    } else {
        sec = 0;
        if (min < 59) {
            min++;
        } else {
            min = 0;
            if (hr < 59) {
                hr++;
            }
        }
    }
  }
  console.log(hr,min,sec,mil);
 
  root.render(
    <div id="parent">
      <div id="stopwatch">
        <p id="stopHour">{hr}</p>
      :
      <p id="stopMinute">{min}</p>
      :
      <p id="stopSecond">{sec}</p>:
      <p  id="stopMilisecond">{mil}</p>
      </div>
    </div>
      
      )
  
}
root2.render(<div id="stopwatchBtn">
<button id="btnStopwatch" onClick={handleClick}>Start</button></div>)
// let Interval=setInterval(Counter,10);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
