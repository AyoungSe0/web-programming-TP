import { GameState } from './GameState.js';

export function toggleBGM() {
  GameState.settings.bgm = !GameState.settings.bgm;
}
