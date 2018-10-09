var x = 0;
var y = 0;
var xClick = -1;
var yClick = -1;
var contador = 0;
var limite = 4;
var delay;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  fill(0);
}

function draw() {
  // put drawing code here
  background(255);
  line(0, 100, 400, 100);
  line(0, 200, 400, 200);
  line(0, 300, 400, 300);
  line(100, 0, 100, 400);
  line(200, 0, 200, 400);
  line(300, 0, 300, 400);

  if (contador < limite) {
    //con math.floor se logra redondear a un entero con mayor precision del float
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
    // push
    console.log("Soy X Rnadom: " + x);
    console.log("Soy Y random: " + y);
    contador++;
    rect(x * 100, y * 100, 100, 100);
    frameRate(1);
  } else {
    rect(xClick * 100, yClick * 100, 100, 100);
  }
}

function mousePressed() {
  console.log("x:" + mouseX + " y:" + mouseY);
  xClick = Math.floor(mouseX / 100);
  yClick = Math.floor(mouseY / 100);
  // pop y comparar
  console.log("x:" + xClick + " y:" + yClick);
}