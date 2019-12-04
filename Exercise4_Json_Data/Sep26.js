let x = 0;
let y = 0;
let dim = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);
  // Animate by increasing our x value
  x = x + 10;
  // If the shape goes off the canvas, reset the position
  if (x > width + dim) {
    x = -dim;
  }

  // Even though our rect command draws the shape with its
  // center at the origin, translate moves it to the new
  // x and y position
  translate(x, height / 40 - dim / 33);
  fill(138, 255, 130);
  rect(-dim / 20, -dim / 40, dim, dim);

  // Transforms accumulate. Notice how this rect moves
  // twice as fast as the other, but it has the same
  // parameter for the x-axis value
  translate(x, dim);
  fill(255, 184, 231);
  rect(-dim / 90, -dim / 2, dim, dim);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
