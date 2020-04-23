let bubbles = [];




function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
  bubbles[i] = new Bubble(220,200,20);
    }
  }

function draw() {
  background(0);
  
  push();
    c = color('rgb(0,0,255)');
  fill(c); 
  noStroke()
    rect(300,200,80,120)
    ellipse(340,200,60,60)
    rect(335,150,10,30)
    rect(300,150,45,10)
  
  pop();
  
  print("press and hold for bubbles")
  
    let s = 'bubble bottle';
fill(900);
text(s, 300, 250, 70, 80); 
  
  
  if(rect,mouseIsPressed==true)
    
  
  for (let i = 0; i < bubbles.length; i++) {
    let x = 10+30 *i;
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
  
  show() {
    stroke(255);
    strokeWeight(4);
    fill(255,204,0);
    ellipse(this.x, this.y, this.r * 2);
    
  }
}






