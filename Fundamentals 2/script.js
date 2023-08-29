'use strict';

// function logger() {
//   console.log('hey');
// }
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges); 
// }

// function describeCountry(country, population, capitalCity) {

//   const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return countryDescription;
// }

// const country1 = describeCountry('Finland', 6, 'Helsinki');
// console.log(country1);  


// ARROW FUNCTIONS

// const age1 = birthYear => 2037 - birthYear;

// const calcAge = age1(1991);
// console.log(calcAge); 


// Multiple parameteres for arrow function
// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }


// Using Functions calling other Functions 


function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {

  const applePieces = cutFruitPieces(apples);
  const ornagePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${ornagePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(3, 2));