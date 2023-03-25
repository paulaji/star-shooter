let bullets = [];
let enemies = [];
let score = 0;

let font,
  fontsize = 25;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont("PressStart2P-Regular.ttf");
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  // enemies
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-900, 0),
    };
    enemies.push(enemy);
  }
}

function draw() {
  background(51);
  // to draw rectangle from center rather than from top left
  rectMode(CENTER);
  // we drew the player
  circle(mouseX, height - 50, 25);

  // move and draw the bullets
  for (let bullet of bullets) {
    bullet.y -= 10;
    circle(bullet.x, bullet.y, 10);
  }

  // creating enemies
  for (let enemy of enemies) {
    enemy.y += 1;
    rect(enemy.x, enemy.y, 30);

    // losing condition
    if (enemy.y > height) {
      text("You Lose", 100, 300);
      // text("You Lose");
      noLoop();
    }
  }

  // killing enemies
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        score++;
        if (score == 10) {
          text("You Win", 100, 300);
          noLoop();
        }
      }
      // score++;
      console.log(score);
    }
  }
  text(score, 25, 25);
}

// bullets spawn on click
function mousePressed() {
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);
}

// score
// losing the game
// what else
// health
// powerups
