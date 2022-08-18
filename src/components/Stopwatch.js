import React, { Component } from 'react'
import './Stopwatch.css';
export class Stopwatch extends Component {

  render() {
    return (
      <div><div id="stopwatch">
      <p id="stopHour">00</p>
      :
      <p id="stopMinute">00</p>
      :
      <p id="stopSecond">00</p>:
      <p  id="stopMilisecond">00</p>
     </div>
     <div id="stopwatchBtn">
      <button id="btnStopwatch">Start</button></div></div>
    )
  }
}

export default Stopwatch