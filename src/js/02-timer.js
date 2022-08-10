// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
const btnStart = document.querySelector('button');
btnStart.disabled = true;

function format(data) {
  let arr = data.length;
  console.log(arr);
  if (data.length == 1) {
    console.log('one');
    return `0${data}`;
  } else {
    return data;
  }
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
      return;
    }
    btnStart.disabled = false;
    btnStart.onclick = () => {
      btnStart.disabled = true;
      let time = selectedDates[0] - new Date();

      let timerId = setInterval(() => {
        time = time - 1000;

        let days = Math.floor(time / 1000 / 60 / 60 / 24);

        document.getElementsByTagName('span')[0].innerText = format(
          days.toString()
        );

        let hours = Math.floor(
          (time - days * 1000 * 60 * 60 * 24) / 1000 / 60 / 60
        );
        document.getElementsByTagName('span')[2].innerText = format(
          hours.toString()
        );

        let minutes = Math.floor(
          (time - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60) /
            1000 /
            60
        );
        document.getElementsByTagName('span')[4].innerText = format(
          minutes.toString()
        );

        let seconds = Math.floor(
          (time -
            days * 1000 * 60 * 60 * 24 -
            hours * 1000 * 60 * 60 -
            minutes * 1000 * 60) /
            1000
        );
        console.log('Seconds: ', seconds);
        document.getElementsByTagName('span')[6].innerText = format(
          seconds.toString()
        );
        if (time <= 1000) {
          clearInterval(timerId);
          btnStart.disabled = false;
        }
      }, 1000);
    };
  },
};

flatpickr('#datetime-picker', options);
