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
  console.log(diffTime);
}
