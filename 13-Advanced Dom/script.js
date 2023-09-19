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


///////LECTURE

//Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies'; 

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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function (e){
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  //Scrolling
  window.scrollTo({
    left: s1Coords.left  + window.scrollX, top: s1Coords.top + window.scrollY,
    behaviour: 'smooth',
  });