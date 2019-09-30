let bg;

function preload() {
    pumpkin = loadImage('Robichaux_Sophia_ART2210-1/Clock_Project/pumpkin.jpg')
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  Image(pumpkin 300,300)
  textSize(20);
  
  //space numbers around a circle
  for(var i=1; i<13; i++){
    text(i, width/2 +sin(i/6*PI)*150,height/2-cos(i/6*PI)*150);
  }
  
  //add hour hand
  strokeWeight(6);
  stroke(255, 204, 0);
  line(width/2, height/2, width/2 +sin((hour()+minute()/60)/6*PI)*50,height/2-cos((hour()+minute()/60)/6*PI)*50);
  //add minute hand
  strokeWeight(4);
  line(width/2, height/2, width/2 +sin(minute()/30*PI)*75,height/2-cos(minute()/30*PI)*75);
  //add second hand
  strokeWeight(2);
  line(width/2, height/2, width/2 +sin(second()/30*PI)*100,height/2-cos(second()/30*PI)*100);
}