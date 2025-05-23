const BLOCK_TYPES = {
  NORMAL: "일반",
  GLASS: "유리창",
  METAL: "철프레임",
  TIRE: "타이어",
  FUEL: "연료통",
  LIGHT: "라이트",

  ITEM_COOLER: "냉각제",
  ITEM_CUTTER: "고출력 커터",
  ITEM_BARRIER: "차단막",
  ITEM_GUIDE: "유도로봇팔",
};

const levelBlockLayouts = {
  1: [
    { x: 50, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 210, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 50, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 90, type: BLOCK_TYPES.NORMAL },
    { x: 210, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 50, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 210, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 130, type: BLOCK_TYPES.GLASS }
  ],

  2: [
    { x: 50, y: 50, type: BLOCK_TYPES.NORMAL },
    { x: 130, y: 50, type: BLOCK_TYPES.TIRE },
    { x: 210, y: 50, type: BLOCK_TYPES.FUEL },
    { x: 290, y: 50, type: BLOCK_TYPES.METAL },
    { x: 370, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 50, y: 90, type: BLOCK_TYPES.LIGHT },
    { x: 130, y: 90, type: BLOCK_TYPES.NORMAL },
    { x: 210, y: 90, type: BLOCK_TYPES.TIRE },
    { x: 290, y: 90, type: BLOCK_TYPES.FUEL },
    { x: 370, y: 90, type: BLOCK_TYPES.METAL },
    { x: 50, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 130, type: BLOCK_TYPES.LIGHT },
    { x: 210, y: 130, type: BLOCK_TYPES.NORMAL },
    { x: 290, y: 130, type: BLOCK_TYPES.TIRE },
    { x: 370, y: 130, type: BLOCK_TYPES.FUEL }
  ],
  3: [
    { x: 50, y: 50, type: BLOCK_TYPES.NORMAL },
    { x: 130, y: 50, type: BLOCK_TYPES.TIRE },
    { x: 210, y: 50, type: BLOCK_TYPES.FUEL },
    { x: 290, y: 50, type: BLOCK_TYPES.METAL },
    { x: 370, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 50, y: 90, type: BLOCK_TYPES.LIGHT },
    { x: 130, y: 90, type: BLOCK_TYPES.NORMAL },
    { x: 210, y: 90, type: BLOCK_TYPES.TIRE },
    { x: 290, y: 90, type: BLOCK_TYPES.FUEL },
    { x: 370, y: 90, type: BLOCK_TYPES.METAL },
    { x: 50, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 130, type: BLOCK_TYPES.LIGHT },
    { x: 210, y: 130, type: BLOCK_TYPES.NORMAL },
    { x: 290, y: 130, type: BLOCK_TYPES.TIRE },
    { x: 370, y: 130, type: BLOCK_TYPES.FUEL }
  ]
};



// === 블럭 색상 매핑 ===. 나중에 이미지로
function getColorByType(type) {
  switch (type) {
    case BLOCK_TYPES.METAL: return "#777";
    case BLOCK_TYPES.TIRE: return "#444";
    case BLOCK_TYPES.FUEL: return "#f00";
    case BLOCK_TYPES.LIGHT: return "#fff";
    case BLOCK_TYPES.GLASS: return "#0ff";
    case BLOCK_TYPES.ITEM_BARRIER: return "#f5a";
    case BLOCK_TYPES.ITEM_COOLER: return "#5af";
    case BLOCK_TYPES.ITEM_CUTTER: return "#fa0";
    case BLOCK_TYPES.ITEM_GUIDE: return "#5f5";
    case BLOCK_TYPES.NORMAL:
    default: return "#ccc";
  }
}

// ===== GameState.js =====

const GameState = {
  nickname: "",
  selectedCharacter: null,
  selectedStage: 1,
  score: 0,
  comboScore: 0,
  comboCount: 0,
  upgrades: [],
  failedUpgrades: [],
  reinforceChances: 3,
  settings: {
    bgm: true,
    sfx: true,
    cursor: true,
  },
  mapVisitedOnce: false
};


// ===== GameStartUI.js =====

// import { goToStoryScene } from './StoryScene.js';

