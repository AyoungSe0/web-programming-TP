const BLOCK_TYPES = {
  NORMAL: "일반",
  GLASS: "유리창",
  METAL: "철프레임",
  TIRE: "타이어",
  FUEL: "연료통",
  LIGHT: "라이트",

  ITEM_COOLER: "냉각제",
  ITEM_CUTTER: "고출력 커터",
  // ITEM_BARRIER: "차단막",
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
    { x: 130, y: 90, type: BLOCK_TYPES.GLASS },
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
    { x: 50, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 210, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 50, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 210, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 50, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 210, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 130, type: BLOCK_TYPES.GLASS }
  ],
  3: [
    { x: 50, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 210, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 50, type: BLOCK_TYPES.GLASS },
    { x: 50, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 210, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 50, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 210, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 130, type: BLOCK_TYPES.GLASS }
  ]
};



// === 블럭 색상 매핑 ===. 나중에 이미지로
function getColorByType(type, hitCount = 0) {
  switch (type) {
    case BLOCK_TYPES.METAL:
      if (hitCount === 0) return "#aaa";
      if (hitCount === 1) return "#888";
      if (hitCount === 2) return "#555";
      return "#333";
    case BLOCK_TYPES.TIRE: return "#444";
    case BLOCK_TYPES.FUEL: return "#f00";
    case BLOCK_TYPES.LIGHT: return "#fff";
    case BLOCK_TYPES.GLASS: return "#0ff";
    //case BLOCK_TYPES.ITEM_BARRIER: return "#f5a";
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

function resetGameState() {
  GameState.score = 0;
  GameState.comboScore = 0;
  GameState.comboCount = 0;
  GameState.selectedStage = 1;
  GameState.upgrades = [];
  GameState.failedUpgrades = [];
  GameState.reinforceChances = 0;
  GameState.hasCooler = false;
  GameState.hasCutter = false;
  GameState.barrierCount = 0;
}
$('#retryBtn').on('click', () => {
  resetGameState();
  goToMapScene();
});

$('#restartBtn').on('click', () => {
  resetGameState();
  goToMapScene();
});
// ===== GameStartUI.js =====

// import { goToStoryScene } from './StoryScene.js';

function showStartUI() {
  $('body').html(`
  <div style="text-align:center; position: relative;">
      <canvas id="gameCanvas" width="1000" height="600"
              style="background-color: black; border: none;"></canvas>
  </div> 
  `);



  // 이제 canvas가 DOM에 들어왔기 때문에 여기서 접근 가능
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const bgImage = new Image();
  bgImage.src = "background.png"; // 이미지 경로는 필요시 수정

  const startButtonImg = new Image();
  startButtonImg.src = "StartButton.png";


  bgImage.onload = () => {

    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    drawStartButton(ctx, startButton);

  };

  startButtonImg.onload = () => {
    ctx.drawImage(startButtonImg, 400, 420, 200, 60);
  };

  const button = {
    x: 400,
    y: 420,
    width: 200,
    height: 60
  };


  canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (
      mx >= button.x &&
      mx <= button.x + button.width &&
      my >= button.y &&
      my <= button.y + button.height
    ) {
      // START 버튼 눌렀을 때 실행할 동작
      goToStoryScene();
    }
  });




}

// ===== StoryScene.js =====

// 파일: StoryScene.js - 이름 입력란 조건부 노출로 수정
// import { GameState } from './GameState.js';
// import { goToCharacterSelect } from './CharacterSelector.js';

