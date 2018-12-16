"use strict";

function cooking() {
    const gallonsToLiters = function(gallons) {
        return(gallons*3.785411784);
    };

    let gallons = parseInt(prompt("Enter the amount of gallons to be converted to liters"));

    alert(gallonsToLiters(gallons));

    const litersToGallons = function(liters) {
        return(liters/3.785411784);
    };

    let liters = parseInt(prompt("Enter the amount of liters to be converted to gallons"));

    alert(litersToGallons(liters));
}
cooking();