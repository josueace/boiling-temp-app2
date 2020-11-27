// components/Calculator.js

import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit } from './ConversionFunctions';// model to create helper functions that need other functions
// notice modular programming my functions are in a separate module 

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {    //define state for calculator
      temperature: '', 
      scale: 'c'
      };
  }



  //on means event 
  //on response to event you take action with event handler
  //on edit change  call a fuction 
  // funciton (temperature){
  // this.handlecelciuschange(temperature)
  //} but this is lambda expression is same as temperature=>this.handlercelsiuschange(temperature)
 // then in child you must have  
 /*

childhandler = (e) => {
    this.props.onFieldChange(e.target.value);
  }

  y en input
  onChange={e => this.childhander(e)

    //notice no bind this like lifting stateuyp

    summary event handler handlechange in the parent is passsed as event onhandlechange prop to child
    and in child localhanlder delegates to props event handler to do the action

 */

 // take this to own wiki  git branch -M main os force rename


  handleCelsiusChange = (temperature) => {// 
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={temperature => this.handleCelsiusChange(temperature)} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={temperature => this.handleFahrenheitChange(temperature)} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;