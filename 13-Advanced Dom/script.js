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

btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  //Scrolling - supporting old browsers
  // window.scrollTo({
  //   left: s1Coords.left + window.scrollX,
  //   top: s1Coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  //Modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})

//   })
// })

//1. Add event listener to common parent element
//2. Determine what element orignated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching strategies
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Components

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //Guard Clause
  if (!clicked) return;

  //Remove active Tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //Active Tab
  clicked.classList.add('operations__tab--active');

  //Remoave active content area
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////LECTURE////////////////////////////////

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

// const randomInt = (min, max) => Math.floor(Math.random() * (max -min+1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   //Stop Propogration
//   // e.stopPropagation();
// })
// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   //Stop Propogration
//   // e.stopPropagation();
// }, true)

//DOM Traversing

// const h1 = document.querySelector('h1');

// //Going downwards: Child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);

// //Going upwards: parents
// console.log(h1.parentNode);
// //cloest finds parents no matter how far up the DOM tree
// // h1.closest('.header').style.backgroundColor = 'black';

// //Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// //if we want all siblingfs
// console.log(h1.parentElement.children);
