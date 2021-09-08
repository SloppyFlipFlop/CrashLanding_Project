// "use strict";



console.log(mainPlayes);
console.log(enemys);
console.log(elements);

var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

let checkSize = () => {
  
  init();
  checkWinner();
};

window.addEventListener("resize", checkSize);

// const imageWidth = 150;
// const imageHeight = 100;

const drawImage = (url, x, y, width, height, id) => {
  const image = new Image();
  image.src = url;
  image.id = id;
  image.onload = () => {
    ctx.drawImage(image, x, y, width, height);
  };
};

let move = (dir) => {
  if (dir === "right") {
    players[0].x += 10;
  }

  if (dir === "left") {
    players[0].x -= 10;
  }
  checkSize();
};

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 65 || event.keyCode === 37) {
    // Move the player left
    move("left");
  }

  if (event.keyCode === 68 || event.keyCode === 39) {
    // move the player to the right
    move("right");
  }
});

let drawBackground = () => {
  var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "lightblue");
  gradient.addColorStop(1, "rgb(59, 154, 185)");

  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = gradient;
  ctx.fill();
};

let init = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawBackground();
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  players.map((player) => {
    const { src, x, y, id } = player;
    drawImage(src, x, y, imageWidth, imageHeight, id);
  });
};

window.onload = init();

// Check to see if the gamne is over
// When game is over, something will happen to the canvas saying the game is over

let isThereAWinner = false;

let checkWinner = () => {
  players.map((player) => {
    // console.log(window.innerWidth)
    if (player.x > window.innerWidth * 0.8) {
      console.log(player.id);
      isThereAWinner == true;
    }
  });
  return isThereAWinner;
};

if (isThereAWinner === true) {
  console.log(`player ${player.id} won!!!`);
}
