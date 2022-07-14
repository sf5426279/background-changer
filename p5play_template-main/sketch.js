var background;
var box ;
function setup() {
  createCanvas(400,400);
background= createSprite(1000,1000,10000,10000);
background.shapeColor = "black" ;
box = createSprite (200,200,50,50)
box.shapeColor = "blue"
}

function draw() 
{
  



if(keyIsDown(DOWN_ARROW)){

background.shapeColor = "red"

}

if(keyIsDown(UP_ARROW)){

  background.shapeColor = "black"


}



drawSprites();

}




