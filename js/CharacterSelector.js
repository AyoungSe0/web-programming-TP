import { GameState } from './GameState.js';
import { goToMapScene } from './MapScene.js';

const characters = ["야구선수", "축구선수", "메카닉"];
let index = 0;

export function goToCharacterSelect() {
  index = 0;

  $('body').html(`
    <div style="text-align:center">
      <h2>캐릭터 선택</h2>
      <p>${GameState.nickname}님 환영합니다!</p>
      <p style="font-size:24px;">
        <span id="leftBtn">⬅️</span>
        <span id="charName">${characters[index]}</span>
        <span id="rightBtn">➡️</span>
      </p>
      <p>← → 키로 이동, Enter 키로 선택</p>
    </div>
  `);

  $(document).off('keydown').on('keydown', function (e) {
    if (e.key === "ArrowLeft") {
      index = (index - 1 + characters.length) % characters.length;
      $('#charName').text(characters[index]);
    } else if (e.key === "ArrowRight") {
      index = (index + 1) % characters.length;
      $('#charName').text(characters[index]);
    } else if (e.key === "Enter") {
      GameState.selectedCharacter = characters[index];
      $(document).off('keydown');
      goToMapScene();
    }
  });
}
