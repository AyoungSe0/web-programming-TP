import { GameState } from './GameState.js';
import { goToMapScene } from './MapScene.js';

export function showEnding() {
  $('body').html(`
    <div style="text-align:center">
      <h2>최종 엔딩</h2>
      <p>${GameState.nickname}님의 총 점수: ${GameState.score + GameState.comboScore}</p>
      <p>강화 성공: ${GameState.upgrades.join(', ') || "없음"}</p>
      <button id="restartBtn">게임 다시 시작</button>
      <button id="exitBtn">게임 종료</button>
    </div>
  `);

  $('#restartBtn').on('click', () => {
    GameState.score = 0;
    GameState.comboScore = 0;
    GameState.comboCount = 0;
    GameState.selectedStage = 1;
    GameState.upgrades = [];
    GameState.failedUpgrades = [];
    GameState.reinforceChances = 3;

    goToMapScene(); // 유지
  });

  $('#exitBtn').on('click', () => {
    if (confirm("게임을 종료하고 처음으로 돌아갈까요?")) {
      location.reload(); // 🔁 안전하고 간단
    }
  });
}

export function showGameOver() {
  $('body').html(`
    <div style="text-align:center">
      <h2>GAME OVER</h2>
      <p>다시 도전해보세요!</p>
      <button id="retryBtn">게임 다시 시작</button>
      <button id="exitBtn">게임 종료</button>
    </div>
  `);

  $('#retryBtn').on('click', () => {
    GameState.score = 0;
    GameState.comboScore = 0;
    GameState.comboCount = 0;
    GameState.selectedStage = 1;
    GameState.upgrades = [];
    GameState.failedUpgrades = [];
    GameState.reinforceChances = 3;

    goToMapScene();
  });

  $('#exitBtn').on('click', () => {
      location.reload();
    
  });
}