function goToStoryScene() {
  $('body').html(`
    <div style="text-align:center;">
      <canvas id="gameCanvas" width="1000" height="600" style="background-color:black; border:none;"></canvas>
    </div>
  `);

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const storyText = [
    "폐차장에 버려진 고물차들...",
    "그 안에는 아직 살아있는 부품들이 숨 쉬고 있다.",
    "전설의 폐차 전사, 당신의 이름은?"
  ];
  let storyIndex = 0;
  let nickname = "";

  function drawStoryScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "28px DungGeunMo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(storyText[storyIndex], canvas.width / 2, 300);
  }

  function advanceStory() {
    if (storyIndex < storyText.length - 1) {
      storyIndex++;
      drawStoryScene();
    } else {
      nickname = prompt("당신의 이름은?")?.trim() || "랄푸";
      GameState.nickname = nickname;
      $(document).off('keydown');
      canvas.removeEventListener("click", advanceStory);
      goToCharacterSelect();
    }
  }

  // 마우스 클릭 --> 다음 대사
  canvas.addEventListener("click", advanceStory);

  // 키보드 이벤트: Space --> 다음 / Enter --> Skip
  //앤터 입력시 스킵된다는 문구 추가 필요
  $(document).on("keydown", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      advanceStory();
    } else if (e.code === "Enter") {
      e.preventDefault();
      GameState.nickname = "랄푸";
      $(document).off('keydown');
      canvas.removeEventListener("click", advanceStory);
      goToCharacterSelect();
    }
  });

  drawStoryScene();
}




// ===== CharacterSelector.js =====

// import { GameState } from './GameState.js';
// import { goToMapScene } from './MapScene.js';

// ===== CharacterSelector.js =====

// import { GameState } from './GameState.js';
// import { goToMapScene } from './MapScene.js';

const characters = [
  { name: "야구선수", image: "baseballP.png" },
  { name: "테니스선수", image: "tennisP.png" },
  { name: "축구선수", image: "soccerP.png" }
];
const imageCache = {};

function goToCharacterSelect() {
  $('body').html(`
    <div style="text-align:center;">
      <canvas id="gameCanvas" width="1000" height="600" style="background-color:black; border:none;"></canvas>
    </div>
  `);

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  let currentIndex = 0;
  let selected = false;
  let imagesLoaded = 0;

  // 이미지 프리로드
  characters.forEach(char => {
    const img = new Image();
    img.src = char.image;
    img.onload = () => {
      imageCache[char.name] = img;
      imagesLoaded++;
      if (imagesLoaded === characters.length) {
        drawCharacterScene(ctx, canvas, currentIndex, GameState.nickname, characters, imageCache);
        canvas.addEventListener("click", onClick);
        $(document).on("keydown", onKeyDown);
      }
    };
  });

  function selectCharacter() {
    if (selected) return;
    selected = true;
    GameState.selectedCharacter = characters[currentIndex];
    canvas.removeEventListener("click", onClick);
    $(document).off("keydown", onKeyDown);
    goToMapScene();
  }

  function onClick(e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // 왼쪽 버튼
    if (mx >= canvas.width / 2 - 250 && mx <= canvas.width / 2 - 150 && my >= 340 && my <= 420) {
      currentIndex = (currentIndex - 1 + characters.length) % characters.length;
      drawCharacterScene(ctx, canvas, currentIndex, GameState.nickname, characters, imageCache);
    }

    // 오른쪽 버튼
    if (mx >= canvas.width / 2 + 150 && mx <= canvas.width / 2 + 250 && my >= 340 && my <= 420) {
      currentIndex = (currentIndex + 1) % characters.length;
      drawCharacterScene(ctx, canvas, currentIndex, GameState.nickname, characters, imageCache);
    }

    // 선택 버튼
    if (mx >= canvas.width / 2 - 100 && mx <= canvas.width / 2 + 100 && my >= 460 && my <= 520) {
      selectCharacter();
    }
  }

  function onKeyDown(e) {
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + characters.length) % characters.length;
      drawCharacterScene(ctx, canvas, currentIndex, GameState.nickname, characters, imageCache);
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % characters.length;
      drawCharacterScene(ctx, canvas, currentIndex, GameState.nickname, characters, imageCache);
    } else if (e.key === "Enter") {
      selectCharacter();
    }
  }
}

