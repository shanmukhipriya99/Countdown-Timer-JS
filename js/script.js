document.getElementById('start-btn').addEventListener('click', () => {
  startCountdown();
});

function startCountdown() {
  let inputTime = new Date(document.getElementById('datetime').value).getTime();
  let currentTime = new Date().getTime();
  let diffTime = inputTime - currentTime;
  if (diffTime < 0) {
    alert('Please enter a future time!');
    return;
  }
  let seconds = Math.floor(diffTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  console.log(days);
}
