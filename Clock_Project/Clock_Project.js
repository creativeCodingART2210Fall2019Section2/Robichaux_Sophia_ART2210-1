function setup() {
  createCanvas(600, 600);
//The "colorMode" function changes the way the code interprets color, allowing me to do cool stuff like changing the color.
  colorMode(HSB,360,100,100);
}

function draw(){
///STYLING OF THE CLOCK
  background(20);
//These makes up the circles
   circle(300, 300, 100);
   circle(300, 300, 70);
   circle(300, 300, 20);
   circle(70, 70, 40);
   circle(500,200,100);
   circle(200,500,45)
//This fills the circles and numbers with the random color  
{ fill(random(255), random(255), random(255)); }

  textSize(20);

//This tells the computer how to space out the numbers
  for(var i=1; i<13; i++){
    text(i, width/2 +sin(i/6*PI)*150,height/2-cos(i/6*PI)*150);
  }
///ACTUAL CLOCK CODE
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
}