let countdownInterval;

document.getElementById('start-btn').addEventListener('click', () => {
  clearInterval(countdownInterval);
  document.getElementsByTagName('h1')[0].innerHTML = '<h1>Countdown Timer</h1>';
  document.querySelector('.days').innerHTML = 0;
  document.querySelector('.hours').innerHTML = 0;
  document.querySelector('.minutes').innerHTML = 0;
  document.querySelector('.seconds').innerHTML = 0;
  if (isNaN(new Date(document.getElementById('datetime').value).getTime())) {
    alert('Invalid date and time. Please enter a valid date and time.');
    return;
  }
  startCountdown();
  countdownInterval = setInterval(() => {
    startCountdown();
  }, 1000);
});

function startCountdown() {
  const inputTime = new Date(
    document.getElementById('datetime').value
  ).getTime();
  const currentTime = new Date().getTime();
  const diffTime = inputTime - currentTime;
  if (diffTime < 0) {
    clearInterval(countdownInterval);
    document.getElementsByTagName('h1')[0].innerHTML =
      '<h1>Countdown Completed!🎉</h1>';
    document.querySelector('.days').innerHTML = 0;
    document.querySelector('.hours').innerHTML = 0;
    document.querySelector('.minutes').innerHTML = 0;
    document.querySelector('.seconds').innerHTML = 0;
    return;
  }
  let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;
}
