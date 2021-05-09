var player;
var score = 0;
var gameState, START, PLAY, END;
var redBlocksGroup, greenBlocksGroup;

function setup() {
  createCanvas(500, 500);

  player = createSprite(width / 2, height - 100, 40, 40);
  player.shapeColor = "white";

  redBlocksGroup = new Group();
  greenBlocksGroup = new Group();

}



function draw() {
  background(0);

  movement();

  spawning();

  scoreChanging();

  drawSprites();

  textScores();

}
