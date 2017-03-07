var x = 0;
var speed = 3;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(45, 237, 198);
    
    //I wrote this so background could change to pink when clicked
     if(mouseIsPressed){
         background(255,63,194);
     }
     
    stroke(255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(138,0,9);
    }
    else{
        noFill();
    }
    
    //circle
    ellipse(x,200,100,100);
    
    //this code is going to get the cirlce to move on it's own
    if(x>width || x < 0 ){
        console.log("CIRCLE IS OFF THE SCREEN!!!")
        speed = speed * -1;
    }
    
    x = x + speed;
    console.log(x);
} 
