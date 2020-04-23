function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(1);
  
  colorMode(RGB, 255, 255, 255, 1);
  
//Earth
  push();
  fill(140, 255, 0);
  stroke(10, 10, 10, 1);
  strokeWeight(4);

  arc(200, 250, 150, 150, 0, radians(180));
  pop();
  
//Planet Moutains
  push();
  fill(150,100,0)
  translate(-25, 100)
  triangle(150, 150, 175, 110, 200, 150);
  translate(20, 0)
  triangle(150, 150, 175, 110, 200, 150);
  translate(20, 0)
  triangle(150, 150, 175, 110, 200, 150);
  pop();
  
  ellipse(160,290,15,15)
  ellipse(200,280,15,15)
  ellipse(240,290,15,15)
  
  push();
  fill(200,200,0);
  rect(160,290,2,150);
  rect(200,280,2,150);
  rect(240,290,2,150);
  pop();
  
  
  
//Building 1
push();
  fill(200,200)
  rect(210, 200, 30, 50)
  rect(235, 210, 25, 40)
  rect(225, 220, 20, 30)
  translate(50,50)
triangle(150, 150, 175, 110, 200, 150);
pop();

  rect(215,205,10,10)
  rect(213,225,10,10)
  rect(230,230,10,10)
  rect(245,220,10,10)

//Planet Sun
  push();
  fill(255, 255, 0);
  stroke(300, 321, 350, 1);
  strokeWeight(1);
  translate(-20, -100)
  arc(20, 100, 250, 250, 0, radians(90));
  pop();

  //Planet Moon
push();
  fill(89,89,0);
  ellipse(300, 120, 80, 80)
pop();
  push();
  fill(200,100,0);
  ellipse(310, 100, 10, 10)
  ellipse(290, 120, 10, 10)
  ellipse(300, 145, 10, 10)
pop();
  push();
  fill(99,99,0)
  translate(220,70)
  arc(25,25,60,60,0,QUARTER_PI);
pop();
  
  //Planet Moon II
  push();
  fill(20,100,0)
  ellipse(330, 40, 40, 40)
  pop();
push();
  fill(200,100,0)
  translate(300,10);
  arc(30, 30, 45, 45, 0, PI + QUARTER_PI);
  pop();
  
 
  
  
  
  
//
}