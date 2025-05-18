import { GameState } from './GameState.js';
import { startStage } from './GameStage.js';

export function goToMapScene() {
  GameState.score = 0;
  GameState.comboScore = 0;
  GameState.comboCount = 0;
  GameState.upgrades = [];
  GameState.failedUpgrades = [];
  GameState.reinforceChances = 3;

  $('body').html(`
    <div style="text-align:center">
      <h2>스테이지 선택</h2>
      <button class="stageBtn" data-stage="1">경차 해체</button>
      <button class="stageBtn" data-stage="2">스포츠카 해체</button>
      <button class="stageBtn" data-stage="3">탱크 해체</button>
      <br><br>
      <button id="exitBtn">게임 종료</button>
    </div>
  `);

  $('.stageBtn').on('click', function () {
    const stage = parseInt($(this).data('stage'));
    GameState.selectedStage = stage;
    startStage(stage);
  });

  $('#exitBtn').on('click', () => {
    if (confirm("게임을 종료할까요?")) {
      location.reload();
    }
  });
}
