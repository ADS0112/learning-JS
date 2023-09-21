'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const header = document.querySelector('.header');

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


//Menu fade animation
const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {

    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


//Sticky NAV With Observer API
// const obsCallback = function(entires, observer) {
//   entires.forEach(entry => {
//     console.log(entry)
//   })
// };


// const obsOptions = {
//   root: null,
//   threshhold: [0, 0.2]
// }


// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(entires) {
  const [entry] = entires;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
  
}

const headerObs = new IntersectionObserver(stickyNav,{
  root: null,
  threshhold: 0,
  rootMargin: `-${navHeight}px`,
}
);
headerObs.observe(header);

//Reveal sections

const allSections = document.querySelectorAll('.section');

const revaelSection = function(entires, observer) {
  const [entry] = entires;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};


const sectionObserver =  new IntersectionObserver(revaelSection, {
  root: null,
  threshhold: 0.15
});

allSections.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add('section--hidden');
})

//Lazy Loading 
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));


///Sliders


const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const dotsContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlides = slides.length;

//Slides
const goToSlide = function(slide) {
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i -slide)}%)`);
}
const nextSlide = function () {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

goToSlide(curSlide);  
activateDot(curSlide);
}
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }

goToSlide(curSlide);  
activateDot(curSlide);
}
goToSlide(0);
//Next Slide and Prev Slide
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e){
  e.key === 'ArrowLeft' && prevSlide();
  e.key === 'ArrowRight' && nextSlide();
})

//Dots
const createDots = function() {
  slides.forEach(function(_, i) {
    dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
  });
};

const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
createDots();

dotsContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
    
})
activateDot(0);

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


//Useful event to listen for incase loss of data, askss user if they want to leave page
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
// */