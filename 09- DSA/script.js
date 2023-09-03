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

  //   openingHours: {
  //     thu: {
  //       open: 12,
  //       close: 22,
  //     },
  //     fri: {
  //       open: 11,
  //       close: 23,
  //     },
  //     sat: {
  //       open: 0, // Open 24 hours
  //       close: 24,
  //     },
  //   },
};

// Switching variables with destructuring
let [main, , secdonary] = restaurant.categories;
[main, , secdonary] = [secdonary, , main];
console.log(main, secdonary);

//Return 2 values from a function
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [1, 4, [5, 6]];
// const [i, , j] = nested;
//Get each value out of the array, destructure within a destructure
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values - set r=1 so it is not undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
