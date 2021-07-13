'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnshow = document.querySelectorAll('.show-modal');

const opnmdl = function () {
  //open modal function
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const clsmdl = function () {
  // close modal function
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < 3; i++) btnshow[i].addEventListener('click', opnmdl);

btnClose.addEventListener('click', clsmdl);
overlay.addEventListener('click', clsmdl);
document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) clsmdl();
});
