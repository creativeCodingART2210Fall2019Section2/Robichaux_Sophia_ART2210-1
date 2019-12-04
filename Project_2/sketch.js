var song;
let ExtraCanvas;
let img;
let snowflakes = []; // array to hold snowflake objects

///PRELOAD
function preload() {
  song = loadSound("elf.mp3");
  img1 = loadImage('bugfix.jpg');
  img2 = loadImage('santaclause.jpg');
}

///SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
///This creates the additional canvas so I can draw on top of Santa
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
  background(0);
  song.play();
  
}

///DRAW
function draw() {
  background(48,130,40);
  image(extraCanvas, 0, 0);
  
///Santa Image
  imageMode(CENTER);
  image(extraCanvas, 0, 0);
  image(img1, windowWidth/2, windowHeight/2);
  image(img2, windowWidth/2, windowHeight/2);
 
///This turns the mouse into a "paintbrush"
  if (mouseIsPressed) {
  extraCanvas.fill(255);
  extraCanvas.noStroke();
  extraCanvas.ellipse(mouseX, mouseY, 20, 20);}
  
  image(extraCanvas,windowWidth/2, windowHeight/2);
  
  //How fast the snow is going to fall
  let t = frameCount / 60;
  
  //This creates a random # of snowflakes in each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // attaches snowflake function
  }

  //creates a "for..of" loop for the snowflakes
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
  
}
///WINDOW RESIZE
function windowResized() { 
   extraCanvas.resizeCanvas(windowWidth, windowHeight);
  resizeCanvas(windowWidth, windowHeight);
}


///SNOWFLAKE CLASS
function snowflake() {
  
  // tells snowflakes where to go LOCATION
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  noStroke()
  this.size = random(4, 10);

  // Creates a radius for the spiral to follow
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // This adjusts angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
