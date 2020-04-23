//got back and forth example online
var cspeed; // motion for circle
var cx,cy; //circle
var a,b
//colors
var r,g,b,a
//wrap around
var x,y
//circular motion
var radius=25
var angle=0
var speed=0.03
var centerX=200
var centerY=200
//random
var c,d,e

function setup() {
  createCanvas(400, 400);

  a = height / 2;
  cx=200;
  cy=height/2;
  cspeed =2;
  rx=0;
  ry=0;
  rxSpeed=2;
  rySpeed=2;
  a++
  b++
  x=150
  y=height/2

}

function draw() {
  

//TV
r= random(255)
g= random(100,200)
b= random(100)
a= random(200,255)
  
  push();
  background(88, 24, 69);
  fill(129, 129, 120)
  stroke(216, 216, 200);
  strokeWeight(9);
  rect(125,125,160,150);
  pop();
    push();
  fill(122, 129, 132)
rect(120,280,170,30)

push();
textSize(10);
text("TV",190,128)
fill(3, 3, 3);  
pop();
  
push();
textSize(10);
fill(254, 0, 177);
text("ch.1",125,305)
pop(); 

push();
textSize(10);
fill(254, 0, 177);
text("ch.2",160,305)
pop();   

push();
textSize(10);
fill(254, 0, 177);
text("ch.3",200,305)
pop(); 

push();
textSize(10);
fill(254, 0, 177);
text("ch.4",245,305)
pop(); 
  
push();
textSize(10);
fill(254, 0, 177);
text("ch.5",270,305)
pop(); 
  
//buttons
  
  push();//square button ch. 5
  if (mouseX>275 && mouseX<285 && mouseY>285 && mouseY<=295){
  fill(255,0,0)}
  else{fill(153, 153, 102)}
  rect(275,285,10,10)
  pop();
  
    push();//circle button ch. 4
  if(mouseX>255 && mouseX<265 && mouseY>265 && mouseY<=300){
  fill(220, 225, 22)}
  else{fill(153, 153, 102)}
  ellipse(255,290,10,10)
  pop();
  
  push();//square button ch. 3
  if(mouseX>205&&mouseX<222&&mouseY>280&&mouseY<=300){
  fill(60, 225, 22)}
  else{fill(153, 153, 102)}
  rect(210,285,10,10);
  pop();
  
  push();//square button ch. 2
  if(mouseX>165&&mouseX<175&&mouseY>280&&mouseY<+300){
  fill(22, 46, 225)}
  else{fill(153, 153, 102)}
  ellipse(170,290,10,10)
  pop();
  
    push();//square button ch. 1
  if(mouseX>120&&mouseX<140&&mouseY>280&&mouseY<+300){
  fill(225, 22, 111)}
  else{fill(153, 153, 102)}
  rect(130,285,10,10)
  pop();
  
  //-------------------------
    //square button ch. 5
if(mouseIsPressed==true&& mouseX>275 && mouseX<285 && mouseY>285 && mouseY<=295)
  {
  push();
fill (252, 255, r) //yellow
 rect(130,130,32,140) 
pop();
    push();
fill(24, 233, g)  //baby blue
 rect(160,130,32,140)  
pop();
    push();
fill(42, 229, b) //green
 rect(190,130,32,140)
pop();
    push();
fill(229, 30, a)  //pink
 rect(220,130,32,140)
pop();
    push();
fill(229, 30, r)  //red
 rect(250,130,32,140)
pop();
  
}
//circle button ch.4 
push();
if(mouseIsPressed==true&&mouseX>235 && mouseX<265 && mouseY>265 && mouseY<=300){
fill(211, 25, 154)
  //ellipse moving right
  ellipse(cx,cy,50,50);
 cx+= cspeed;  // move ellipse horizontally by speed variable
  
  // set conditional for ellipse touching the edges
  if(cx-150 <= 0 || cx+25>280){  
    cspeed *= -1; //reset so that ellipse begins off-screen
  pop();
  }  
  }
    //middle square button ch.3
  push();
if(mouseIsPressed==true&& mouseX>205&&mouseX<222&&mouseY>280&&mouseY<+300){
  fill(255, 0, 0)
  ellipse(x,y,30,30)
  x++
  if(x>270){
  x=x-120
  }
}
  pop();
//circle button ch.2 
  if(mouseIsPressed==true&& mouseX>165&&mouseX<175&&mouseY>280&&mouseY<+300){
  translate(centerX, centerY);
  rotate (angle);
    fill(162, 22, 225)
  rect(radius, 0, 10, 10);
	line(0, 0, radius, 0);
  angle = angle + speed;
  }
//square button ch.1
  if(mouseIsPressed==true&&mouseX>120&&mouseX<140&&mouseY>280&&mouseY<+300){
  c=random(200,220)
  d=random(200,220)
  e=random(100,200)
  fill(e)
  rect(c,d,25,25)
  }
}  