'use strict';

// Data needed for a later exercise

const openingHours = {
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
};

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

  //Ehhanced object literals
  openingHours,
  //Passing multiple parameteres thorugh a function using an object
  // oderDelivery: function ({ starter, main, address, time }) {
  //   console.log(starter, main, address, time);
  // },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
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
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //Task 1
// const [players1, players2] = game.players;
// // console.log(players1, players2);

// //Task 2
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// //Task 3
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// //Task 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// //Task 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //Task 6
// function printGoals(...names) {
//   console.log(names);
//   console.log(`${names.length} Goals were scored`);
// }

// printGoals(...game.scored);

// //Task 7
// team1 < team2 && console.log('Team 1 more likely');
// team1 > team2 && console.log('Team 2 more likely');

///////////////////////////////////////
// The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

///OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);

//const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

//LOOPING OVER OBJECTS
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

//Coding Challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //Task 1
// const scored = [...game.scored];
// console.log(scored);

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// //Task 2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// //Task 4

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//SETS
// const orderSet = new Set(['hey', 'yo', 'hey', 'yo', 'hey']);

// console.log(orderSet);
// console.log(orderSet.has('yo'));

// for (const order of orderSet) console.log(order);
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

//MAPS********************************

// const rest = new Map();
// rest.set('name', 'joes');
// rest.set(1, 'Hehe');
// rest.set(2, 'xd');
// console.log(rest);

// //Get with key value name, if it is a string, then use a string - gets value of that key
// rest.get('name');
// rest.has('name');
// rest.delete(2);
//rest.size and rest.clear

// Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //Convert map to array
// console.log([...question]);

//Challenge 3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);
// //Task 1

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} min`);

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// WORKING WITH STRINGS
//Can get length of string with .length property,even like 'hey'.length

// const str = 'hey you there';
// console.log(str.indexOf('e'));
// console.log(str.lastIndexOf('e'));

// function checkMiddleSeat(seat) {
//   const s = seat.slice(-1);
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('11C');
// checkMiddleSeat('12B');

// //Comparing emails
// const check = ' lol ';
// const check2 = 'LOl';

// const check3 = check.trim();
// console.log(check3);

// // Can use .replace as wel, replaces letters and whole string

// //Split method for string and join method

// console.log('juice bar'.split(' '));

// const [name, type] = 'juice bar'.split(' ');
// console.log(name, type);

// const newName = ['Fantastic', name, type].join(' ');
// console.log(newName);

// //How to capitalize first letter of each name

// function capitalizeName(name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// }
// capitalizeName('howard and fork smith');
// capitalizeName('joe jam');

// //Padding a string

// const message = 'go to gate 23';
// console.log(message.padStart(23, 'h').padEnd(35, 'u'));

// //Repeat

// const message2 = 'Hey yo';
// console.log(message2.repeat(3));

// //Challennge 4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;

//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

//Last excercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const finalString = `${
//     type.startsWith('_Delayed') ? '🔴' : ''
//   }${type.replaceAll('_', ' ')} From:${getCode(from)} To:${getCode(
//     to
//   )} (${time.replace(':', 'h')})`.padStart(45);
//   console.log(finalString);
// }
