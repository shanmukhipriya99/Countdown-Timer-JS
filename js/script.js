document.getElementById('start-btn').addEventListener('click', () => {
  let inputTime = new Date(document.getElementById('datetime').value).getTime();
  let currentTime = new Date().getTime();
  let diffTime = inputTime - currentTime;
  if (diffTime < 0) {
    alert('Please enter a future time!');
    return;
  }
  startCountdown(inputTime, currentTime, diffTime);
});

function startCountdown(inputTime, currentTime, diffTime) {
  if (diffTime < 0) {
    alert('Countdown Completed!');
    return;
  }
  let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
  document.querySelector('.text.days').innerText = days;
  document.querySelector('.hours').innerText = hours;
  document.querySelector('.minutes').innerText = minutes;
  document.querySelector('.seconds').innerText = seconds;
}