function showStartUI() {
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


// ===== StoryScene.js =====

// 파일: StoryScene.js - 이름 입력란 조건부 노출로 수정
// import { GameState } from './GameState.js';
// import { goToCharacterSelect } from './CharacterSelector.js';

function goToStoryScene() {
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


// ===== CharacterSelector.js =====

// import { GameState } from './GameState.js';
// import { goToMapScene } from './MapScene.js';

const characters = ["야구선수", "축구선수", "메카닉"];
let index = 0;

function goToCharacterSelect() {
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


// ===== MapScene.js =====

// import { GameState } from './GameState.js';
// import { startStage } from './GameStage.js';

function goToMapScene() {
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


// ===== GameStage.js =====

// import { GameState } from './GameState.js';
// import { showScoreResult } from './ScoreManager.js';
// import { goToMapScene } from './MapScene.js';
// import { goToStoryScene } from './StoryScene.js';

let canvas, ctx;
let ball, paddle, bricks;
let score = 0;
let comboScore = 0;
let comboCount = 0;
let comboTimer = null;
let isGameOver = false;
let animationId = null;

function startStage(stageNumber) {
  score = 0;
  comboScore = 0;
  comboCount = 0;
  isGameOver = false;

  $('body').html(`
    <div class="game-container">
      <div class="score">
        총 점수: <span id="score">0</span> 
        / 콤보 횟수: <span id="combo">0</span>
      </div>
      <canvas id="gameCanvas" width="500" height="600"></canvas>
    </div>
  `);

  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");

  initGameElements();
  draw();
}

function initGameElements() {
  let speed = 2 + GameState.selectedStage;
  if (GameState.upgrades.includes("스피드업")) {
    speed += 1;
  }

  ball = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    dx: speed,
    dy: -speed,
    radius: 7,
    speed: speed
  };

  let basePaddleWidth = 80 - GameState.selectedStage * 10;
  if (GameState.upgrades.includes("패들강화")) {
    basePaddleWidth += 20;
  }

  paddle = {
    height: 12,
    width: basePaddleWidth,
    x: (canvas.width - basePaddleWidth) / 2,
    rightPressed: false,
    leftPressed: false
  };

  const layout = levelBlockLayouts[GameState.selectedStage];
  bricks = layout.map(block => ({
    x: block.x,
    y: block.y,
    type: block.type,
    status: 1,
    hitCount: 0,
    maxHits: block.type === BLOCK_TYPES.METAL ? 3 : 1
  }));

  $(document).off('keydown').on('keydown', function (e) {
    if (e.key === "ArrowRight") paddle.rightPressed = true;
    if (e.key === "ArrowLeft") paddle.leftPressed = true;
  });

  $(document).on('keyup', function (e) {
    if (e.key === "ArrowRight") paddle.rightPressed = false;
    if (e.key === "ArrowLeft") paddle.leftPressed = false;
  });
}


function draw() {
  if (isGameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();
  checkGameClear();

  // 벽 충돌 검사
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }

  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius - paddle.height - 10) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      gameOver();
      return;
    }
  }

  // ✅ 속도 조절 반영 (정규화 + 방어코드 포함)
  let magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  if (magnitude === 0) {
    // 방향이 완전히 사라졌을 경우 기본 방향 부여
    ball.dx = 1;
    ball.dy = -1;
    magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  }
  const vx = (ball.dx / magnitude) * ball.speed;
  const vy = (ball.dy / magnitude) * ball.speed;

  ball.x += vx;
  ball.y += vy;

  // 패들 이동
  if (paddle.rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += 5;
  } else if (paddle.leftPressed && paddle.x > 0) {
    paddle.x -= 5;
  }

  animationId = requestAnimationFrame(draw);
}


function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, canvas.height - paddle.height - 10, paddle.width, paddle.height);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

// === drawBricks ===
function drawBricks() {
  bricks.forEach(b => {
    if (b.status === 1) {
      ctx.beginPath();
      ctx.rect(b.x, b.y, 70, 20);
      ctx.fillStyle = getColorByType(b.type);
      ctx.fill();
      ctx.closePath();
    }
  });
}

