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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  //Sort
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements">
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => mov * (acc.interestRate / 100))
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//Update UI

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc.movements);
  //Display Balance
  calcPrintBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};
//Event Handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan = Number(inputLoanAmount.value);
  if (loan > 0 && currentAccount.movements.some(mov => mov >= loan * 0.1)) {
    currentAccount.movements.push(loan);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
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

// const checkDog = function (dogsJulia, dogsKate) {
//   const juliaCopy  = [...dogsJulia];
//   const kateCopy = [...dogsKate];
//   juliaCopy.pop();
//   juliaCopy.shift();
//   kateCopy.pop();
//   kateCopy.shift();

//   const finalArray = [...juliaCopy, ...kateCopy];

//   finalArray.forEach(function (final, index, array) {
//     const status = final >= 3 ? 'Adult' : 'Puppy';
//     console.log(`Dog number ${index + 1} is an ${status} and is ${final} years old`);
//   });
// }

// checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// MAP method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;

// const movementsUsd = movements.map(function(mov) {
// return mov *= euroToUsd;
// });

// console.log(movementsUsd);

//FILTER METHODS
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposited = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(deposited);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

//REDUCE METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Accumulator is like a snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);

// console.log(balance);

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

//Challenge 2

// const calcAverageHumanAge = function (ages) {
//   const allHumanAges = ages.map(dogAge =>
//     dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
//   );
//   const adults = allHumanAges.filter(dogAge => dogAge > 18);
//   const average =
//     adults.reduce((acc, dogAge) => acc + dogAge, 0) / adults.length;
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

//CHAINING METHODS
// const euroToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const totalDepoists = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepoists);

//Challenge 3 - chaining
// const calcAverageHumanAge = ages =>
//   ages
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(dogAge => dogAge > 18)
//     .reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

//Find Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Does not return new array only the first element where that condition is met
// const firstWitthdrawal = movements.find(mov => mov < 0);
// console.log(firstWitthdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

//Some and Every method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Allows for us to use a condition instead of equality
// const any = movements.some(mov => mov > 0);
// console.log(any);

//EVERY - only returns if all the elements in the callback method are true
// const any = movements.every(mov => mov > 0);

//Seperate call back - can pass deposit into true and false call back functions like some and every, and filter
// const deposit = mov => mov > 0;

//FLAT method - can join nested arrays together like this - only 1 level deep

// const arr = [1, 2, [3, 4, 5], 7, 5, [2, 3]];
// console.log(arr.flat());

//Deeper levels of nesting - adding diff values of depth in flat
// const arrDeep = [1, 2, [3, [4, 5]], 7, 5, [[2], 3]];
// console.log(arrDeep.flat(2));

//Flat
// const totalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalBalance);

// //Flat Map - only goes one level deep
// const totalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalance2);

//Sorting Arrays

//Mutates original ARRAY* - Sorts alphabetically
// const owners = ['Jim', 'Rim', 'Pim', 'Aim'];
// console.log(owners.sort());

//Sort method only works on strings, so it covnerts everything to strings thats why negative values come first
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // console.log(movements.sort());

// //return < 0, A, B (keep order)
// //reutrn > 0, B, A (switch orer)

// //Ascending
// // movements.sort((a, b) => {
// //   if (a > b) {
// //     return 1;
// //   } else if (b > a) {
// //     return -1;
// //   }
// // });
// //Ascending
// movements.sort((a, b) => a - b);
// console.log(movements);

// movements.sort((a, b) => b - a);

//Creating and Filling Arrays

//Creats an array of 7 empty elements
// const x = new Array(7);

// //Can do x.fill(1, 3, 5) - 1 is the element, 3 is what index it starts, and 5 is index it ends at, does not include that last index actually, just before
// x.fill(1); //mutates underlying array
// console.log(x);

// //Array from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

///Practice
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(bankDepositSum);

// //2.
// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;

// //with reduce method
// const numDeposit10002 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposit10002);

// //3.

// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sums);

// //4. Convert title case

// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word)
//         ? word
//         : word[0].toUpperCase() + word.slice(1).join(' ')
//     );
//   return titleCase;
// };

//Challenge 4

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// console.log(dogs);
// // console.log(dogs.map(dog => dog.weight));

// //2

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   } `
// );
