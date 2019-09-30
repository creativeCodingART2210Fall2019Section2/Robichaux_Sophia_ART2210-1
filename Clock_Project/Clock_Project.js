
function setup() {
  createCanvas(600, 600);
  colorMode(HSB,360,100,100);
}

function draw() 
{
  background(20);
   ellipse(300, 300, 100, 100);
  
  var sec = second();
  var More = second() + 1;
  
  for (var sec = 0; sec <= More; sec += 1){
    fill(random(255), random(255), random(255));
  }

  textSize(20);

  
  //Number Spaces
  for(var i=1; i<13; i++){
    text(i, width/2 +sin(i/6*PI)*150,height/2-cos(i/6*PI)*150);
  }
  circle(300, 300, 70);
  circle(300, 300, 20);
 
  //Hour
  strokeWeight(6);
  stroke(255, 204, 0);
  line(width/2, height/2, width/2 +sin((hour()+minute()/60)/6*PI)*50,height/2-cos((hour()+minute()/60)/6*PI)*50);
  //Minute
  strokeWeight(4);
  line(width/2, height/2, width/2 +sin(minute()/30*PI)*75,height/2-cos(minute()/30*PI)*75);
  //Second
  strokeWeight(2);
  line(width/2, height/2, width/2 +sin(second()/30*PI)*100,height/2-cos(second()/30*PI)*100);

  function newFunction() {
    image(i, this.x, this.y);
  }
}