function collisionDetection() {
  bricks.forEach(b => {
    if (b.status === 1 &&
      ball.x > b.x && ball.x < b.x + 70 &&
      ball.y > b.y && ball.y < b.y + 20) {

      // 고출력 커터 효과 우선 적용
      if (applyCutterIfAvailable(b)) {
        ball.dy = -ball.dy;
        score += 10;
        return;
      }

      switch (b.type) {
        case BLOCK_TYPES.NORMAL:
          handleNormalBlock(b);
          break;
        case BLOCK_TYPES.METAL:
          handleMetalBlock(b);
          break;
        case BLOCK_TYPES.GLASS:
          handleGlassBlock(b);
          break;
        case BLOCK_TYPES.FUEL:
          handleFuelBlock(b);
          break;
        case BLOCK_TYPES.TIRE:
          handleTireBlock(b);
          break;
        case BLOCK_TYPES.LIGHT:
          handleLightBlock(b);
          break;
        case BLOCK_TYPES.ITEM_COOLER:
          handleItemCoolerBlock(b);
          break;
        case BLOCK_TYPES.ITEM_CUTTER:
          handleItemCutterBlock(b);
          break;
        case BLOCK_TYPES.ITEM_BARRIER:
          handleItemBarrierBlock(b);
          break;
        case BLOCK_TYPES.ITEM_GUIDE:
          handleItemGuideBlock(b);
          break;
        default:
          b.status = 0;
      }

      ball.dy = -ball.dy;
      score += 10;
    }
  });
}



function checkGameClear() {
  const cleared = bricks.every(b => b.status === 0);
  if (cleared) {
    endGame();
  }
}