function drawCharacterScene(ctx, canvas, currentIndex, nickname, characters, imageCache) {
  const char = characters[currentIndex];
  const img = imageCache[char.name];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  // 타이틀
  ctx.font = "28px DungGeunMo, sans-serif";
  ctx.fillText("캐릭터 선택", canvas.width / 2, 80);

  // 환영 메시지
  ctx.font = "20px DungGeunMo, sans-serif";
  ctx.fillText(`${nickname}님 환영합니다!`, canvas.width / 2, 120);

  // 캐릭터 이미지
  if (img && img.complete) {
    const imgW = 200, imgH = 200;
    ctx.drawImage(img, canvas.width / 2 - imgW / 2, 150, imgW, imgH);
  }

  // 캐릭터 이름
  ctx.font = "bold 36px DungGeunMo, sans-serif";
  ctx.fillText(char.name, canvas.width / 2, 380);

  // 좌우 화살표
  ctx.font = "48px DungGeunMo, sans-serif";
  ctx.fillText("⬅️", canvas.width / 2 - 200, 400);
  ctx.fillText("➡️", canvas.width / 2 + 200, 400);

  // 선택 버튼 텍스트
  ctx.fillStyle = "#000";
  ctx.fillRect(canvas.width / 2 - 100, 460, 200, 60);
  // ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.strokeRect(canvas.width / 2 - 100, 460, 200, 60);

  ctx.fillStyle = "white";
  ctx.font = "bold 24px DungGeunMo, sans-serif";
  ctx.fillText("선택", canvas.width / 2, 490);

  // 안내 메시지
  ctx.font = "18px DungGeunMo, sans-serif";
  ctx.fillText("← → 키 or 마우스로 이동, Enter 또는 선택 클릭", canvas.width / 2, 550);
}




// ===== MapScene.js =====

// import { GameState } from './GameState.js';
// import { startStage } from './GameStage.js';
function updateItemUI() {
  const $area = $('#itemStatusArea');
  $area.empty();

  if (GameState.hasCooler) {
    $area.append('<span id="coolerStatus">❄️</span>');
  }
  if (GameState.hasCutter) {
    $area.append('<span id="cutterStatus">🔥</span>');
  }
  if ((GameState.barrierCount || 0) > 0) {
    $area.append(`<span id="barrierStatus">🛡️ ×${GameState.barrierCount}</span>`);
  }
  if ($area.children().length === 0) {
    $area.html('&nbsp;');
  }
}


function goToMapScene() {
  GameState.score = 0;
  GameState.comboScore = 0;
  GameState.comboCount = 0;
  GameState.upgrades = [];
  GameState.failedUpgrades = [];
  GameState.reinforceChances = 0;

  $('body').html(`
    <div style="text-align:center">
      <h2>스테이지 선택</h2>
      <button class="stageBtn" data-stage="1">경차 해체</button>
      <button class="stageBtn" data-stage="2">스포츠카 해체</button>
      <button class="stageBtn" data-stage="3">탱크 해체</button>
      <br><br>
   
  `);

  $('.stageBtn').on('click', function () {
    const stage = parseInt($(this).data('stage'));
    GameState.selectedStage = stage;
    startStage(stage);
  });

}




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
  GameState.hasCooler = false;
  GameState.hasCutter = false;

  comboScore = 0;
  comboCount = 0;
  isGameOver = false;

  $('body').html(`
    <div class="game-container">
      <div class="score">
        총 점수: <span id="score">0</span> 
        / 콤보 횟수: <span id="combo">0</span>
      </div>
      <div class="item-status" id="itemStatusArea"></div>
      <canvas id="gameCanvas" width="500" height="600"></canvas>
    </div>
  `);

  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");

  updateItemUI();

  initGameElements();
  draw();
}

