
'use strict';
//Construcor functions

// const Person = function (firstName, birthYear) {
//   //Instnace properties, will be available on the instances that are created, such as me
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const me = new Person('Me', 1990);
// console.log(me);
// //1. New Object is created
// //2. function is called, this = {} (the object)
// //3. {} linked to a prototype
// //4. function automatically returns {}

// //Prototypes
// //Prototype of the linked objects on Person, not prototype of person
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// me.calcAge();


//Challeneg 1

// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function(speed) {
//   this.speed += 10;
// }
// Car.prototype.brake = function(speed) {
//   this.speed -= 10;
// }
// const car1 = new Car('BMW', 120);
// console.log(car1);

// car1.brake();
// console.log(car1)

//Es6 Classes


//Class expression
// class PersonCl {
// constructor(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// } 

// calcAge() {
//   console.log(2037 - this.birthYear);
// }
// }

// const jessica = new PersonCl('Jessica', 1990);

//Class declaration
// const PersonCl = class {};

//Setters and Getters

// const account = {
//   owner: 'joe',
//   movements: [200, 300, 400, 200],

//   get latest() {
//     return this.movements.slice(-1).pop();

//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   }
// }


// //Get and Set as now read as properites instead of calling the method
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements)



//Object.crate

// const PersonProto = {
//   calcAge() {
//       console.log(2037 - this.birthYear);
//     }
// }


// const steven = object.create(PersonProto);


//Challenege 2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10
//     console.log(`You are going ${this.speed}km/h`);
//   }
//   brake() {
//     this.speed += 10
//     console.log(`You are going ${this.speed}`);
//   }

//   get speedUS() {
//     return this.speed/1.6;
//   }
//   set speedUS (speed) {
//     this.speed = speed * 1.6;

//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford)
// ford.accelerate();

// console.log(ford.speedUS);
// ford.speedUS = 70;
// console.log(ford)