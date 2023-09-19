'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function (e){
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  //Scrolling - supporting old browsers
  // window.scrollTo({
  //   left: s1Coords.left + window.scrollX,
  //   top: s1Coords.top + window.scrollY,
  //   behavior: 'smooth', 
  // });


  //Modern browsers
  section1.scrollIntoView({behavior: 'smooth'})
});


///////LECTURE

//Creating and inserting elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies'; 

// .prepend adds the elemnt as the first child of the element and .append adds it as the last child
//Insert multiple copes of the same element
//header.append(message.cloneNode(true));

//Before and after
//header.before(message) - before the header
//header.after(message)

///removing elements
//.remove

//Styles
//getComputedStyle((message).color) - contains all the properties unless we specify like .color

// document.documentElement.style.setProperty('--color-primary', 'orangered')

//Attributes 
// const logo = document.querySelector('nav__logo');
// //Can get default properties 
// console.log(logo.alt);

// //Can get custom properties
// console.log(logo.getAttribute('custon-name'));



//Events
//Multiple types of events such as mouseeneter and onclock. There are onproperties for most events like click would be onclick

// With addeEeventLisnter we can add removeEventListner to make it only occur once
//Can use setTimeout as well

//Bubbling and Capturing

const randomInt = (min, max) => Math.floor(Math.random() * (max -min+1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  //Stop Propogration
  // e.stopPropagation();
})
document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  //Stop Propogration
  // e.stopPropagation();
}, true)