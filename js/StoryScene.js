// 파일: StoryScene.js - 이름 입력란 조건부 노출로 수정
import { GameState } from './GameState.js';
import { goToCharacterSelect } from './CharacterSelector.js';

export function goToStoryScene() {
  let storyText = [
    "폐차장에 버려진 고물차들...",
    "그 안에는 아직 살아있는 부품들이 숨 쉬고 있다.",
    "전설의 폐차 전사, 당신의 이름은?"
  ];
  let index = 0;

  $('body').html(`
    <div style="text-align:center">
      <div id="storyBox" style="margin-bottom:20px; min-height:60px;">${storyText[0]}</div>
      <input id="nickname" placeholder="닉네임 입력" style="display:none">
      <div id="nicknameLineBreak" style="display:none"><br><br></div>
      <button id="nextLine">다음</button>
      <button id="skipBtn">Skip</button>
    </div>
  `);

  $('#nextLine').on('click', () => {
    index++;
    if (index < storyText.length) {
      $('#storyBox').text(storyText[index]);
      if (index === storyText.length - 1) {
        $('#nickname').show();
        $('#nicknameLineBreak').show();
      }
    } else {
      GameState.nickname = $('#nickname').val().trim() || "랄푸";
      goToCharacterSelect();
    }
  });

  $('#skipBtn').on('click', () => {
    GameState.nickname = "랄푸";
    goToCharacterSelect();
  });
}
