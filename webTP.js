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
  bgImage.src = "startPage.png"; // 이미지 경로는 필요시 수정

  const startButtonImg = new Image();
  startButtonImg.src = "StartBtn.png";

  const startButtonHoverImg = new Image();
  startButtonHoverImg.src = "StartBtnHover.png";

  const button = {
    x: 400,
    y: 420,
    width: 200,
    height: 60
  };


  let isHoveringStartBtn = false;
  let imagesLoaded = 0;

  function tryDrawStartScene() {
    if (imagesLoaded === 2) {
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(startButtonImg, button.x, button.y, button.width, button.height);
    }
  }

  bgImage.onload = () => {
    imagesLoaded++;
    tryDrawStartScene();
  };

  startButtonImg.onload = () => {
    imagesLoaded++;
    tryDrawStartScene();
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

  function drawStartButton(ctx) {
    const img = isHoveringStartBtn ? startButtonHoverImg : startButtonImg;
    ctx.drawImage(img, 400, 420, 200, 60);
  }

  canvas.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const hovering = mx >= 400 && mx <= 600 && my >= 420 && my <= 480;
    if (hovering !== isHoveringStartBtn) {
      isHoveringStartBtn = hovering;
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      drawStartButton(ctx);
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
  let isEnteringName = false;
  let promptBoxImageLoaded = false;

  const promptBoxImage = new Image();
  promptBoxImage.src = "pop-up.png";
  promptBoxImage.onload = () => {
    promptBoxImageLoaded = true;
    if (isEnteringName) {
      drawNameInputBox();
    }
  };;

  function drawStoryScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "28px DungGeunMo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(storyText[storyIndex], canvas.width / 2, 300);
  }


  //이름 입력 받는 창 띄움
  //조합형이 적용이 안되므로 html에서 관련된 소스 불러와 사용 중
  function drawNameInputBox() {
    drawStoryScene();

    const boxWidth = promptBoxImage.width || 400;
    const boxHeight = promptBoxImage.height || 160;
    const boxX = (canvas.width - boxWidth) / 2;
    const boxY = (canvas.height - boxHeight) / 2 - 40;

    if (promptBoxImageLoaded) {
      ctx.drawImage(promptBoxImage, boxX, boxY);
    }

    ctx.fillStyle = "white";
    ctx.font = "24px DungGeunMo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("당신의 이름은?", canvas.width / 2, boxY + 40);

    const composed = Hangul.assemble(nickname.split(''));
    ctx.fillText(composed + "_", canvas.width / 2, boxY + 85);
  }

  function advanceStory() {
    if (storyIndex < storyText.length - 1) {
      storyIndex++;
      drawStoryScene();
      if (storyIndex === storyText.length - 1) {
        isEnteringName = true;
        drawNameInputBox();
      }
    }
  }

  // 마우스 클릭 --> 다음 대사
  canvas.addEventListener("click", advanceStory);

  // 키보드 이벤트: Space --> 다음 / Enter --> Skip
  //앤터 입력시 스킵된다는 문구 추가 필요
  $(document).on("keydown", (e) => {
    if (!isEnteringName) {
      if (e.code === "Space") {
        e.preventDefault();
        advanceStory();
      } else if (e.code === "Enter") {
        e.preventDefault();
        GameState.nickname = "랄푸";
        $(document).off("keydown");
        canvas.removeEventListener("click", advanceStory);
        goToCharacterSelect();
      }
    } else {
      // 이름 입력 중
      if (e.key === "Backspace") {
        nickname = nickname.slice(0, -1);
      } else if (e.key.length === 1 && nickname.length < 10) {
        nickname += e.key;
      } else if (e.key === "Enter") {
        const composed = Hangul.assemble(nickname.split('')).trim() || "랄푸";
        GameState.nickname = composed;
        isEnteringName = false;
        $(document).off("keydown");
        canvas.removeEventListener("click", advanceStory);
        goToCharacterSelect();
        return;
      }
      drawNameInputBox();
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

// 캐릭터 선택 화면 구현 (캔버스 기반) - 시각 효과 강화 및 배경, 말풍선 추가 버전
// 주요 기능:
// 1. 3개의 캐릭터를 한 화면에 표시
// 2. 가운데 캐릭터는 컬러와 원본 크기, 좌우 캐릭터는 작고 흐리게 (양옆 배경 기준 위치 조정)
// 3. 캐릭터마다 배경 추가 (야구장 등) → 중앙 캐릭터 뒤에만 배경을 소형으로 출력
// 4. 호버 시 말풍선 + 설명 멘트 팝업
// 5. 선택 애니메이션 포함, GameState 저장

const characters = [
  { name: "야구선수", image: "baseballP.png", bg: "baseball_bg.png", hint: "홈런을 노려라!" },
  { name: "테니스선수", image: "tennisP.png", bg: "tennis_bg.png", hint: "강력한 서브!" },
  { name: "축구선수", image: "soccerP.png", bg: "soccer_bg.png", hint: "골을 향해!" },
];

const imageCache = {}; // 캐릭터 이미지 캐시
let currentIndex = 0; // 현재 선택된 캐릭터 인덱스
let selected = false; // 캐릭터가 선택되었는지 여부
let imagesLoaded = 0; // 로딩 완료된 이미지 수
const totalImagesToLoad = characters.length * 2; // 캐릭터 이미지 + 배경 이미지 개수
let animating = false; // 애니메이션 상태 여부

function goToCharacterSelect() {
  // 캔버스 초기화
  document.body.innerHTML = '<div style="text-align:center;"><canvas id="gameCanvas" width="1000" height="600" style="background-color:black; border:none;"></canvas></div>';
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  // 이미지 로딩
  characters.forEach((char) => {
    const img = new Image();
    img.src = char.image;
    img.onload = () => {
      imageCache[char.name] = img;
      imagesLoaded++;
      if (imagesLoaded === totalImagesToLoad) startCharacterSelectScene();
    };

    const bg = new Image();
    bg.src = char.bg;
    bg.onload = () => {
      char.bgImage = bg;
      imagesLoaded++;
      if (imagesLoaded === totalImagesToLoad) startCharacterSelectScene();
    };
  });

  function startCharacterSelectScene() {
    drawCharacterScene();
    canvas.addEventListener("mousemove", onHover);
    canvas.addEventListener("click", onClick);
    $(document).on("keydown", onKeyDown);
  }

  // 캐릭터 선택 시 호출
  function selectCharacter() {
    if (selected) return;
    selected = true;
    GameState.selectedCharacter = characters[currentIndex];
    canvas.removeEventListener("click", onClick);
    $(document).off("keydown", onKeyDown);
    goToStoryScene2();
  }

  // 전체 화면 그리기 함수
  function drawCharacterScene(hoveredIndex = -1) {
    const char = characters[currentIndex];

    // 배경 검정색 초기화
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 중앙 배경 출력
    if (char.bgImage && char.bgImage.complete) {
      const bgW = 500;
      const bgH = 280;
      const bgX = (canvas.width - bgW) / 2;
      const bgY = (canvas.height - bgH) / 2 - 20;
      ctx.drawImage(char.bgImage, bgX, bgY, bgW, bgH);
    }

    // 상단 안내 텍스트 출력
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "28px DungGeunMo, sans-serif";
    ctx.fillText("캐릭터 선택", canvas.width / 2, 50);
    ctx.font = "20px DungGeunMo, sans-serif";
    ctx.fillText(`${GameState.nickname}님 환영합니다!`, canvas.width / 2, 80);

    // 캐릭터 3명 그리기 (좌/중앙/우)
    const positions = [-350, 0, 350];
    const scales = [0.7, 1.0, 0.7];
    const alphas = [0.4, 1.0, 0.4];

    for (let i = 0; i < 3; i++) {
      const index = (currentIndex - 1 + i + characters.length) % characters.length;
      const char = characters[index];
      const img = imageCache[char.name];
      if (!img) continue;

      // 캐릭터 이미지 위치 및 투명도/스케일 조정
      ctx.save();
      ctx.translate(canvas.width / 2 + positions[i], canvas.height / 2 - 30);
      ctx.scale(scales[i], scales[i]);
      ctx.globalAlpha = alphas[i];
      ctx.drawImage(img, -100, -100, 200, 200);
      ctx.restore();

      // 중앙 캐릭터 이름 출력 (외곽선 포함)
      if (i === 1) {
        ctx.font = "bold 36px DungGeunMo, sans-serif";
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.strokeText(char.name, canvas.width / 2, canvas.height / 2 + 90); // 살짝 위로 이동
        ctx.fillStyle = "white";
        ctx.fillText(char.name, canvas.width / 2, canvas.height / 2 + 90);
      }
    }

    // 양쪽 화살표 출력
    ctx.font = "48px DungGeunMo, sans-serif";
    ctx.fillText("⬅️", 60, canvas.height / 2 + 10);
    ctx.fillText("➡️", canvas.width - 60, canvas.height / 2 + 10);

    // 선택 버튼 출력 (조금 아래로 이동)
    ctx.fillStyle = "#000";
    ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.strokeRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
    ctx.fillStyle = "white";
    ctx.font = "bold 24px DungGeunMo, sans-serif";
    ctx.fillText("선택", canvas.width / 2, canvas.height / 2 + 175);

    // 하단 안내 메시지
    ctx.font = "18px DungGeunMo, sans-serif";
    ctx.fillText("← → 키 or 마우스로 이동, Enter 또는 선택 클릭", canvas.width / 2, 570);

    // 말풍선 텍스트 표시 (호버 시)
    if (hoveredIndex !== -1) {
      const char = characters[hoveredIndex];
      const hint = char.hint;
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 - 100, 110, 200, 50);
      ctx.strokeStyle = "black";
      ctx.strokeRect(canvas.width / 2 - 100, 110, 200, 50);
      ctx.fillStyle = "black";
      ctx.font = "18px DungGeunMo, sans-serif";
      ctx.fillText(hint, canvas.width / 2, 140);
    }
  }

  // 클릭 이벤트 처리
  function onClick(e) {
    if (animating) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // 왼쪽 화살표 클릭
    if (mx <= 120 && my >= canvas.height / 2 - 50 && my <= canvas.height / 2 + 50) {
      currentIndex = (currentIndex - 1 + characters.length) % characters.length;
      drawCharacterScene();
    }
    // 오른쪽 화살표 클릭
    else if (mx >= canvas.width - 120 && my >= canvas.height / 2 - 50 && my <= canvas.height / 2 + 50) {
      currentIndex = (currentIndex + 1) % characters.length;
      drawCharacterScene();
    }
    // 선택 버튼 클릭
    else if (mx >= canvas.width / 2 - 100 && mx <= canvas.width / 2 + 100 && my >= canvas.height / 2 + 140 && my <= canvas.height / 2 + 200) {
      selectCharacter();
    }
  }

  // 키보드 이벤트 처리
  function onKeyDown(e) {
    if (animating) return;
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + characters.length) % characters.length;
      drawCharacterScene();
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % characters.length;
      drawCharacterScene();
    } else if (e.key === "Enter") {
      selectCharacter();
    }
  }

  // 마우스 hover 시 말풍선 표시 여부 판단
  function onHover(e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (
      mx >= canvas.width / 2 - 100 && mx <= canvas.width / 2 + 100 &&
      my >= canvas.height / 2 - 100 && my <= canvas.height / 2 + 100
    ) {
      drawCharacterScene(currentIndex);
    } else {
      drawCharacterScene(-1);
    }
  }
}

//==========스토리==========
function goToStoryScene2() {
  $('body').html(`
    <style>
      canvas, #skipBtn {
        cursor: url("cursor.png") 16 16, auto !important;
      }
    </style>

    <div style="text-align:center; position:relative;">
      <canvas id="gameCanvas" width="1000" height="600" style="background-color:black; border:none;"></canvas>
      <img id="skipBtn" src="skipBtn.png" style="position:absolute; top:20px; right:20px; width:50px; z-index:10;">
    </div>
  `);

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const bg = new Image();
  bg.src = "StoryPage.png";

  const bubble = new Image();
  bubble.src = "story.png";

  const storyLines = [
    { speaker: "아버지", text: `${GameState.nickname}... 우리 약속했지 않냐.` },
    { speaker: "아버지", text: "이제 아빠도 나이를 계속 먹어. 근육도 다 빠져서 일을 못해~" },
    { speaker: "아버지", text: "이제 운동은 그만 하고 아빠 폐차장 사업을 물려 받으렴." },
    { speaker: GameState.nickname, text: "(그래... 이제는 더 늦기 전에 폐차장으로 가야해.)" },
    { speaker: GameState.nickname, text: "네 아버지. 해볼게요!" },
    { speaker: "아버지", text: "그래그래. 비록 운동에서는 못했지만, 폐차 업계에서는 꼭 정상에 오르길 바란다." },
    { speaker: GameState.nickname, text: "네!!! 아버지!!!!" }
  ];
  let currentLine = 0;

  function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (bg.complete) ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    const bw = 900;
    const bh = 140;
    const bx = (canvas.width - bw) / 2;
    const by = canvas.height - bh - 30;

    if (bubble.complete)
      ctx.drawImage(bubble, bx, by, bw, bh);

    const current = storyLines[currentLine];

    ctx.fillStyle = "black";
    ctx.font = "16px DungGeunMo, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(current.speaker, bx + 20, by + 26);

    ctx.font = "18px DungGeunMo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(current.text, canvas.width / 2, by + 80);
  }

  bg.onload = drawScene;
  bubble.onload = drawScene;

  function advanceStory() {
    if (currentLine < storyLines.length - 1) {
      currentLine++;
      drawScene();
    } else {
      goToMapScene();  // 모든 대사 끝나면 맵 씬으로 이동
    }
  }

  canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const bw = 900;
    const bh = 140;
    const bx = (canvas.width - bw) / 2;
    const by = canvas.height - bh - 30;

    // 말풍선 영역 안일 때
    if (mx >= bx && mx <= bx + bw && my >= by && my <= by + bh) {
      advanceStory();
    }
  });

  $('#skipBtn').on('click', () => {
    $(document).off("keydown");
    goToMapScene();
  });
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

  let selectedIndex = 0;
  const stageImages = ["stage1.png", "stage2.png", "stage3.png"];
  const stageLabels = ["경차 해체", "트럭 해체", "탱크 해체"];

  $('body').html(`
    <div style="position: relative; text-align: center;">
      <canvas id="gameCanvas" width="1000" height="600" style="background-color:black;"></canvas>
    </div>
  `);

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const bgImg = new Image();
  bgImg.src = "stageBackground.png";

  const arrowImg = new Image();
  arrowImg.src = "arrow.png";

  const stageImgs = stageImages.map(src => {
    const img = new Image();
    img.src = src;
    return img;
  });

  function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.font = "20px DungGeunMo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("더블 클릭/엔터 시 스테이지 시작", canvas.width / 2, canvas.height - 10);

    const spacing = 300;
    const startX = 80;
    const y = 410;
    const displayWidth = 240;

    for (let i = 0; i < stageImgs.length; i++) {
      const img = stageImgs[i];
      const aspectRatio = img.height / img.width;
      const displayHeight = displayWidth * aspectRatio;
      const x = startX + i * spacing;

      const yOffset = (i === 1) ? -10 : (i === 2 ? 5 : 0);
      const yPos = y + yOffset;

      ctx.drawImage(img, x, yPos, displayWidth, displayHeight);
      ctx.font = "18px DungGeunMo, sans-serif";
      ctx.strokeText(stageLabels[i], x + displayWidth / 2, yPos + displayHeight + 25);
      ctx.fillText(stageLabels[i], x + displayWidth / 2, yPos + displayHeight + 25);
    }

    // 화살표
    const arrowWidth = 105;
    const arrowHeight = 140;
    const arrowX = startX + selectedIndex * spacing + displayWidth / 2 - arrowWidth / 2;
    const arrowY = y - arrowHeight - 70;
    ctx.drawImage(arrowImg, arrowX, arrowY, arrowWidth, arrowHeight);
  }

  function getSelectedIndexByMouse(mx, my) {
    const spacing = 300;
    const startX = 80;
    const y = 410;
    const displayWidth = 240;

    for (let i = 0; i < stageImgs.length; i++) {
      const img = stageImgs[i];
      const aspectRatio = img.height / img.width;
      const displayHeight = displayWidth * aspectRatio;

      const x = startX + i * spacing;
      const yOffset = (i === 1) ? -10 : (i === 2 ? 5 : 0);
      const yPos = y + yOffset;

      if (mx >= x && mx <= x + displayWidth &&
        my >= yPos && my <= yPos + displayHeight) {
        return i;
      }
    }
    return -1;
  }

  canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const index = getSelectedIndexByMouse(mx, my);
    if (index !== -1) {
      selectedIndex = index;
      drawScene();
    }
  });

  canvas.addEventListener("dblclick", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // 선택된 스테이지의 위치 계산
    const spacing = 300;
    const startX = 80;
    const y = 410;
    const displayWidth = 240;

    const img = stageImgs[selectedIndex];
    const aspectRatio = img.height / img.width;
    const displayHeight = displayWidth * aspectRatio;

    const x = startX + selectedIndex * spacing;
    const yOffset = (selectedIndex === 1) ? -10 : (selectedIndex === 2 ? 5 : 0);
    const yPos = y + yOffset;

    const within =
      mx >= x && mx <= x + displayWidth &&
      my >= yPos && my <= yPos + displayHeight;

    if (within) {
      GameState.selectedStage = selectedIndex + 1;
      startStage(GameState.selectedStage);
    }
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Enter") {
      GameState.selectedStage = selectedIndex + 1;
      startStage(GameState.selectedStage);
    } else if (e.key === "ArrowLeft") {
      selectedIndex = (selectedIndex - 1 + stageImgs.length) % stageImgs.length;
      drawScene();
    } else if (e.key === "ArrowRight") {
      selectedIndex = (selectedIndex + 1) % stageImgs.length;
      drawScene();
    }
  });

  let loadedCount = 0;
  const totalImages = 2 + stageImgs.length;

  function tryDrawScene() {
    loadedCount++;
    if (loadedCount === totalImages) {
      drawScene();
    }
  }

  bgImg.onload = tryDrawScene;
  arrowImg.onload = tryDrawScene;
  stageImgs.forEach(img => img.onload = tryDrawScene);
}

