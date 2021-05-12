var player;
var score = 0;
var gameState, START, PLAY, END;
var touches = 0;
var redBlocksGroup, greenBlocksGroup;

function setup() {
  createCanvas(500, 500);

  player = createSprite(width / 2, height - 100, 40, 40);
  player.shapeColor = "white";

  redBlocksGroup = new Group();
  greenBlocksGroup = new Group();

  /*
   startButton = createButton("START");
   startButton.position(width / 2 - 25, height / 2);
   startButton.visible = true;
  */

  /* 
   resetButton = createButton("RESET");
   resetButton.position(width / 2 - 25, height / 2);
   resetButton.visible = false;
  */
}



function draw() {
  background(0);

  gameState = START;

  if (keyWentDown("SPACE")) {
    gameState = PLAY;
  }

  if (gameState === PLAY) {
    play();
    scoreChanging();
  }

  if (player.isTouching(redBlocksGroup)) {
    touches += 1;
  }

  if (touches === 5) {
    gameState = END;
  }

  /*
  if (gameState === END) {
    resetButton.visble = true;
    if(resetButton.mousePressed(reset));
  }
  */

  drawSprites();

  textScores();

  textSize(10);
  text("PRESS SPACE TO START", 180, 15);

}
