'use strict';

const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hiden');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

function openeModal() {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openeModal);
}

btnCloseModal.addEventListener('click', closeModal);

overLay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