function initGameElements() {
  let speed = 2 + GameState.selectedStage;
  if (GameState.upgrades.includes("스피드업")) {
    speed += 1;
  }
  const angleDeg = Math.random() * 60 + 30; // 30° ~ 90°
  const angleRad = angleDeg * (Math.PI / 180);
  const direction = Math.random() < 0.5 ? -1 : 1;

  ball = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    dx: Math.cos(angleRad) * speed * direction,
    dy: -Math.sin(angleRad) * speed,
    radius: 7,
    speed: speed,
    originalSpeed: speed,
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
    maxHits: block.type === BLOCK_TYPES.METAL ? 3 : 1,
    effectStage: null,
    effectTimer: 0
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

// ✅ 정리된 draw 함수 - 중복 제거 및 반사 보정 포함
function draw() {
  if (isGameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();
  checkGameClear();

  // 벽 반사
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  }

  // 바닥에 닿음
  if (ball.y + ball.dy > canvas.height - ball.radius - paddle.height - 10) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
      if (ball.collidedWithPaddleOnceAfterCooler) {
        ball.speed = ball.originalSpeed || 3;
        ball.collidedWithPaddleOnceAfterCooler = false;
        GameState.hasCooler = false;
        updateItemUI();
      }
    } else {
      if ((GameState.barrierCount || 0) > 0) {
        GameState.barrierCount--;
        updateItemUI();
        cancelAnimationFrame(animationId);
        animationId = null;

        let countdown = 3;
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.color = 'white';
        overlay.style.fontSize = '80px';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '1000';
        overlay.id = 'barrierOverlay';
        document.body.appendChild(overlay);

        const interval = setInterval(() => {
          overlay.textContent = countdown;
          countdown--;
          if (countdown < 0) {
            clearInterval(interval);
            document.body.removeChild(overlay);

            // 공과 패들 위치 초기화
            ball.x = canvas.width / 2;
            ball.y = canvas.height - 30;

            const angleDeg = Math.random() * 60 + 30;
            const angleRad = angleDeg * (Math.PI / 180);
            const direction = Math.random() < 0.5 ? -1 : 1;
            const speed = ball.speed;

            ball.dx = Math.cos(angleRad) * speed * direction;
            ball.dy = -Math.sin(angleRad) * speed;

            paddle.x = (canvas.width - paddle.width) / 2;

            // ✅ draw 직접 호출 대신 안전하게 루프 재개
            animationId = requestAnimationFrame(draw);
          }
        }, 1000);

        return;
      } else {
        gameOver();
        return;
      }
    }
  }

  // 속도 및 반사 보정
  let magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  if (magnitude === 0) {
    ball.dx = 1;
    ball.dy = -1;
    magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  }

  ball.speed = Math.min(ball.speed, ball.originalSpeed || 3);

  // 수직·수평 방지 보정
  const minComponent = 0.3;
  let dxNorm = ball.dx / magnitude;
  let dyNorm = ball.dy / magnitude;
  if (Math.abs(dxNorm) < minComponent) dxNorm = minComponent * Math.sign(dxNorm);
  if (Math.abs(dyNorm) < minComponent) dyNorm = minComponent * Math.sign(dyNorm);
  const normMag = Math.sqrt(dxNorm * dxNorm + dyNorm * dyNorm);
  ball.dx = (dxNorm / normMag) * ball.speed;
  ball.dy = (dyNorm / normMag) * ball.speed;

  ball.x += ball.dx;
  ball.y += ball.dy;

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
    if (b.status === 1 || (b.effectStage !== null && b.effectStage != "gone")) {
      ctx.beginPath();
      ctx.rect(b.x, b.y, 70, 20);

      if (b.effectStage === "pending") {
        b.effectTimer--;
        ctx.fillStyle = "#aaf";  // 효과 색
        if (b.effectTimer <= 0) {
          b.effectStage = "cracking";
        }
      } else if (b.effectStage === "cracking") {
        ctx.fillStyle = "#fff";  // 깨지는 순간 색
        b.status = 0;
        b.effectStage = "gone";
      } else {
        ctx.fillStyle = getColorByType(b.type, b.hitCount);
      }

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
        // case BLOCK_TYPES.ITEM_BARRIER:
        //   handleItemBarrierBlock(b);
        //   break;
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

// === [6] 별 화면 자동 이동 처리 ===
function showStarResult(stars) {
  $('body').html(`
    <div style="text-align:center">
      <h2>스테이지 결과</h2>
      <p>별 획득: ${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</p>
      <p id="autoMessage">다음 단계로 이동 중...</p>
    </div>
  `);

  setTimeout(() => {
    if (stars === 0) {
      showGameOver();
    } else {
      if (GameState.selectedStage >= 3) {
        // ✅ 강화 화면 없이 바로 최종 엔딩으로
        showEnding();
      } else {
        goToUpgrade(stars); // ✅ 1~2스테이지는 강화 화면
      }
    }
  }, 2000);
}



// ===== UpgradeManager.js =====

// import { GameState } from './GameState.js';
// import { startStage } from './GameStage.js';
// import { showEnding } from './EndingScene.js';

function goToUpgrade(stars) {
  window.nextStageTriggered = false;
  let upgradeLocked = false;

  GameState.reinforceChances += stars;

  $('body').html(`
    <div style="text-align:center">
      <h2>강화 화면</h2>
      <div id="upgradeStatus">강화 내역: ${summarizeUpgrades()}</div>
      <p>현재 강화 기회: <span id="chanceDisplay">${GameState.reinforceChances}</span>회</p>
      <select id="upgradeSelect">
        <option value="패들강화">패들 넓이 증가</option>
        <option value="보너스점수">점수 보너스</option>
        <option value="생명">생명</option>
      </select><br><br>
      <button id="tryUpgrade">강화 시도</button>
      <button id="skipUpgrade">강화 건너뛰기</button>
      <div id="resultBox" style="margin-top:15px;font-weight:bold;"></div>
    </div>
  `);

  $('#tryUpgrade').off('click').on('click', () => {
    if (upgradeLocked) return;

    if (GameState.reinforceChances <= 0) {
      $('#resultBox').text("강화 기회가 없습니다.");
      disableUpgradeButtons();
      triggerNextStage();
      return;
    }

    upgradeLocked = true;

    const option = $('#upgradeSelect').val();
    const count = GameState.upgrades.filter(x => x === option).length;
    if (count >= 3) {
      $('#resultBox').text(`${option}은 최대 3회까지만 강화 가능합니다.`);
      upgradeLocked = false;
      return;
    }

    const success = Math.random() < 0.6;
    GameState.reinforceChances--;
    $('#chanceDisplay').text(GameState.reinforceChances);

    if (success) {
      GameState.upgrades.push(option);
      if (option === "생명") {
        GameState.barrierCount = (GameState.barrierCount || 0) + 1;
        updateItemUI();
      }
      $('#resultBox').text(`성공! [${option}] 강화 적용됨.`);
    } else {
      GameState.failedUpgrades.push(option);
      $('#resultBox').text(`실패! [${option}] 강화되지 않았습니다.`);
    }

    $('#upgradeStatus').text(`강화 내역: ${summarizeUpgrades()}`);

    if (GameState.reinforceChances === 0) {
      disableUpgradeButtons();
      triggerNextStage();
    } else {
      // ✅ 강화 기회가 남았으면 다시 누를 수 있게 잠금 해제
      setTimeout(() => {
        upgradeLocked = false;
      }, 800);
    }
  });

  $('#skipUpgrade').off('click').on('click', () => {
    disableUpgradeButtons();
    triggerNextStage();
  });

  function disableUpgradeButtons() {
    $('#tryUpgrade').prop('disabled', true);
    $('#skipUpgrade').prop('disabled', true);
  }

  function triggerNextStage() {
    if (!window.nextStageTriggered) {
      window.nextStageTriggered = true;
      setTimeout(() => {
        proceedToNextStage();
      }, 1500);
    }
  }
}


function summarizeUpgrades() {
  const summary = {};
  GameState.upgrades.forEach(up => {
    summary[up] = (summary[up] || 0) + 1;
  });
  return Object.entries(summary).map(([k, v]) => `${k} x${v}`).join(', ') || '없음';
}

let nextStageTriggered = false;

function proceedToNextStage() {
  nextStageTriggered = false;
  if (nextStageTriggered) return;
  nextStageTriggered = true;

  if (GameState.selectedStage >= 3) {
    showEnding();
  } else {
    GameState.selectedStage++;
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

    $('#restartBtn').on('click', () => {
      resetGameState();
      goToMapScene();
    })
  });

  $('#exitBtn').on('click', () => {
    if (confirm("게임을 종료하고 처음으로 돌아갈까요?")) {
      location.reload();
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


function explodeGlassChain(target, delay = 0, visited = new Set()) {
  let destroyed = 0;
  bricks.forEach(b => {
    const key = `${b.x},${b.y}`;
    if (b.status === 1 && b.type === BLOCK_TYPES.GLASS && !visited.has(key)) {
      const dx = Math.abs(b.x - target.x);
      const dy = Math.abs(b.y - target.y);
      if (dx <= 80 && dy <= 40) {
        b.status = 0;
        b.effectStage = "pending";
        visited.add(key);
        destroyed++;
        destroyed += explodeGlassChain(b, delay + 3, visited);
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
  const prevAngle = Math.atan2(ball.dy, ball.dx);
  let newAngle;

  for (let i = 0; i < 10; i++) {
    const offset = (Math.random() * 120 + 30) * (Math.PI / 180);
    const sign = Math.random() < 0.5 ? -1 : 1;
    newAngle = prevAngle + offset * sign;

    const angleDiff = Math.abs(newAngle - prevAngle) % (2 * Math.PI);
    if (angleDiff > Math.PI / 6) break;
  }

  // 블럭 제거는 즉시
  block.status = 0;

  // 다음 프레임에서 방향 변경 (물리 충돌 이후)
  setTimeout(() => {
    const speed = ball.speed;
    ball.dx = Math.cos(newAngle) * speed;
    ball.dy = Math.sin(newAngle) * speed;
  }, 0);
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
  if (!GameState.hasCooler) {
    ball.originalSpeed = ball.speed;
    ball.speed = Math.max(1, ball.speed - 1);
    ball.collidedWithPaddleOnceAfterCooler = true;
    GameState.hasCooler = true;
  }
  block.status = 0;
  updateItemUI();
}


function handleItemCutterBlock(block) {
  GameState.hasCutter = true;
  block.status = 0;
  updateItemUI();
}

function applyCutterIfAvailable(block) {
  if (!GameState.hasCutter) return false;

  GameState.hasCutter = false;
  updateItemUI();

  switch (block.type) {
    case BLOCK_TYPES.GLASS: handleGlassBlock(block); break;
    case BLOCK_TYPES.FUEL: handleFuelBlock(block); break;
    case BLOCK_TYPES.METAL:
      block.status = 0;
      block.hitCount = block.maxHits;
      break;
    case BLOCK_TYPES.TIRE: handleTireBlock(block); break;
    case BLOCK_TYPES.LIGHT: handleLightBlock(block); break;
    case BLOCK_TYPES.ITEM_COOLER: handleItemCoolerBlock(block); break;
    case BLOCK_TYPES.ITEM_CUTTER: handleItemCutterBlock(block); break;
    case BLOCK_TYPES.ITEM_GUIDE: handleItemGuideBlock(block); break;
    case BLOCK_TYPES.NORMAL:
    default: block.status = 0;
  }

  return true;
}



// function handleItemBarrierBlock(block) {
//   GameState.barrierCount = (GameState.barrierCount || 0) + 1;
//   block.status = 0;
//   updateItemUI();
// }

function handleItemGuideBlock(block) {
  block.status = 0;
  updateItemUI();

  const targetX = paddle.x + paddle.width / 2;
  const targetY = canvas.height - paddle.height - 20 - ball.radius;
  const startX = ball.x;
  const startY = ball.y;
  const duration = 500;
  const startTime = Date.now();
  const originalSpeed = ball.speed;

  function animateGuide() {
    const now = Date.now();
    const t = Math.min((now - startTime) / duration, 1);
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    ball.x = startX + (targetX - startX) * ease;
    ball.y = startY + (targetY - startY) * ease;

    if (t < 1) {
      requestAnimationFrame(animateGuide);
    } else {
      // 무작위 각도로 발사
      const angleDeg = Math.random() * 60 + 30; // 30~90도
      const angleRad = angleDeg * (Math.PI / 180);
      const direction = Math.random() < 0.5 ? -1 : 1;

      ball.dx = Math.cos(angleRad) * originalSpeed * direction;
      ball.dy = -Math.sin(angleRad) * originalSpeed;
      ball.speed = originalSpeed;

      if (GameState.hasCooler) {
        GameState.hasCooler = false;
        ball.collidedWithPaddleOnceAfterCooler = false;
        updateItemUI();
      }
    }
  }

  animateGuide();
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
        // case BLOCK_TYPES.ITEM_BARRIER:
        //   handleItemBarrierBlock(b);
        //   applyScore();
        //   break;
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