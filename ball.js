var positionX = 0;
var positionY = 0;
var velocity = 200;
var reverse = false;
var ball = document.getElementById("ball");
var body = document.getElementById("body");
var colors = [
    '#ff0000', '#00ff00', '#0000ff',
    '#ff3333', '#ffff00', '#ff6600'
];

// write a function...
function moveBall(){
  var Xmin = 0;
  var Xmax = 500;
  
  var Ymin = 0;
  var Ymax = 500;

if (reverse) {
  positionX = positionX - velocity; 
  positionY = positionY - velocity;
  var random_color = colors[Math.floor(
    Math.random() * colors.length)];
 //   ball.style.background = random_color;
    ball.style.left = positionX + "px";
  ball.style.top  = positionY + "px";
} else {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  positionX = positionX + velocity;
  positionY = positionY + velocity;
  //ball.style.background = randomColor;
  ball.style.left = positionX + "px";
  ball.style.top  = positionY + "px";
}

if (
  positionX > Xmax ||
  positionX === Xmin ||
  positionY > Ymax ||
  positionY === Ymin
) {
  reverse = !reverse;
}

}

setInterval(moveBall,200);
