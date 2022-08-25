var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage;

var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("background.png");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  track = loadImage("track.jpg");
  fuelImage = loadImage("fuel.png");
  powerCoinImage = loadImage("goldCoin.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


