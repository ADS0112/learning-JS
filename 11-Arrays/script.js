'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements">
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd'];

// //Creates shallow copy
// console.log(arr.slice(2, 3));

// //Splice - mutates original array, removes the values you assign
// console.log(arr.splice(2));

// //Reverse - mutates original array
// arr = ['a', 'b', 'c', 'd'];
// let arr2 = ['s', 'e', 'f', 'g'];
// console.log(arr.reverse());

// //Concat - does not mutate orginal array

// const letters = arr.concat(arr2);
// console.log(letters);

// //Join
// console.log(letters.join(' - '));

// //AT METHOD
// const dummy = [23, 45, 32, 67];
// console.log(dummy.at(0));
// //Getting last element
// console.log(dummy.at(-1));

//Looping arrays forEach

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You desposited ${movement}`);

//   }else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// //Same way as above but using forEach. forEach iterates over each value
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index}: You desposited ${movement}`);

//   }else {
//     console.log(`Movement ${index}: You desposited ${movement}`);
//   }
// })

// const currencies2 = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies2.forEach(function(value, key, map) {
//   console.log(`${key}, ${value}`);
// })

// const currenciesUnique = new Set(['USD', 'EUR', 'CAD', 'CAD']);

// currenciesUnique.forEach(function(value, key, map) {
//   console.log(`${key}, ${value}`);
// })


//Challenge 1 

const checkDog = function (dogsJulia, dogsKate) {
  const juliaCopy  = [...dogsJulia];
  const kateCopy = [...dogsKate];
  juliaCopy.pop();
  juliaCopy.shift();
  kateCopy.pop();
  kateCopy.shift();

  const finalArray = [...juliaCopy, ...kateCopy];

  finalArray.forEach(function (final, index, array) {
    const status = final >= 3 ? 'Adult' : 'Puppy';
    console.log(`Dog number ${index + 1} is an ${status}`);
  });
}

checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);



checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);