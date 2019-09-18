function setup() {
createCanvas(windowWidth, windowHeight);
stroke(84, 209, 82);
textSize(70);
textAlign(CENTER, TOP);
text('OH SHIT!! ITS A SNAKE!!!', 500, 30);
}
function draw() {
var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
strokeWeight(weight);
line(mouseX, mouseY, pmouseX, pmouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}