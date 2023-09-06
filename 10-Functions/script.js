'use strict';



// DEFAULT PARAMETERS

// const bookings = []

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
// console.log(booking);
// bookings.push(booking);
// }
// createBooking('LY123', 20)

//VALUES AND REFERENCES 

// const flights = 'LT453';
// const person = {
//   name: 'hey',
//   passport: 23748234
// }


//Functions returning functions

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// const greeter  = greetArr('hey'); 
// greeter('Aman');

const random = {
  airline: 'tes',
  iatCode: 'TE',
  bookings: [],
  book(flightNum, name) {
      console.log(`${name} booked a seat on ${this.iatCode}${flightNum}`);

      this.bookings.push({flights: `${this.iatCode} ${flightNum}`, name})
  }

}
random.book(232, 'Aman');

const book  = random.book;

//.call allows us to the .this keyword because it points to the correct object

book.call(random, 23, 'Hey ya');

//apply method

const info = [223, 'Dawg go'];
book.apply(random, info)

//MODERN WAY
book.call(random, ...info);