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

const blockImages = {
  [BLOCK_TYPES.GLASS]: "glass.png",
  [BLOCK_TYPES.METAL]: "iron.png",
  [BLOCK_TYPES.TIRE]: "tire.png",
  [BLOCK_TYPES.FUEL]: "motor.png",
  [BLOCK_TYPES.LIGHT]: "light.png"
};

const loadedBlockImages = {};
for (const [type, src] of Object.entries(blockImages)) {
  const img = new Image();
  img.src = src;
  loadedBlockImages[type] = img;
}

const normalBlockImages = [
  "car.png",
  "truck.png",
  "tankF.png",
  "tankS.png"
];

const loadedNormalImages = normalBlockImages.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});


const BLOCK_WIDTH = 10; // px
const BLOCK_HEIGHT = 5; // px
const START_X = 200; // x축 시작 기준
const START_Y = 100; // y축 시작 기준

const levelBlockLayouts = {
  1: [
    { x: 100, y: 100, type: BLOCK_TYPES.NORMAL, imgIndex: 0 }, // car.png
    { x: 180, y: 100, type: BLOCK_TYPES.NORMAL, imgIndex: 1 }, // truck.png
    { x: 260, y: 100, type: BLOCK_TYPES.NORMAL, imgIndex: 2 }, // tankF.png
    { x: 340, y: 100, type: BLOCK_TYPES.NORMAL, imgIndex: 3 },  // tankS.png
    { x: 340, y: 100, type: BLOCK_TYPES.TIRE}
  ],
  2: [],
  3: []
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
  totalScore: 0,
  totalComboScore: 0,
  upgrades: [],
  failedUpgrades: [],
  reinforceChances: 3,
  settings: {
    bgm: true,
    sfx: true,
    cursor: true,
    //theme: "day", /////////<- 테마 적용하려고 추가했긴 한데 /////////
    //currentScene: "start",//////////////////////////
    // bgm: true, //<- 왜 두 번 선언했어??
  },
  mapVisitedOnce: false
};

let startBgImg = null;
let storyPageBgImg = null;
let stageBgImg = null;
let currentDrawScene = null;

