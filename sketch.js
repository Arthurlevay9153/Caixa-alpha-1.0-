var caixa


function setup() {
  createCanvas(400,400);

caixa = createSprite (200,200,30,30);

}

function draw() 
{
  background("#7A4100");

if (keyIsDown(RIGHT_ARROW)){
caixa.position.x = caixa.position.x +5;  
}



drawSprites ();
}