function gameOver() {
  cancelAnimationFrame(animationId);
  isGameOver = true;
  GameState.score = score + comboScore;
  $(document).off('keydown');
  $(document).off('keyup');

  $('body').html(`
    <div style="text-align:center">
      <h2>GAME OVER</h2>
      <button id="retryBtn">레벨 선택으로</button>
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

function endGame() {
  cancelAnimationFrame(animationId);
  isGameOver = true;
  GameState.score = score;
  GameState.comboScore = comboScore;
  $(document).off('keydown');
  $(document).off('keyup');
  showScoreResult();
}


// ===== ScoreManager.js =====

// import { goToUpgrade } from './UpgradeManager.js';
// import { showGameOver } from './EndingScene.js';
// import { GameState } from './GameState.js';

function showScoreResult() {
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


// ===== UpgradeManager.js =====

// import { GameState } from './GameState.js';
// import { startStage } from './GameStage.js';
// import { showEnding } from './EndingScene.js';

function goToUpgrade(stars) {
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


// ===== EndingScene.js =====

// import { GameState } from './GameState.js';
// import { goToMapScene } from './MapScene.js';

function showEnding() {
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

function showGameOver() {
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


// ===== Settings.js =====

// import { GameState } from './GameState.js';

function toggleBGM() {
  GameState.settings.bgm = !GameState.settings.bgm;
}


// ===== webTP.js =====

// import { showStartUI } from './GameStartUI.js';

$(document).ready(() => {
  showStartUI();
});

function handleNormalBlock(block) {
  block.status = 0;
}
function handleGlassBlock(block) {
  const count = explodeGlassChain(block);
  applyScore(count, 10);
}


function explodeGlassChain(target) {
  let destroyed = 0;
  bricks.forEach(b => {
    if (b.status === 1 && b.type === BLOCK_TYPES.GLASS) {
      const dx = Math.abs(b.x - target.x);
      const dy = Math.abs(b.y - target.y);
      if (dx <= 80 && dy <= 40) {
        b.status = 0;
        destroyed++;
        destroyed += explodeGlassChain(b);
      }
    }
  });
  return destroyed;
}

function handleMetalBlock(block) {
  block.hitCount++;
  if (block.hitCount >= block.maxHits) {
    block.status = 0;
  }
}

function handleTireBlock(block) {
  ball.dx = (Math.random() - 0.5) * 6;
  ball.dy = -Math.abs(ball.dy);
  block.status = 0;
}

function handleFuelBlock(block) {
  const count = explodeFuelChain(block);
  applyScore(count, 15);
}

function explodeFuelChain(center) {
  let destroyed = 0;
  bricks.forEach(b => {
    if (b.status === 1) {
      const dx = Math.abs(b.x - center.x);
      const dy = Math.abs(b.y - center.y);
      if (dx <= 80 && dy <= 40) {
        if (b.type === BLOCK_TYPES.METAL) {
          b.hitCount++;
          if (b.hitCount >= b.maxHits) {
            b.status = 0;
            destroyed++;
          }
        } else {
          b.status = 0;
          destroyed++;

          if (b.type === BLOCK_TYPES.FUEL) {
            destroyed += explodeFuelChain(b);
          }
          if (b.type === BLOCK_TYPES.GLASS) {
            destroyed += explodeGlassChain(b);
          }
        }
      }
    }
  });
  return destroyed;
}

function destroySurroundingBlocks(center) {
  bricks.forEach(b => {
    if (b.status === 1) {
      const dx = Math.abs(b.x - center.x);
      const dy = Math.abs(b.y - center.y);
      if (dx <= 80 && dy <= 40) {
        b.status = 0;
      }
    }
  });
}
function handleLightBlock(block) {
  flashScreen();
  block.status = 0;
}

function flashScreen() {
  document.body.style.backgroundColor = "black";
  setTimeout(() => {
    document.body.style.backgroundColor = "white";
    setTimeout(() => {
      document.body.style.backgroundColor = "#f0f0f0";
    }, 100);
  }, 100);
}
function handleItemCoolerBlock(block) {
  ball.speed = Math.max(1, ball.speed - 1);
  block.status = 0;
}
function handleItemCutterBlock(block) {
  GameState.hasCutter = true;
  block.status = 0;
}

// 이후 collisionDetection 내부에서 적용 필요:
function applyCutterIfAvailable(block) {
  if (GameState.hasCutter) {
    block.status = 0;
    GameState.hasCutter = false;
    return true; // 처리 완료
  }
  return false;
}
function handleItemBarrierBlock(block) {
  GameState.barrierCount = (GameState.barrierCount || 0) + 1;
  block.status = 0;
}
function handleItemGuideBlock(block) {
  ball.dy = -Math.abs(ball.dy);
  ball.dx = (paddle.x + paddle.width / 2 - ball.x) / 10;
  block.status = 0;
}

function applyScore(numBlocks = 1, baseScore = 10) {
  comboCount += numBlocks;
  comboScore += comboCount * 5;
  score += baseScore * numBlocks;

  $('#score').text(score + comboScore);
  $('#combo').text(comboCount);

  if (comboTimer) clearTimeout(comboTimer);
  comboTimer = setTimeout(() => {
    comboCount = 0;
    $('#combo').text("0");
  }, 1500);
}


function collisionDetection() {
  bricks.forEach(b => {
    if (b.status === 1 &&
      ball.x > b.x && ball.x < b.x + 70 &&
      ball.y > b.y && ball.y < b.y + 20) {

      // 고출력 커터 효과 우선 적용
      if (applyCutterIfAvailable(b)) {
        applyScore();
        ball.dy = -ball.dy;
        return;
      }

      switch (b.type) {
        case BLOCK_TYPES.NORMAL:
          handleNormalBlock(b);
          applyScore();
          break;
        case BLOCK_TYPES.METAL:
          handleMetalBlock(b);
          applyScore();
          break;
        case BLOCK_TYPES.GLASS:
          handleGlassBlock(b);
          break;
        case BLOCK_TYPES.FUEL:
          handleFuelBlock(b);
          break;
        case BLOCK_TYPES.TIRE:
          handleTireBlock(b);
          applyScore(1, 20);
          break;
        case BLOCK_TYPES.LIGHT:
          handleLightBlock(b);
          applyScore(1, 10);
          break;
        case BLOCK_TYPES.ITEM_COOLER:
          handleItemCoolerBlock(b);
          applyScore();
          break;
        case BLOCK_TYPES.ITEM_CUTTER:
          handleItemCutterBlock(b);
          applyScore();
          break;
        case BLOCK_TYPES.ITEM_BARRIER:
          handleItemBarrierBlock(b);
          applyScore();
          break;
        case BLOCK_TYPES.ITEM_GUIDE:
          handleItemGuideBlock(b);
          applyScore();
          break;
        default:
          b.status = 0;
          applyScore();
      }

      ball.dy = -ball.dy;
    }
  });
}