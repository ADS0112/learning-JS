"use strict";

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

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {

//   const applePieces = cutFruitPieces(apples);
//   const ornagePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${ornagePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(3, 2));

//ARRAYS

// const friends = ["Mark", "Jake"];

// //Unshift adds value to beginning of array
// friends.unshift("John");
// console.log(friends);

// //pop removes last element from array
// friends.pop();
// console.log(friends);

// //shift removes first element
// friends.shift();
// console.log(friends);

// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     let tip = bill * 0.15;
//     tips.push(tip);
//     const total = bill + tip;
//     totals.push(total);
//   } else {
//     let tip = bill * 0.2;
//     tips.push(tip);
//     const total = bill + tip;
//     totals.push(total);
//   }
// }
// calcTip(bills[0]);
// calcTip(bills[1]);
// calcTip(bills[2]);
// console.log(tips);
// console.log(totals);

//Objects

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(
//   `${jonas.firstName} has ${jonas["friends"].length} friends, and his best friend is ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   //.this points to whatever is calling the method, in this case its jonas. so .this = jonas. so this.birthyear is jonas.birthyear
//   calcAGe: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAGe()} year old ${
//       this.job
//     }. He has ${this.hasDriversLicense ? "a" : "no"} driver's license}`;
//   },
// };
// console.log(jonas.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// function result() {
//   if (mark.calcBMI() > john.calcBMI()) {
//     console.log(
//       `${mark.fullName} 's BMI (${mark.calcBMI()} is higher than ${
//         john.fullName
//       }'s (${john.calcBMI()}`
//     );
//   } else {
//     console.log(
//       `${john.fullName} 's BMI (${john.calcBMI()} is higher than ${
//         mark.fullName
//       }'s (${mark.calcBMI()}`
//     );
//   }
// }

// console.log(result());