let canvas, ctx;
let ball, paddle, bricks;
let score = 0;
let comboScore = 0;
let comboCount = 0;
let comboTimer = null;
let isGameOver = false;
let animationId = null;

const backgroundImg = new Image();
backgroundImg.src = "stage.png";

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
      <canvas id="gameCanvas" width="1000" height="600"></canvas>
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
  if (backgroundImg.complete) {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

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



// 게임 결과 팝업 UI 표시 함수
// - 게임이 끝난 후 호출됨
// - 획득한 별 개수에 따라 star 이미지 출력
// - '다음 스테이지'와 '스테이지 선택' 버튼 포함
// - 기존 캔버스는 그대로 유지하고 위에 HTML 요소로 팝업을 띄움
// - 실패 시 자동으로 3초 후 스테이지 선택 화면으로 이동

// 게임 결과 팝업 UI 표시 함수
// - 게임이 끝난 후 호출됨
// - 획득한 별 개수에 따라 star 이미지 출력
// - '다음 스테이지'와 '스테이지 선택' 버튼은 이미지로 대체됨
// - 실패 시 자동으로 3초 후 스테이지 선택 화면으로 이동

function showStageResultPopup(starCount) {
  const popup = document.createElement('div');
  popup.id = 'resultPopup';
  popup.style.position = 'absolute';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  popup.style.padding = '30px';
  popup.style.border = '2px solid white';
  popup.style.borderRadius = '12px';
  popup.style.textAlign = 'center';
  popup.style.color = 'white';
  popup.style.zIndex = '1000';

  // ⭐ 별 이미지 추가
  const starImg = document.createElement('img');
  starImg.src = `star${starCount}.png`;
  starImg.alt = `별 ${starCount}개`;
  starImg.style.width = '150px';
  popup.appendChild(starImg);

  // 점수 또는 안내 메시지 출력
  const msg = document.createElement('p');
  msg.textContent = `획득한 별: ${starCount}개`;
  msg.style.fontFamily = 'DungGeunMo, sans-serif';
  msg.style.fontSize = '22px';
  popup.appendChild(msg);

  if (starCount === 0) {
    const failMsg = document.createElement('p');
    failMsg.textContent = '게임 실패! 곧 스테이지 선택 화면으로 이동합니다.';
    failMsg.style.fontSize = '18px';
    failMsg.style.marginTop = '10px';
    popup.appendChild(failMsg);

    setTimeout(() => {
      if (document.body.contains(popup)) document.body.removeChild(popup);
      goToMapScene();
    }, 3000);
  } else {
    const nextBtn = document.createElement('img');
    nextBtn.src = 'toNextBtn.png';
    nextBtn.alt = '다음 스테이지';
    nextBtn.style.margin = '10px';
    nextBtn.style.cursor = 'pointer';
    nextBtn.style.width = '160px';
    nextBtn.onclick = () => {
      document.body.removeChild(popup);
      GameState.selectedStage++;
      if (GameState.selectedStage > 3) {
        showEnding(); // ✅ 최종 스테이지 이후 엔딩 호출
      } else {
        startStage(GameState.selectedStage); // 다음 스테이지 시작
      }
    };
    popup.appendChild(nextBtn);

    const selectBtn = document.createElement('img');
    selectBtn.src = 'toStageBtn.png';
    selectBtn.alt = '스테이지 선택';
    selectBtn.style.margin = '10px';
    selectBtn.style.cursor = 'pointer';
    selectBtn.style.width = '160px';
    selectBtn.onclick = () => {
      document.body.removeChild(popup);
      goToMapScene();
    };
    popup.appendChild(selectBtn);
  }

  document.body.appendChild(popup);
}

// 게임 클리어 체크 함수
function checkGameClear() {
  const cleared = bricks.every(b => b.status === 0);
  if (cleared) {
    endGame();
  }
}

// 게임 종료 처리 함수 (성공 시)
function endGame() {
  cancelAnimationFrame(animationId);
  isGameOver = true;
  GameState.score = score;
  GameState.comboScore = comboScore;
  const total = GameState.score + GameState.comboScore;
  let stars = 0;
  if (total >= 300) stars = 3;
  else if (total >= 200) stars = 2;
  else if (total >= 100) stars = 1;
  showStageResultPopup(stars);
}

// 게임 종료 처리 함수 (실패 시)
function gameOver() {
  cancelAnimationFrame(animationId);
  isGameOver = true;
  GameState.score = score + comboScore;
  $(document).off('keydown');
  $(document).off('keyup');
  showStageResultPopup(0);
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
      // 강화 기회가 남았으면 다시 누를 수 있게 잠금 해제
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
    resetGameState();
    goToCharacterSelect();
  });

  $('#exitBtn').on('click', () => {
    window.close()
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