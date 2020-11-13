var hr, mn, sc;
var scAngle;
var hrAngle;
var mnAngle


function setup() {
  createCanvas(800,400);
 
}

function draw() {
   background(0);
   hr = hour();
   mn = minute();
   sc = second();
   translate(400,200);
   rotate(-90);
   angleMode(DEGREES);
   scAngle = map(sc, 0, 60, 0, 360);
   mnAngle = map(mn, 0, 60, 0, 360);
   hrAngle = map(hr % 12, 0, 12, 0, 360);

   //seconds
   push();
   rotate(scAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0, 0, 140, 0);
   pop();

    //minutes
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0, 0, 125, 0);
    pop();

      //hour
      push();
      rotate(hrAngle);
      stroke(0,0,255);
      strokeWeight(7);
      line(0, 0, 100, 0);
      pop();

      strokeWeight(7);
      stroke(255,0,0);
      noFill();
      arc(0,0,300,300,0,scAngle);

      strokeWeight(7);
      stroke(0,255,0);
      noFill();
      arc(0,0,320,320,0,mnAngle);

      strokeWeight(7);
      stroke(0,0,255);
      noFill();
      arc(0,0,340,340,0,hrAngle);
      
   

   drawSprites();

}