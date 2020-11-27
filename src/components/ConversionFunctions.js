// components/ConversionFunctions.js

export const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  }
    
  export const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  }
  
  export const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
      
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
  
    return rounded.toString();
  }

  // try convert takes a temperature and a coversion function as parameter
  // in client user remember you need to import tryconvert and the two converstion functions
  // here you cannot use export default because you need to export more than one.