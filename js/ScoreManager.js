import { goToUpgrade } from './UpgradeManager.js';
import { showGameOver } from './EndingScene.js';
import { GameState } from './GameState.js';

export function showScoreResult() {
  const total = GameState.score + GameState.comboScore;
  let stars = 0;
  if (total >= 300) stars = 3;
  else if (total >= 200) stars = 2;
  else if (total >= 100) stars = 1;

  showStarResult(stars);
}

function showStarResult(stars) {
  $('body').html(`
    <div style="text-align:center">
      <h2>스테이지 결과</h2>
      <p>별 획득: ${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</p>
      <button id="nextBtn">다음</button>
    </div>
  `);

  $('#nextBtn').on('click', () => {
    if (stars === 0) showGameOver();
    else goToUpgrade(stars);
  });
}
