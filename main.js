const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
};
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
};

const resetBtn = document.querySelector('#reset');
//셀렉트 점수 상수 저장
const scoreSelect = document.querySelector('#maxScore');
//-----------------------------------------------------

let winScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winScore) {
      // || p1Score === scoreSelect.value
      //   p1Display.style.color = 'blue';
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      isGameOver = true;
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', () => {
  updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
  updateScores(p2, p1);
});

scoreSelect.addEventListener('change', function () {
  winScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
