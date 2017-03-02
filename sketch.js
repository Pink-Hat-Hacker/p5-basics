var newWidth = 50;
var newHeight =50;
var r, g, b;

function setup(){
    noStroke();
    r = random(255);
    g = random(255);
    b = random(255);
    // frameRate(30);
    noStroke();
    createCanvas(600,400);
    background(150);

}

function draw(){
    frameRate(30000);
    stroke(r, g, b);
    fill(r, g, b);
    ellipse(mouseX,mouseY,newWidth,newHeight);
    
    if(frameCount%90==0){
        r = random(255);
        g = random(255);
        b = random(255);
      
    }
}