function resetGameState() {
  GameState.score = 0;
  GameState.comboScore = 0;
  GameState.comboCount = 0;
  GameState.totalComboScore = 0;
  GameState.totalScore = 0;
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

// ===== 옵션 버튼 =====
function addOptionButton() {
  let btn = document.getElementById("optionBtn");
  if (!btn) {
    btn = document.createElement("img");
    btn.id = "optionBtn";
    btn.src = "option.png";
    btn.style.position = "fixed"; // 화면 고정 위치
    btn.style.width = "40px";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "1000";

    btn.addEventListener("mouseenter", () => {
      btn.src = "optionHover.png";
    });
    btn.addEventListener("mouseleave", () => {
      btn.src = "option.png";
    });
    btn.addEventListener("click", () => {
      showOptionPanel();
    });

    document.body.appendChild(btn);
  }

  // 캔버스 좌표에 맞게 위치 설정
  const canvas = document.getElementById("gameCanvas");
  if (canvas) {
    const rect = canvas.getBoundingClientRect();
    btn.style.left = `${rect.left + 10}px`;  // 캔버스 왼쪽 + 여백
    btn.style.top = `${rect.top + 10}px`;    // 캔버스 상단 + 여백
  }
}

// 위치 다시 계산
window.addEventListener("resize", () => {
  addOptionButton();
  repositionOptionPanel();
});

function showOptionPanel() {
  if (document.getElementById("optionPanel")) return;

  const canvas = document.getElementById("gameCanvas");
  const rect = canvas.getBoundingClientRect();

  const panel = document.createElement("div");
  panel.id = "optionPanel";
  panel.style.position = "fixed";
  panel.style.zIndex = "1001";
  panel.style.pointerEvents = "auto";

  const panelWidth = 300;
  const panelHeight = 200;
  panel.style.left = `${rect.left + (rect.width - panelWidth) / 2}px`;
  panel.style.top = `${rect.top + (rect.height - panelHeight) / 2}px`;
  panel.style.width = `${panelWidth}px`;
  panel.style.height = `${panelHeight}px`;

  panel.innerHTML = `
    <img src="selectBack.png" style="width:100%; height:100%; position:absolute; top:0; left:0;">

    <div style="
      position:absolute; 
      top:20px; 
      left:0; 
      width:100%; 
      text-align:center; 
      font-family:'DungGeunMo',sans-serif; 
      font-size:18px; 
      color:white;
      text-shadow:
    -1px -1px 0 black,
     1px -1px 0 black,
    -1px  1px 0 black,
     1px  1px 0 black;"
      z-index:2;">
      ~환경 설정~
    </div>

    <img id="soundToggle"
         src="${GameState.settings.bgm ? 'soundOn.png' : 'soundOff.png'}"
         style="position:absolute; top:60px; left:75px; width:50px; cursor:pointer; z-index:2;">

    <img id="themeToggle"
         src="${GameState.settings.theme === 'night' ? 'night.png' : 'day.png'}"
         style="position:absolute; top:60px; left:175px; width:50px; cursor:pointer; z-index:2;">

    <img id="doneBtn"
     src="done.png"
     style="position:absolute; top:140px; left:50%; transform:translateX(-50%);
            width:150px; cursor:pointer; z-index:2;">
  `;

  document.body.appendChild(panel);

  const soundBtn = document.getElementById("soundToggle");
  const themeBtn = document.getElementById("themeToggle");
  const doneBtn = document.getElementById("doneBtn");

  // hover 효과
  soundBtn.addEventListener("mouseenter", () => {
    soundBtn.src = GameState.settings.bgm ? "soundOnH.png" : "soundOffH.png";
  });
  soundBtn.addEventListener("mouseleave", () => {
    soundBtn.src = GameState.settings.bgm ? "soundOn.png" : "soundOff.png";
  });

  themeBtn.addEventListener("mouseenter", () => {
    themeBtn.src = GameState.settings.theme === "night" ? "nightH.png" : "dayH.png";
  });
  themeBtn.addEventListener("mouseleave", () => {
    themeBtn.src = GameState.settings.theme === "night" ? "night.png" : "day.png";
  });

  doneBtn.addEventListener("mouseenter", () => {
    doneBtn.src = "doneH.png";
  });
  doneBtn.addEventListener("mouseleave", () => {
    doneBtn.src = "done.png";
  });

  // 클릭 동작
  soundBtn.addEventListener("click", () => {
    GameState.settings.bgm = !GameState.settings.bgm;
    if (GameState.settings.bgm) playBGM();
    else stopBGM();
    soundBtn.src = GameState.settings.bgm ? "soundOnH.png" : "soundOffH.png";
  });

  themeBtn.addEventListener("click", () => {
    GameState.settings.theme = GameState.settings.theme === "night" ? "day" : "night";
    themeBtn.src = GameState.settings.theme === "night" ? "nightH.png" : "dayH.png";
    applyTheme();
  });

  doneBtn.addEventListener("click", () => {
    panel.remove();
    window.removeEventListener("keydown", escHandler);
  });

  // ESC 닫기
  const escHandler = (e) => {
    if (e.key === "Escape") {
      panel.remove();
      window.removeEventListener("keydown", escHandler);
    }
  };

  window.addEventListener("keydown", escHandler);
}

// resize 시 옵션 패널 위치 조정
function repositionOptionPanel() {
  const panel = document.getElementById("optionPanel");
  const canvas = document.getElementById("gameCanvas");
  if (!panel || !canvas) return;

  const rect = canvas.getBoundingClientRect();
  const panelWidth = panel.offsetWidth;
  const panelHeight = panel.offsetHeight;

  panel.style.left = `${rect.left + (rect.width - panelWidth) / 2}px`;
  panel.style.top = `${rect.top + (rect.height - panelHeight) / 2}px`;
}

function onThemeChange(newTheme) {
  GameState.settings.theme = newTheme;

  if (GameState.currentScene === "map") {
    goToMapScene(); // canvas 다시 그려야 하기 때문에 전체 재진입
  } else {
    applyTheme();   // story/start 등은 기존 방식으로 적용
  }
}

// 테마 설정
function applyTheme() { /////// <- 미완
  const theme = GameState.settings.theme;

  // storyPage
  if (storyPageBgImg) {
  storyPageBgImg.src = GameState.settings.theme === "night"
    ? "StoryPageN.png" : "StoryPage.png";

  if (storyPageBgImg.complete && typeof currentDrawScene === "function") {
    currentDrawScene();
  }
}


  // skip 버튼
  const skipBtn = document.getElementById("skipBtn") || document.getElementById("skipBtn_w");
  if (skipBtn) {
    skipBtn.src = theme === "night" ? "skipBtnN.png" : "skipBtn.png";
  }


  // startPage
  if (startBgImg) {
  startBgImg.src = GameState.settings.theme === "night"
    ? "startPageN.png" : "startPage.png";
}


  // mergedEnding
  const mergedEnding = document.getElementById("endingBackground");
if (mergedEnding) {
  const themeSrc = theme === "night" ? "mergedEndingN.png" : "mergedEnding.png";
  mergedEnding.src = themeSrc;

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas?.getContext("2d");

  if (ctx && mergedEnding.complete) {
    ctx.drawImage(mergedEnding, 0, 0, canvas.width, canvas.height);
  } else if (ctx) {
    mergedEnding.onload = () => {
      ctx.drawImage(mergedEnding, 0, 0, canvas.width, canvas.height);
    };
  }
}


  // stage (canvas 내에서 배경 이미지 사용 시)
  if (typeof backgroundImg !== 'undefined') {
    backgroundImg.src = theme === "night" ? "stageN.png" : "stage.png";
  }

  // stageBackground
if (stageBgImg) {
  stageBgImg.src = theme === "night" ? "stageBackgroundN.png" : "stageBackground.png";

  if (stageBgImg.complete && typeof currentDrawScene === "function") {
    currentDrawScene();
  }
}


  // body 배경색
  document.body.style.backgroundColor = theme === "night" ? "#222" : "#f0f0f0";

  
}



// ======= 광고 ========

const AdState = {
  ad1Closed: false,
  ad2Closed: false
};

function addAds() {
  if (document.getElementById("ads-container")) return;

  const adsContainer = document.createElement('div');
  adsContainer.id = "ads-container";

  if (!AdState.ad1Closed) {
    const ad1 = document.createElement('div');
    ad1.className = "ad-box";
    ad1.id = "ad1";
    ad1.innerHTML = `
      <img src="ad1.png" class="ad-image" onclick="window.open('https://cse.konkuk.ac.kr/cse/9960/subview.do?enc=Zm5jdDF8QEB8JTJGcHJvZkluZm8lMkZjc2UlMkY1NDclMkYyMTQyMDA2MiUyRnZpZXcuZG8lM0ZzcmNoQ3RnciUzRCUyNg%3D%3D', '_blank')">
      <img src="close.png" class="close-btn" onclick="closeAd('ad1')">
    `;
    adsContainer.appendChild(ad1);
  }

  if (!AdState.ad2Closed) {
    const ad2 = document.createElement('div');
    ad2.className = "ad-box";
    ad2.id = "ad2";
    ad2.innerHTML = `
      <img src="ad2.png" class="ad-image" onclick="window.open('https://cse.konkuk.ac.kr/cse/index.do', '_blank')">
      <img src="close.png" class="close-btn" onclick="closeAd('ad2')">
    `;
    adsContainer.appendChild(ad2);
  }

  document.body.appendChild(adsContainer);
}

// 광고 닫기
function closeAd(id) {
  const el = document.getElementById(id);
  if (el) el.remove();

  if (id === "ad1") AdState.ad1Closed = true;
  if (id === "ad2") AdState.ad2Closed = true;
}

// ===== GameStartUI.js =====

// import { goToStoryScene } from './StoryScene.js';


function showStartUI() {
  $('body').html(`
    <div style="text-align:center; position: relative;">
      <canvas id="gameCanvas" width="1000" height="600"
      style="background-color: black; border: none;"></canvas>
      <audio id="bgm" src="audio/opening.mp3" autoplay loop muted></audio>
    </div> 
  `);
  addOptionButton();

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  startBgImg = new Image();
  startBgImg.src = GameState.settings.theme === "night"
    ? "startPageN.png" : "startPage.png";

  const startButtonImg = new Image();
  const startButtonHoverImg = new Image();
  startButtonImg.src = "StartBtn.png";
  startButtonHoverImg.src = "StartBtnHover.png";

  const button = { x: 400, y: 420, width: 200, height: 60 };
  let isHoveringStartBtn = false;

  function drawStartScene() {
    ctx.drawImage(startBgImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(isHoveringStartBtn ? startButtonHoverImg : startButtonImg,
                  button.x, button.y, button.width, button.height);
  }

  startBgImg.onload = drawStartScene;
  startButtonImg.onload = drawStartScene;

  canvas.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const hovering = mx >= button.x && mx <= button.x + button.width &&
                     my >= button.y && my <= button.y + button.height;
    if (hovering !== isHoveringStartBtn) {
      isHoveringStartBtn = hovering;
      drawStartScene();
    }
  });

  canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (mx >= button.x && mx <= button.x + button.width &&
        my >= button.y && my <= button.y + button.height) {
      goToStoryScene();
    }
  });

  addAds();
}


