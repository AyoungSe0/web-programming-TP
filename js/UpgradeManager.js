import { GameState } from './GameState.js';
import { startStage } from './GameStage.js';
import { showEnding } from './EndingScene.js';

export function goToUpgrade(stars) {
  GameState.reinforceChances += stars;

  $('body').html(`
    <div style="text-align:center">
      <h2>강화 화면</h2>
      <div id="upgradeStatus">강화 내역: ${summarizeUpgrades()}</div>
      <p>현재 강화 기회: <span id="chanceDisplay">${GameState.reinforceChances}</span>회</p>
      <select id="upgradeSelect">
        <option value="패들강화">패들 넓이 증가</option>
        <option value="보너스점수">점수 보너스</option>
      </select><br><br>
      <button id="tryUpgrade">강화 시도</button>
      <button id="skipUpgrade">강화 건너뛰기</button>
      <div id="resultBox" style="margin-top:15px;font-weight:bold;"></div>
    </div>
  `);

  $('#tryUpgrade').on('click', () => {
    if (GameState.reinforceChances <= 0) {
      $('#resultBox').text("강화 기회가 없습니다.");
      return;
    }

    const option = $('#upgradeSelect').val();
    const count = GameState.upgrades.filter(x => x === option).length;
    if (count >= 3) {
      $('#resultBox').text(`${option}은 최대 3회까지만 강화 가능합니다.`);
      return;
    }

    const success = Math.random() < 0.6;
    GameState.reinforceChances--;
    $('#chanceDisplay').text(GameState.reinforceChances);

    if (success) {
      GameState.upgrades.push(option);
      $('#resultBox').text(`성공! [${option}] 강화 적용됨.`);
    } else {
      GameState.failedUpgrades.push(option);
      $('#resultBox').text(`실패! [${option}] 강화되지 않았습니다.`);
    }

    $('#upgradeStatus').text(`강화 내역: ${summarizeUpgrades()}`);
  });

  $('#skipUpgrade').on('click', () => {
    proceedToNextStage(); // 사용자가 직접 클릭했을 때만 진행
  });
}

function summarizeUpgrades() {
  const summary = {};
  GameState.upgrades.forEach(up => {
    summary[up] = (summary[up] || 0) + 1;
  });
  return Object.entries(summary).map(([k, v]) => `${k} x${v}`).join(', ') || '없음';
}

function proceedToNextStage() {
  GameState.selectedStage++;

  if (GameState.selectedStage > 3) {
    showEnding();
  } else {
    startStage(GameState.selectedStage);
  }
}
