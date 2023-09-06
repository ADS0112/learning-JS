'use strict';



// // DEFAULT PARAMETERS

// // const bookings = []

// // const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price
// //   }
// // console.log(booking);
// // bookings.push(booking);
// // }
// // createBooking('LY123', 20)

// //VALUES AND REFERENCES 

// // const flights = 'LT453';
// // const person = {
// //   name: 'hey',
// //   passport: 23748234
// // }


// //Functions returning functions

// // const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// // const greeter  = greetArr('hey'); 
// // greeter('Aman');

// const random = {
//   airline: 'tes',
//   iatCode: 'TE',
//   bookings: [],
//   book(flightNum, name) {
//       console.log(`${name} booked a seat on ${this.iatCode}${flightNum}`);

//       this.bookings.push({flights: `${this.iatCode} ${flightNum}`, name})
//   }

// }
// random.book(232, 'Aman');

// const book  = random.book;

// //.call allows us to the .this keyword because it points to the correct object

// book.call(random, 23, 'Hey ya');

// //apply method

// const info = [223, 'Dawg go'];
// book.apply(random, info)

// //MODERN WAY
// book.call(random, ...info);

// //BIND

// const bookRan = book.bind(random);
// bookRan(1, 'Jon')
// //Can also bind agruments
// const bookRan23 = book.bind(random, 23);

// //Events listneres
// random.plane = 300;
// random.buyPlane = function () {
//   this.plane++;
//   console.log(this.plane);
// }

// document.querySelector('.buy'),addEventListener('click', random.buyPlane.bind(random));


// const addTax = rate => value => {
//   return value + value * rate;
//   }


// const fixedRate = addTax(0.23);
// console.log(fixedRate(100));



//Challenge 1
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write Option Number)`));
   
// //Register New answer

//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    
//     this.displayResults();
//     this.displayResults('string');
//   },

 
//   displayResults(type = 'array') {
//     if (type === 'array'){
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll Results are: ${this.answers.join(', ')}`);
//     }
   
//    }
  

//   };
 

//   document.querySelector('.poll').addEventListener('click',  poll.registerNewAnswer.bind(poll))
//   console.log(poll.answers);


//Immediately evoked functions


// Function will only run once. Can only make it work if you wrap in () thenc call it immeidately with ().
// (function() {
//   console.log('Hey');
// })();


//TIMERS - Closures 


//Challenge 3
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const body = document.body;
    body.addEventListener('click', function() {
    header.style.color = 'blue'
  })
  })();
