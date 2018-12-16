"use strict";

const temperature = function(){
    let fahrenheit = parseInt(prompt("enter the temperature in Fahrenheit"));

    let result = (fahrenheit - 32) * .5556;
    alert ("Your temperature in Celsius is " + result.toFixed(1) + "\xB0.");

    let celcius = parseInt(prompt("enter the temperature in celcius"));

    let result1 = (celcius + 32) / .5556;
    alert ("Your temperature in Celsius is " + result1.toFixed(1) + "\xB0.");
};
temperature();