import { goToStoryScene } from './StoryScene.js';

export function showStartUI() {
  $('body').html(`
    <div style="text-align:center; font-family: 'DungGeunMo';">
      <h1>폐차왕: 분노의 해체</h1>
      <button id="startBtn">START</button>
    </div>
  `);

  $('#startBtn').on('click', () => {
    goToStoryScene();
  });
}
