function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;
btnStop.disabled = true;

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}

btnStart.addEventListener('click', () => {
  btnStop.disabled = false;

  btnStart.disabled = true;
  timerId = setInterval(() => {
    changeColor();
  }, 1000);

  btnStop.addEventListener('click', () => {
    btnStart.disabled = false;
    btnStop.disabled = true;

    clearInterval(timerId);
  });
});
