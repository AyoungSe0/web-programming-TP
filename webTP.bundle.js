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
    { x: 50, y: 50, type: BLOCK_TYPES.ITEM_BARRIER},
    { x: 130, y: 50, type: BLOCK_TYPES.ITEM_COOLER },
    { x: 210, y: 50, type: BLOCK_TYPES.ITEM_COOLER },
    { x: 290, y: 50, type: BLOCK_TYPES.ITEM_COOLER },
    { x: 370, y: 50, type: BLOCK_TYPES.ITEM_COOLER },
    { x: 50, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 210, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 290, y: 90, type: BLOCK_TYPES.GLASS },
    { x: 370, y: 90, type: BLOCK_TYPES.ITEM_CUTTER },
    { x: 50, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 130, type: BLOCK_TYPES.ITEM_BARRIER },
    { x: 210, y: 130, type: BLOCK_TYPES.ITEM_BARRIER },
    { x: 290, y: 130, type: BLOCK_TYPES.ITEM_BARRIER },
    { x: 370, y: 130, type: BLOCK_TYPES.ITEM_GUIDE }
  ],

  2: [
    { x: 50, y: 50, type:  BLOCK_TYPES.TIRE },
    { x: 130, y: 50, type: BLOCK_TYPES.TIRE },
    { x: 210, y: 50, type:  BLOCK_TYPES.TIRE},
    { x: 290, y: 50, type:  BLOCK_TYPES.TIRE },
    { x: 370, y: 50, type:  BLOCK_TYPES.TIRE },
    { x: 50, y: 90, type:  BLOCK_TYPES.TIRE},
    { x: 130, y: 90, type:  BLOCK_TYPES.TIRE },
    { x: 210, y: 90, type: BLOCK_TYPES.TIRE },
    { x: 290, y: 90, type:  BLOCK_TYPES.TIRE },
    { x: 370, y: 90, type: BLOCK_TYPES.METAL },
    { x: 50, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 130, type: BLOCK_TYPES.LIGHT },
    { x: 210, y: 130, type: BLOCK_TYPES.NORMAL },
    { x: 290, y: 130, type: BLOCK_TYPES.TIRE },
    { x: 370, y: 130, type: BLOCK_TYPES.FUEL }
  ],
  3: [
    { x: 50, y: 50, type: BLOCK_TYPES.METAL },
    { x: 130, y: 50, type: BLOCK_TYPES.METAL },
    { x: 210, y: 50, type: BLOCK_TYPES.METAL },
    { x: 290, y: 50, type: BLOCK_TYPES.METAL },
    { x: 370, y: 50, type: BLOCK_TYPES.METAL },
    { x: 50, y: 90, type: BLOCK_TYPES.METAL },
    { x: 130, y: 90, type: BLOCK_TYPES.METAL },
    { x: 210, y: 90, type: BLOCK_TYPES.METAL},
    { x: 290, y: 90, type: BLOCK_TYPES.METAL },
    { x: 370, y: 90, type: BLOCK_TYPES.METAL },
    { x: 50, y: 130, type: BLOCK_TYPES.GLASS },
    { x: 130, y: 130, type: BLOCK_TYPES.LIGHT },
    { x: 210, y: 130, type: BLOCK_TYPES.NORMAL },
    { x: 290, y: 130, type: BLOCK_TYPES.TIRE },
    { x: 370, y: 130, type: BLOCK_TYPES.FUEL }
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
  { name: "야구선수", image: "야구선수.jpeg" },
  { name: "축구선수", image: "축구선수.jpeg" },
  { name: "메카닉", image: "메카닉.jpeg" }
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
  if (GameState.barrierCount > 0) {
    $area.append(`<span id="barrierStatus">🛡️×${GameState.barrierCount}</span>`);
  }
  if (GameState.hasCutter) {
    $area.append('<span id="cutterStatus">🔥</span>');
  }
}


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
  }

  if (ball.y + ball.dy > canvas.height - ball.radius - paddle.height - 10) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;

      // 슬로우 복구 처리
      if (ball.collidedWithPaddleOnceAfterCooler) {
        ball.speed = ball.originalSpeed || 3;
        ball.collidedWithPaddleOnceAfterCooler = false;
      }
    } else {
      if ((GameState.barrierCount || 0) > 0) {
        GameState.barrierCount--;
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

            ball.x = canvas.width / 2;
            ball.y = canvas.height - 30;
            ball.dx = 2;
            ball.dy = -2;
            ball.speed = 3;

            draw();
          }
        }, 1000);

        return;
      } else {
        gameOver();
        return;
      }
    }
  }

  let magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  if (magnitude === 0) {
    ball.dx = 1;
    ball.dy = -1;
    magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  }
  const vx = (ball.dx / magnitude) * ball.speed;
  const vy = (ball.dy / magnitude) * ball.speed;

  ball.x += vx;
  ball.y += vy;

  if (paddle.rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += 5;
  } else if (paddle.leftPressed && paddle.x > 0) {
    paddle.x -= 5;
  }

  animationId = requestAnimationFrame(draw);
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
  GameState.barrierCount = 0;
  updateItemUI();

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
  }

  if (ball.y + ball.dy > canvas.height - ball.radius - paddle.height - 10) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;

      // 슬로우 복구 처리
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

            ball.x = canvas.width / 2;
            ball.y = canvas.height - 30;
            ball.dx = 2;
            ball.dy = -2;
            ball.speed = 3;

            draw();
          }
        }, 1000);

        return;
      } else {
        gameOver();
        return;
      }
    }
  }


 let magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  if (magnitude === 0) {
    ball.dx = 1;
    ball.dy = -1;
    magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  }
  const vx = (ball.dx / magnitude) * ball.speed;
  const vy = (ball.dy / magnitude) * ball.speed;

  ball.x += vx;
  ball.y += vy;

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
      ctx.fillStyle = getColorByType(b.type, b.hitCount);
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
  if (GameState.hasCutter) {
    GameState.hasCutter = false;
    updateItemUI();
    block.status = 0;
    return true;
  }
  return false;
}
function handleItemBarrierBlock(block) {
  GameState.barrierCount = (GameState.barrierCount || 0) + 1;
  block.status = 0;
  updateItemUI(); 
}

function handleItemGuideBlock(block) {
  block.status = 0;
  updateItemUI();

  const targetX = paddle.x + paddle.width / 2;
  const targetY = canvas.height - paddle.height - 20 - ball.radius;
  const startX = ball.x;
  const startY = ball.y;
  const duration = 500;
  const startTime = Date.now();

  function animateGuide() {
    const now = Date.now();
    const t = Math.min((now - startTime) / duration, 1);
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    ball.x = startX + (targetX - startX) * ease;
    ball.y = startY + (targetY - startY) * ease;

    if (t < 1) {
      requestAnimationFrame(animateGuide);
    } else {
      ball.dx = 0;
      ball.dy = -2;
      ball.speed = 3;


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