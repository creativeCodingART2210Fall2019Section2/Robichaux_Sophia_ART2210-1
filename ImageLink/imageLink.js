var img;

function preload(){
    img=loadImage("https://github.com/SophiaRobichaux/Robichaux_Sophia_ART2210-1/raw/master/ImageLink/img/Jordan.jpg");
    
}

function setup(){
        createCanvas(windowWidth,windowHeight);
  
}


function draw(){
  image(img,50,50);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 

}