var fr,mr;



function setup() {
  createCanvas(1200,800);
fr =   createSprite(400, 100, 50, 80);
mr = createSprite(400,800,80,30);

fr.velocityY = 5;
mr.velocityY = -5;

fr.shapeColor = "green";
mr.shapeColor= "green";

fr.debug = true;
mr.debug = true;
}

function draw() {
  background(0);  

//mr.x = World.mouseX;
//mr.y = World.mouseY;

if(mr.x-fr.x < mr.width/2+fr.width/2 && 
  fr.x - mr.x < mr.width/2+fr.width/2){
    mr.velocityX = mr.velocityX * (-1);
    fr.velocityX = fr.velocityX * (-1);
  }
 if( mr.y-fr.y < mr.height/2+fr.height/2 &&
  fr.y-mr.y < fr.height/2+mr.height/2){

    mr.velocityY = mr.velocityY * (-1);
    fr.velocityY = fr.velocityY * (-1);
}






  drawSprites();
}