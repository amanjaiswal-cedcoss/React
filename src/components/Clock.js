import React, { Component } from 'react'
import './Clock.css';

   export class Clock extends Component{
        constructor(props) {
          super(props);
          this.state ={
            'time' : this.getCurrentTime()
          }
        }
        getCurrentTime = () =>{
          let hour,minute,second;
          let time = new Date().toLocaleTimeString({'hour':hour,'minute':minute,'second':second});
          return time;
        }
        
        componentDidMount() {
            setInterval(() => {
              this.setState({time:this.getCurrentTime()});
            }, 1000);
        }

    render() {
        
    return (
    <div id="parent">
      <div id="time">{this.state.time}
      </div>
    </div>
    
   )
  }
}

export default Clock