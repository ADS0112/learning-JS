'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //Passing multiple parameteres thorugh a function using an object
  // oderDelivery: function ({ starter, main, address, time }) {
  //   console.log(starter, main, address, time);
  // },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
// restaurant.oderDelivery({
//   time: '23',
//   address: '11 yo ave',
//   main: 2,
//   starter: 1,
// });

// DESTRUCTURING ******************************
// Switching variables with destructuring
// let [main, , secdonary] = restaurant.categories;
// [main, , secdonary] = [secdonary, , main];
// console.log(main, secdonary);

// //Return 2 values from a function
// const [starter, mainCourse] = restaurant.order(1, 2);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [1, 4, [5, 6]];
// // const [i, , j] = nested;
// //Get each value out of the array, destructure within a destructure
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values - set r=1 so it is not undefined
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//Destructuring objects*****************************

// const { name, openingHours, categories } = restaurant;
// //Changing original variable names with property name: (desired variable name)
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// //Mutating varibles
// let a = 11;
// let b = 22;
// const obj = { a: 23, b: 9 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;

// console.log(open, close);

//SPREAD OPERATOR **************************

// const arr = [2, 4, 6];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// //Allows us access to individual elements of an array and allows us to pass multiple elements into a function

// console.log(...newArr);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join two or more arrays together

// const menu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables: arrays, strings,maps,sets, not OBJECTS

// const str = 'hey';
// const letters = [...str, '', 'S'];
// console.log(letters);

//Passing multip-le elements into a function

// const ingredients = [
//   prompt('Ingredient 1'),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// restaurant.orderPasta(...ingredients);
// asd;

//Objects ...
// const newRestaurant = { ...restaurant, founder: 'me', foundation: 'juice' };
// console.log(newRestaurant);

//REST OPERATOR - PACK ELEMENTS INTO AN ARRAYT || left side of operator =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [item1, , item2, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(item1, item2, otherFood);

// //REST OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //REST FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3, 5, 6);

// const x = [23, 4, 5];
// add(...x);

// restaurant.orderPizza('mushroom', 'hey', 'ye');

// LOGICAL OPERATORS
// const rest1 = {
//   name: 'ja',
//   guests: 20,
// };
// const rest2 = {
//   name: 'yt',
//   owner: 'hey',
// };

// //OR ASSIGNMENT OPERATOR
// // rest1.guests ||= 10;
// // rest2.guests ||= 10;

// //Nullish operator - only applies if it is null or undefined
// // rest1.guests ??= 10;
// // rest2.guests ??= 10;

// //AND OPERATOR

// // rest1.owner &&= 'no';
// // rest2.owner &&= 'hey';

// console.log(rest1);
// console.log(rest2);

//Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//Task 1
const [players1, players2] = game.players;
// console.log(players1, players2);

//Task 2
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//Task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
