'use strict';
//Construcor functions

const Person = function (firstName, birthYear) {
  //Instnace properties, will be available on the instances that are created, such as me
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const me = new Person('Me', 1990);
console.log(me);
//1. New Object is created
//2. function is called, this = {} (the object)
//3. {} linked to a prototype
//4. function automatically returns {}

//Prototypes
//Prototype of the linked objects on Person, not prototype of person
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
me.calcAge();
