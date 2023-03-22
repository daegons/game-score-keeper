//p1,p2 점수판 상수저장
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
//p1,p2,reset 버튼 상수저장
const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#reset');
//셀렉트 점수 상수 저장
const scoreSelect = document.querySelector('#maxScore');
//-----------------------------------------------------
let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let isGameOver = false;

p1Btn.addEventListener('click', () => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winScore) {
      // || p1Score === scoreSelect.value
      //   p1Display.style.color = 'blue';
      p1Display.classList.add('has-text-success');
      p2Display.classList.add('has-text-danger');
      isGameOver = true;
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Btn.addEventListener('click', () => {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winScore) {
      // || p2Score === scoreSelect.value
      //   p2Display.style.color = 'blue';
      p2Display.classList.add('has-text-success');
      p1Display.classList.add('has-text-danger');
      isGameOver = true;
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

scoreSelect.addEventListener('change', function () {
  winScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-success', 'has-text-danger');
  p1Btn.disabled = false;
  p2Btn.disabled = false;
  //   p1Display.style.color = 'white';
  //   p2Display.style.color = 'white';
}
