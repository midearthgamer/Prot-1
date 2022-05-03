
function setup() {
  createCanvas(window.height, window.width);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed


  //HEY You said "write the code to change background color" you didn't say to what on the SAME line. ALSO the colors mainly red soo.
  


  if (keyIsDown(RIGHT_ARROW)) 
  {
    background(random(0,256),random(0,128),random(0,128));
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