// ===== StoryScene.js =====

// 파일: StoryScene.js - 이름 입력란 조건부 노출로 수정
// import { GameState } from './GameState.js';
// import { goToCharacterSelect } from './CharacterSelector.js';

function goToStoryScene() {
  $('body').html(`
    <div style="text-align:center;position:relative;">
      <canvas id="gameCanvas" width="1000" height="600" style="background-color:black; border:none;"></canvas>
      <img id="skipBtn_w" src="skip_btn_w.png"  
      style="position:absolute; 
      top:20px; right:20px; width:50px; z-index:10;">
    </div>
  `);
  addOptionButton();
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const storyText = [
    "평생을 운동 선수로 살아온 당신...",
    "안타깝게도 눈에 띄는 성적을 보이지는 못했다.",
    "당신의 이름은?"
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
    document.fonts.ready.then(() => {
      drawStoryScene();
    });
  };

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

  // 키보드 이벤트: Space,Enter --> 다음 / skipBtn_w --> Skip
  //앤터 입력시 스킵된다는 문구 추가 필요
  $(document).on("keydown", (e) => {
    if (!isEnteringName) {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        advanceStory();
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

  $('#skipBtn_w').on('click', () => {
    GameState.nickname = "랄푸";
    $(document).off("keydown");
    canvas.removeEventListener("click", advanceStory);
    goToCharacterSelect();
  });

  addAds();
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

let imageCache = {}; // 캐릭터 이미지 캐시
let currentIndex = 0; // 현재 선택된 캐릭터 인덱스
let selected = false; // 캐릭터가 선택되었는지 여부
let imagesLoaded = 0; // 로딩 완료된 이미지 수
let totalImagesToLoad = characters.length * 2; // 캐릭터 이미지 + 배경 이미지 개수
let animating = false; // 애니메이션 상태 여부

function goToCharacterSelect() {
  //이미지 로딩 초기화
  imagesLoaded = 0;
  totalImagesToLoad = characters.length * 2;
  imageCache = {};
  selected = false;
  let isHoveringSelect = false;
  let lastHoveredIndex = -1;
  // 캔버스 초기화
  document.body.innerHTML = '<div style="text-align:center;"><canvas id="gameCanvas" width="1000" height="600" style="background-color:black; border:none;"></canvas></div>';
  addOptionButton();
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
    if (isHoveringSelect) {
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
      ctx.strokeStyle = "black";
      ctx.strokeRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
      ctx.fillStyle = "black";
    } else {
      ctx.fillStyle = "black";
      ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
      ctx.strokeStyle = "white";
      ctx.strokeRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
      ctx.fillStyle = "white";
    }
    ctx.font = "bold 24px DungGeunMo, sans-serif";
    ctx.fillText("선택", canvas.width / 2, canvas.height / 2 + 175);

    // 하단 안내 메시지
    ctx.font = "18px DungGeunMo, sans-serif";
    ctx.fillStyle = "white";
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

  // 마우스 hover 시 말풍선 표시 여부 판단 & 선택 hover 판단
  function onHover(e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const inSelectBox =
      mx >= canvas.width / 2 - 100 && mx <= canvas.width / 2 + 100 &&
      my >= canvas.height / 2 + 140 && my <= canvas.height / 2 + 200;

    const inCharacter =
      mx >= canvas.width / 2 - 100 && mx <= canvas.width / 2 + 100 &&
      my >= canvas.height / 2 - 100 && my <= canvas.height / 2 + 100;

    let needRedraw = false;

    if (inSelectBox !== isHoveringSelect) {
      isHoveringSelect = inSelectBox;
      needRedraw = true;
    }

    const hovered = inCharacter ? currentIndex : -1;
    if (hovered !== lastHoveredIndex) {
      lastHoveredIndex = hovered;
      needRedraw = true;
    }

    if (needRedraw) {
      drawCharacterScene(lastHoveredIndex);
    }
  }

  addAds();
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

  addOptionButton();

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
const skipBtn = document.getElementById("skipBtn");
if (skipBtn) {
  skipBtn.src = GameState.settings.theme === "night" ? "skipBtnN.png" : "skipBtn.png";
}

  // 전역 이미지 객체
  storyPageBgImg = new Image();
  storyPageBgImg.src = GameState.settings.theme === "night"
    ? "StoryPageN.png" : "StoryPage.png";

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
    if (storyPageBgImg?.complete)
      ctx.drawImage(storyPageBgImg, 0, 0, canvas.width, canvas.height);

    const bw = 900, bh = 140;
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

  // 현재 씬의 drawScene 저장
  currentDrawScene = drawScene;

  storyPageBgImg.onload = drawScene;
  bubble.onload = drawScene;

  function advanceStory() {
    if (currentLine < storyLines.length - 1) {
      currentLine++;
      drawScene();
    } else {
      goToMapScene();  // 대사 끝나면 맵으로 이동
    }
  }

  canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const bw = 900, bh = 140;
    const bx = (canvas.width - bw) / 2;
    const by = canvas.height - bh - 30;

    if (mx >= bx && mx <= bx + bw && my >= by && my <= by + bh) {
      advanceStory();
    }
  });

  $('#skipBtn').on('click', () => {
    $(document).off("keydown");
    goToMapScene();
  });

  $(document).on("keydown", function (e) {
    if (e.code === "Enter" || e.code === "Space") {
      e.preventDefault();
      advanceStory();
    }
  });

  addAds();
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
  GameState.currentScene = "map";
  $('body').off("keydown");  // 문서 전체에 걸려 있는 keydown 제거
$(document).off("keydown");  // 키보드 입력 중복 방지

  // 게임 상태 초기화
  GameState.score = 0;
  GameState.comboScore = 0;
  GameState.comboCount = 0;
  GameState.upgrades = [];
  GameState.failedUpgrades = [];
  GameState.reinforceChances = 0;

  let selectedIndex = 0;
  const stageImages = ["stage1.png", "stage2.png", "stage3.png"];
  const stageLabels = ["경차 해체", "트럭 해체", "탱크 해체"];

  // HTML 초기화 및 캔버스 생성
  $('body').html(`
    <div style="position: relative; width: 1000px; height: 600px; margin: auto;">
      <canvas id="gameCanvas"
              width="1000" height="600"
              style="position: absolute; top: 0; left: 0; z-index: 1; border: none;"></canvas>
    </div>
  `);

  addOptionButton();  // 옵션 버튼 추가

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  // 테마에 따라 배경 이미지 설정
  const bgImg = new Image();
  bgImg.src = GameState.settings.theme === "night"
    ? "stageBackgroundN.png"
    : "stageBackground.png";

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

    const within = (
      mx >= x && mx <= x + displayWidth &&
      my >= yPos && my <= yPos + displayHeight
    );

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

  currentDrawScene = drawScene;

  addAds();
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
addOptionButton();
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");

  updateItemUI();

  initGameElements();
  draw();

  addAds();
}

// 캐릭터별 공 이미지와 반지름 정보
const ballInfoMap = {
  "야구선수": {
    img: (() => {
      const img = new Image();
      img.src = "baseball_img.png";
      return img;
    })(),
    radius: 14,
    speedFactor: 1.0
  },
  "축구선수": {
    img: (() => {
      const img = new Image();
      img.src = "soccer_img.png";
      return img;
    })(),
    radius: 18,
    speedFactor: 0.8
  },
  "테니스선수": {
    img: (() => {
      const img = new Image();
      img.src = "tennis_img.png";
      return img;
    })(),
    radius: 12,
    speedFactor: 1.2
  }
};


function initGameElements() {
  const selected = GameState.selectedCharacter.name;
  const info = ballInfoMap[selected] || { radius: 14, speedFactor: 1.0 };

  const stageSpeed = 2 + GameState.selectedStage +
    (GameState.upgrades.includes("스피드업") ? 1 : 0);
  const baseSpeed = stageSpeed * info.speedFactor;

  const angleDeg = Math.random() * 60 + 30;
  const angleRad = angleDeg * (Math.PI / 180);
  const direction = Math.random() < 0.5 ? -1 : 1;

  ball = {
    x: canvas.width / 2,
    y: canvas.height - 60 - info.radius,
    dx: Math.cos(angleRad) * baseSpeed * direction,
    dy: -Math.sin(angleRad) * baseSpeed,
    radius: info.radius,
    speed: baseSpeed,
    originalSpeed: baseSpeed,
    img: info.img
  };

  const paddleUpgradeCount = GameState.upgrades.filter(x => x === "패들강화").length;
  const paddleLevel = Math.min(1 + paddleUpgradeCount, 3);

  const base = GameState.selectedCharacter?.name || "야구선수";
  const prefix = base === "야구선수" ? "b" :
    base === "축구선수" ? "s" :
      base === "테니스선수" ? "t" : "b";

  const paddleImgName = `paddles/${prefix}Paddle${paddleLevel}.png`;

  const paddleImg = new Image();
  paddleImg.src = paddleImgName;

  paddle = {
    width: 100, // 임시값
    height: 20,
    x: (canvas.width - 100) / 2,
    rightPressed: false,
    leftPressed: false,
    img: paddleImg
  };

  paddleImg.onload = () => {
    paddle.height = 12;  // 고정된 기존 paddle 높이
    const scale = paddle.height / paddleImg.height;  // 비율 유지
    paddle.width = paddleImg.width * scale;          // 비율에 따라 너비 조정
    paddle.x = (canvas.width - paddle.width) / 2;    // 가운데 정렬
    paddle.y = canvas.height - paddle.height - 10;
  };


  const layout = levelBlockLayouts[GameState.selectedStage];
  bricks = layout.map(block => ({
    x: block.x,
    y: block.y,
    type: block.type,
    imgIndex: block.imgIndex,
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
  const tolerance = 10;
  if (ball.y + ball.dy > canvas.height - ball.radius - paddle.height - 10) {
    if (ball.x + ball.radius >= paddle.x - tolerance &&
    ball.x - ball.radius <= paddle.x + paddle.width + tolerance) {
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

            const isLeft = Math.random() < 0.5;
            const angleDeg = isLeft
              ? Math.random() * 15 + 60   // 왼쪽으로 날아감
              : Math.random() * 15 + 105; // 오른쪽으로 날아감
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
  const size = ball.radius * 2;
  if (ball.img?.complete) {
    ctx.drawImage(ball.img, ball.x - ball.radius, ball.y - ball.radius, size, size);
  } else {
    // 이미지 로딩 안 됐을 경우 대체 표시
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
  }
}


function drawPaddle() {
  if (paddle.img?.complete) {
    ctx.drawImage(paddle.img, paddle.x, paddle.y, paddle.width, paddle.height);
  } else {
    ctx.fillStyle = "#fff";
    ctx.fillRect(
      paddle.x,
      canvas.height - paddle.height - 10,
      paddle.width,
      paddle.height
    );
  }
}

function drawBricks() {
  bricks.forEach(b => {
    if (b.status === 1 || (b.effectStage !== null && b.effectStage !== "gone")) {
      const w = 70, h = 20;

      // 🔸 NORMAL 블럭: imgIndex에 따라 이미지 사용
      if (b.type === BLOCK_TYPES.NORMAL && b.imgIndex !== undefined) {
        const img = loadedNormalImages[b.imgIndex];
        if (img?.complete) {
          ctx.drawImage(img, b.x, b.y, w, h);
          return;
        }
      }

      // 🔸 기타 타입: blockImages에서 해당 이미지 출력
      if (loadedBlockImages[b.type]?.complete) {
        ctx.drawImage(loadedBlockImages[b.type], b.x, b.y, w, h);
        return;
      }

      // 🔸 이미지가 없을 경우 fallback 색상
      ctx.beginPath();
      ctx.rect(b.x, b.y, w, h);
      ctx.fillStyle = getColorByType(b.type, b.hitCount);
      ctx.fill();
      ctx.closePath();
    }
  });
}



function collisionDetection() {
  bricks.forEach(b => {
    if (b.status === 1 &&
      b.effectStage === null &&
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
  const cleared = bricks.every(b =>
    b.status === 0 && (b.effectStage === null || b.effectStage === "gone")
  );
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
  ///////////////////////////////////////
  const currentScore = GameState.score;
  const currentComboScore = GameState.comboScore;
  ///////////////////////////////////////

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

    document.body.appendChild(popup);

    setTimeout(() => {
      if (document.body.contains(popup)) document.body.removeChild(popup);
      resetGameState();
      goToMapScene();
    }, 3000);
  } else {
    const nextBtn = document.createElement('img');
    nextBtn.src = 'toNextBtn.png';
    nextBtn.alt = '다음 스테이지';
    nextBtn.style.margin = '10px';
    nextBtn.style.cursor = 'pointer';
    //nextBtn.style.width = '160px';
    nextBtn.style.height = '40px';
    nextBtn.onclick = () => {
      document.body.removeChild(popup);
      if (GameState.selectedStage >= 3) {
        showEnding();
      } else {
        goToUpgradePopup(starCount); // 강화 팝업 호출
      }
    }
    // hover 시 이미지 변경
    nextBtn.addEventListener('mouseenter', () => {
      nextBtn.src = 'HtoNextBtn.png';
    });
    nextBtn.addEventListener('mouseleave', () => {
      nextBtn.src = 'toNextBtn.png';
    });

    const selectBtn = document.createElement('img');
    selectBtn.src = 'toStageBtn.png';
    selectBtn.alt = '스테이지 선택';
    selectBtn.style.margin = '10px';
    selectBtn.style.cursor = 'pointer';
    //selectBtn.style.width = '160px';
    selectBtn.style.height = '40px';
    selectBtn.onclick = () => {
      document.body.removeChild(popup);
      goToMapScene();
    };

    // hover 시 이미지 변경
    selectBtn.addEventListener('mouseenter', () => {
      selectBtn.src = 'HtoStageBtn.png';
    });
    selectBtn.addEventListener('mouseleave', () => {
      selectBtn.src = 'toStageBtn.png';
    });

    ///////////////////////////////////////
    // 다시 시작 버튼 추가
    const restartBtn = document.createElement('img');
    restartBtn.src = 'restartBtn.png';
    restartBtn.alt = '다시 도전';
    restartBtn.style.margin = '10px';
    restartBtn.style.cursor = 'pointer';
    restartBtn.style.height = '40px';
    restartBtn.onclick = () => {
      document.body.removeChild(popup);

      // 방금 플레이 점수 반영 취소
      GameState.totalScore -= currentScore;
      GameState.totalComboScore -= currentComboScore;
      GameState.score = 0;
      GameState.comboScore = 0;

      startStage(GameState.selectedStage);  // 현재 스테이지 다시 시작
    };

    // hover 시 이미지 변경
    restartBtn.addEventListener('mouseenter', () => {
      restartBtn.src = 'HrestartBtn.png';
    });
    restartBtn.addEventListener('mouseleave', () => {
      restartBtn.src = 'restartBtn.png';
    });
    ///////////////////////////////////////

    popup.appendChild(selectBtn);
    popup.appendChild(restartBtn);
    popup.appendChild(nextBtn);

    if (starCount > 0) {
      const countdownText = document.createElement('p');
      countdownText.style.fontSize = '16px';
      countdownText.style.marginTop = '10px';
      countdownText.style.fontFamily = 'DungGeunMo, sans-serif';
      popup.appendChild(countdownText);

      let timeLeft = 5;
      countdownText.textContent = `자동 이동까지 ${timeLeft}초...`;

      const countdownInterval = setInterval(() => {
        timeLeft--;
        countdownText.textContent = `자동 이동까지 ${timeLeft}초...`;
        if (timeLeft <= 0) {
          clearInterval(countdownInterval);
          if (document.body.contains(popup)) {
            document.body.removeChild(popup);
            if (GameState.selectedStage >= 3) {
              showEnding();
            } else {
              goToUpgradePopup(starCount);
            }
          }
        }
      }, 1000);
    }


    document.body.appendChild(popup);
  }
}


// 게임 종료 처리 함수 (성공 시)
function endGame() {
  cancelAnimationFrame(animationId);
  isGameOver = true;

  const stageScore = score;
  const stageCombo = comboScore;
  const total = stageScore + stageCombo;

  GameState.totalScore += stageScore;
  GameState.totalComboScore += stageCombo;

  let stars = 0;
  if (total >= 300) stars = 3;
  else if (total >= 200) stars = 2;
  else if (total >= 100) stars = 1;

  GameState.score = stageScore;
  GameState.comboScore = stageCombo

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

// 캔버스 기반 강화 UI 전체 구성 (선택, 버튼, 결과 표시 포함)
function goToUpgradePopup(stars) {
  // 강화 기회를 별 개수만큼 추가
  GameState.reinforceChances += stars;

  // 팝업창 역할을 하는 div 생성
  const popup = document.createElement('div');
  popup.id = 'upgradePopup';
  popup.style.position = 'absolute';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
  popup.style.padding = '30px';
  popup.style.border = '2px solid white';
  popup.style.borderRadius = '12px';
  popup.style.textAlign = 'center';
  popup.style.color = 'white';
  popup.style.zIndex = '2000';

  // 강화 내역, 기회 수, 캔버스 포함한 HTML 삽입
  popup.innerHTML = `
    <h2>강화 화면</h2>
    <div id="upgradeStatus">강화 내역: ${summarizeUpgrades()}</div>
    <p>현재 강화 기회: <span id="chanceDisplay">${GameState.reinforceChances}</span>회</p>
    <canvas id="upgradeCanvas" width="400" height="250" style="border:1px solid white; background:black; margin-top: 15px;"></canvas>
  `;

  document.body.appendChild(popup);

  // 렌더링 이후 캔버스 요소를 얻어와 UI 세팅
  setTimeout(() => {
    const canvas = document.getElementById("upgradeCanvas");
    const ctx = canvas.getContext("2d");
    setupUpgradeCanvas(canvas, ctx, popup);
  }, 50);
}

function setupUpgradeCanvas(canvas, ctx, popup) {
  // 강화 옵션 정의
  const options = ["패들강화", "보너스점수", "생명"];
  let selectedIndex = 0;
  let resultText = ""; // 강화 결과 메시지
  let animationFrame = 0;
  let animTimer = 0;

  // 버튼 정보 (위치, 크기, hover 여부)
  const buttons = [
    { label: "강화 시도", x: 40, y: 170, w: 120, h: 40, hover: false },
    { label: "건너뛰기", x: 240, y: 170, w: 120, h: 40, hover: false }
  ];

  // 마우스 이동 시 hover 처리
  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    buttons.forEach(btn => {
      btn.hover = mx >= btn.x && mx <= btn.x + btn.w &&
                  my >= btn.y && my <= btn.y + btn.h;
    });

    drawUI();
  });

  // 마우스 클릭 시 버튼 또는 옵션 선택 처리
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    options.forEach((opt, i) => {
      const x = 40 + i * 120;
      if (mx >= x && mx <= x + 100 && my >= 30 && my <= 60) {
        selectedIndex = i;
        drawUI();
      }
    });

    if (mx >= buttons[0].x && mx <= buttons[0].x + buttons[0].w &&
        my >= buttons[0].y && my <= buttons[0].y + buttons[0].h) {
      tryUpgrade(options[selectedIndex]);
    }

    if (mx >= buttons[1].x && mx <= buttons[1].x + buttons[1].w &&
        my >= buttons[1].y && my <= buttons[1].y + buttons[1].h) {
      document.body.removeChild(popup);
      proceedToNextStage();
    }
  });

  // 캔버스에 전체 UI 그리기 (옵션, 버튼, 결과 메시지)
  function drawUI() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "16px DungGeunMo, sans-serif";
    ctx.textAlign = "center";

    options.forEach((opt, i) => {
      const x = 40 + i * 120;
      const isSelected = i === selectedIndex;
      ctx.fillStyle = isSelected ? "#fff" : "#333";
      ctx.fillRect(x, 30, 100, 30);
      ctx.strokeStyle = "#888";
      ctx.strokeRect(x, 30, 100, 30);
      ctx.fillStyle = isSelected ? "#000" : "#fff";
      ctx.fillText(opt, x + 50, 50);
    });

    buttons.forEach(btn => {
      ctx.fillStyle = btn.hover ? "#fff" : "#111";
      ctx.fillRect(btn.x, btn.y, btn.w, btn.h);
      ctx.strokeStyle = "#fff";
      ctx.strokeRect(btn.x, btn.y, btn.w, btn.h);
      ctx.fillStyle = btn.hover ? "#000" : "#fff";
      ctx.fillText(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2 + 6);
    });

    if (resultText) {
      ctx.font = "bold 20px DungGeunMo, sans-serif";
      ctx.fillStyle = animationFrame % 2 === 0 ? "#ff0" : "#f00";
      ctx.fillText(resultText, canvas.width / 2, 130);
    }
  }

  // 강화 시도 처리
  function tryUpgrade(option) {
    if (GameState.reinforceChances <= 0) return;

    const count = GameState.upgrades.filter(x => x === option).length;

    // 최대 3회까지만 강화 가능
    if (count >= 3) {
      resultText = `${option} 최대 강화`;
      drawUI();
      return;
    }

    GameState.reinforceChances--;
    document.getElementById("chanceDisplay").innerText = GameState.reinforceChances;

    const success = Math.random() < 0.6; // 60% 확률

    if (success) {
      GameState.upgrades.push(option);

      if (option === "생명") {
        GameState.barrierCount = (GameState.barrierCount || 0) + 1;
        updateItemUI(); // 생명 UI 갱신
      }

      resultText = `${option} 강화 성공!`;
    } else {
      GameState.failedUpgrades.push(option);
      resultText = `${option} 강화 실패...`;
    }

    const upgradeStatus = document.getElementById("upgradeStatus");
    if (upgradeStatus) {
      upgradeStatus.innerText = `강화 내역: ${summarizeUpgrades()}`;
    }

    animTimer = 30;
    animateResult();

    // 기회 모두 소진 시 자동 다음 스테이지로 이동
    if (GameState.reinforceChances === 0) {
      setTimeout(() => {
        document.body.removeChild(popup);
        proceedToNextStage();
      }, 2000);
    }
  }

  // 결과 메시지 깜빡이는 애니메이션 처리
  function animateResult() {
    if (animTimer-- <= 0) {
      drawUI();
      return;
    }
    animationFrame++;
    drawUI();
    requestAnimationFrame(animateResult);
  }

  drawUI();
}

// 강화 내역 요약 문자열 반환
function summarizeUpgrades() {
  const summary = {};
  GameState.upgrades.forEach(up => {
    summary[up] = (summary[up] || 0) + 1;
  });
  return Object.entries(summary).map(([k, v]) => `${k} x${v}`).join(', ') || '없음';
}

// 다음 스테이지로 이동 처리
function proceedToNextStage() {
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
    <div style="text-align:center; position:relative;">
      <canvas id="gameCanvas" width="1000" height="600" style="background:black;"></canvas>
    </div>
  `);
addOptionButton();
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "24px DungGeunMo, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("결과 불러오는 중...", canvas.width / 2, canvas.height / 2);

  const bg = new Image();
  bg.src = "mergedEnding.png";
  bg.src = "endingBackground";

  const charImg = new Image();
  charImg.src = GameState.selectedCharacter?.image || "baseballP.png";  // 기본 이미지

  let loaded = 0;
  const tryDraw = () => {
    loaded++;
    if (loaded < 2) return;
    GameState._endingCharImg = charImg;  // ✅ 캐릭터 이미지를 글로벌 상태에 임시 저장
    startFinalScene(bg);
  };

  bg.onload = tryDraw;
  charImg.onload = tryDraw;

  canvas.addEventListener("click", handleEndingPopupClick);
  canvas.addEventListener("mousemove", handleEndingMouseMove);
}
// 버튼 상태
let endingButtons = [
  { id: "restartBtn", text: "다시 시작", x: 0, y: 0, w: 160, h: 40, hover: false },
  { id: "exitBtn", text: "게임 종료", x: 0, y: 0, w: 160, h: 40, hover: false }
];

// 파티클 상태
let fireParticles = [];
let fireAnimId = null;

function startFinalScene(bgImage) {
  const palette = ['#ff0044', '#ffaa00', '#00eaff', '#44ff00', '#ffffff', '#ffcc00'];

  setInterval(() => {
    for (let i = 0; i < 6; i++) {
      const canvas = document.getElementById("gameCanvas");
      const x = Math.random() * canvas.width;
      const y = -10;
      const speedY = Math.random() * 1.5 + 0.5;
      const size = Math.floor(Math.random() * 3 + 2); // 2~4
      const color = palette[Math.floor(Math.random() * palette.length)];
      fireParticles.push({ x, y, speedY, size, color });
    }
  }, 120);

  animateScene(bgImage);
}

function animateScene(bgImage) {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. 배경 이미지
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

  // 2. 파티클
  fireParticles.forEach(p => {
    p.y += p.speedY;
    ctx.fillStyle = p.color;
    ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
  });
  fireParticles = fireParticles.filter(p => p.y < canvas.height + 10);

  // 3. 점수/결과 텍스트 + 버튼
  drawGameEndingOverlay(ctx);

  fireAnimId = requestAnimationFrame(() => animateScene(bgImage));
}

function drawGameEndingOverlay(ctx) {
  const canvas = ctx.canvas;

  const nickname = GameState.nickname || "플레이어";
  const totalScore = GameState.totalScore + GameState.totalComboScore;
  const upgrades = GameState.upgrades.length > 0 ? GameState.upgrades.join(", ") : "없음";

  // 1. 캐릭터 이미지 (중앙 상단)
  if (GameState._endingCharImg) {
    ctx.drawImage(GameState._endingCharImg, canvas.width / 2 - 100, 330, 200, 200);
  }

  // 2. 텍스트
  ctx.textAlign = "center";
  ctx.lineWidth = 4;
  ctx.font = "24px DungGeunMo, sans-serif";
  ctx.strokeStyle = "black";
  ctx.fillStyle = "yellow";

  ctx.strokeText(`${nickname}님의 총 점수: ${totalScore}`, canvas.width / 2, 260);
  ctx.fillText(`${nickname}님의 총 점수: ${totalScore}`, canvas.width / 2, 260);

  ctx.strokeText(`강화 내역: ${upgrades}`, canvas.width / 2, 300);
  ctx.fillText(`강화 내역: ${upgrades}`, canvas.width / 2, 300);

  // 3. 버튼
  drawButtons(ctx);
}


function drawButtons(ctx) {
  const canvas = ctx.canvas;
  const width = canvas.width;

  const btnWidth = 160;
  const spacing = 20;
  const totalWidth = btnWidth * 2 + spacing;
  const startX = (width - totalWidth) / 2;
  const btnY = 540;

  endingButtons[0].x = startX;
  endingButtons[0].y = btnY;
  endingButtons[1].x = startX + btnWidth + spacing;
  endingButtons[1].y = btnY;

  endingButtons.forEach(btn => {
    ctx.fillStyle = btn.hover ? "#fff" : "#111";
    ctx.fillRect(btn.x, btn.y, btn.w, btn.h);
    ctx.strokeStyle = btn.hover ? "#000" : "#fff"
    ctx.strokeRect(btn.x, btn.y, btn.w, btn.h);
    ctx.fillStyle = btn.hover ? "#000" : "#fff";
    ctx.font = "20px DungGeunMo, sans-serif";
    ctx.fillText(btn.text, btn.x + btn.w / 2, btn.y + btn.h / 2 + 6);
  });
}

function handleEndingMouseMove(e) {
  const canvas = document.getElementById("gameCanvas");
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  let needsRedraw = false;

  endingButtons.forEach(btn => {
    const inside = mx >= btn.x && mx <= btn.x + btn.w && my >= btn.y && my <= btn.y + btn.h;
    if (btn.hover !== inside) {
      btn.hover = inside;
      needsRedraw = true;
    }
  });

  if (needsRedraw) {
    const ctx = canvas.getContext("2d");
    drawGameEndingOverlay(ctx);
  }
}

function handleEndingPopupClick(e) {
  const canvas = document.getElementById("gameCanvas");
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  for (const btn of endingButtons) {
    if (
      mx >= btn.x && mx <= btn.x + btn.w &&
      my >= btn.y && my <= btn.y + btn.h
    ) {
      cancelAnimationFrame(fireAnimId);
      canvas.removeEventListener("click", handleEndingPopupClick);
      canvas.removeEventListener("mousemove", handleEndingMouseMove);

      if (btn.id === "restartBtn") {
        resetGameState();
        goToCharacterSelect();
      } else if (btn.id === "exitBtn") {
        window.close();
      }
    }
  }
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
  block.effectStage = "cracking";
  block.effectTimer = 3;
  block.ignoreCollision = true;  // ✅ 공과의 충돌 무시
  const visited = new Set();
  visited.add(`${block.x},${block.y}`);
  const count = explodeGlassChain(block, 1, visited);
  applyScore(count + 1, 10);
}


function explodeGlassChain(target, depth = 0, visited = new Set()) {
  let destroyed = 0;
  bricks.forEach(b => {
    const key = `${b.x},${b.y}`;
    if (
      b.status === 1 &&
      b.type === BLOCK_TYPES.GLASS &&
      !visited.has(key)
    ) {
      const dx = Math.abs(b.x - target.x);
      const dy = Math.abs(b.y - target.y);

      if (dx <= 80 && dy <= 40) {
        visited.add(key);
        b.effectStage = "pending";
        b.effectTimer = 2 + depth; // ✅ 빠르고 순차적인 이펙트
        b.ignoreCollision = true;
        destroyed++;

        // 다음 깊이 탐색
        destroyed += explodeGlassChain(b, depth + 1, visited);
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
  const bonusUpgradeCount = GameState.upgrades.filter(x => x === "보너스점수").length;
  const multiplier = 1 + 0.2 * bonusUpgradeCount;  // 20%씩 증가
  const totalBase = Math.floor(baseScore * numBlocks * multiplier);

  comboCount += numBlocks;
  comboScore += comboCount * 5;
  score += totalBase;

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
      !b.ignoreCollision &&
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

function playBGM() {
  const bgm = document.getElementById("bgm");
  if (bgm) {
    bgm.muted = false; // 크롬 제한 우회
    if (GameState.settings.bgm) {
      bgm.play();
    }
  }
}

function stopBGM() {
  const bgm = document.getElementById("bgm");
  if (bgm) {
    bgm.pause();
    bgm.currentTime = 0;
  }
}


window.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', () => {
    playBGM();
  }, { once: true }); // 딱 1번만 실행
});