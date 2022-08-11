// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  setTimeout(() => {
    for (i = 1; i <= Number(amount.value); i++) {
      createPromise(i, Number(delay.value) + Number(step.value) * (i - 1))
        .then(({ position, del }) => {
          console.log(`✅ Fulfilled promise ${position} in ${del} ms`);
        })
        .catch(({ position, del }) => {
          console.log(`❌ Rejected promise ${position} in ${del} ms`);
        });
    }
  }, Number(delay.value));
});

function createPromise(position, del) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, del });
      } else {
        reject({ position, del });
      }
    }, del);
  });
}
