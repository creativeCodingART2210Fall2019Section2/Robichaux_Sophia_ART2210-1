var movie;

function preload(){
  movie =loadJSON("movies.json");
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(155,55,5);
  textAlign(LEFT);
  a = int(random(0,movie.length));
}

function draw(){
  background(155,55,5);
  stroke(4);
  textSize(25);
  push();
  textAlign(RIGHT);
  text(movie,width/2-125,height/2)
  pop();
}

  function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 
    background(155,55,5 );


}