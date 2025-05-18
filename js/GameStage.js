import { GameState } from './GameState.js';
import { showScoreResult } from './ScoreManager.js';
import { goToMapScene } from './MapScene.js';
import { goToStoryScene } from './StoryScene.js';

let canvas, ctx;
let ball, paddle, bricks;
let score = 0;
let comboScore = 0;
let comboCount = 0;
let comboTimer = null;
let isGameOver = false;
let animationId = null;

export function startStage(stageNumber) {
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
    speed += 1; // 디버프 적용
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

  bricks = [];
  for (let c = 0; c < 5; c++) {
    bricks[c] = [];
    for (let r = 0; r < 2; r++) {
      const colors = ['#00FECA', '#FDF200', '#FF85EA', '#7B61F8'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const points = 10 + Math.floor(Math.random() * 30);
      bricks[c][r] = { x: 0, y: 0, status: 1, color, points };
    }
  }

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

  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius)
    ball.dx = -ball.dx;

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

function drawBricks() {
  for (let c = 0; c < bricks.length; c++) {
    for (let r = 0; r < bricks[c].length; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        const x = c * (70 + 10) + 35;
        const y = r * (20 + 10) + 30;
        b.x = x;
        b.y = y;
        ctx.beginPath();
        ctx.rect(x, y, 70, 20);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function collisionDetection() {
  for (let c = 0; c < bricks.length; c++) {
    for (let r = 0; r < bricks[c].length; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (ball.x > b.x && ball.x < b.x + 70 && ball.y > b.y && ball.y < b.y + 20) {
          b.status = 0;
          ball.dy = -ball.dy;
          score += b.points;
          comboCount++;
          comboScore += comboCount * 5;

          $('#score').text(score + comboScore);
          $('#combo').text(comboCount);

          if (comboTimer) clearTimeout(comboTimer);
          comboTimer = setTimeout(() => {
            comboCount = 0;
          }, 1500);
        }
      }
    }
  }
}

function checkGameClear() {
  const cleared = bricks.every(col => col.every(b => b.status === 0));
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
