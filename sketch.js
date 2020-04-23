//move left for circle pizza 
//more right for square pizza
//click for pepperoni toppings 
//click left arrow for pinapple toppings

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 51, 245 );
  
if (mouseX <200){
  //pizza 1
  push();
  fill(240, 203, 6);
  ellipse(200,200,200,200);
  pop();
  push();
  fill(246, 230, 149);
  ellipse(200,200,175,175);
  pop();
  //left_key for pineapple
if(keyIsDown(LEFT_ARROW)){
  translate(-5,-5);
stroke(0);
fill(243, 246, 9);
rect(160,160,20,20);  
rect(240,160,20,20);  
rect(160,240,20,20);  
rect(240,240,20,20);  
}        
  
//pizza with circles
if(mouseIsPressed==true){
 for (let j=1; j<25;j++){
     fill(246, 23, 9);
     ellipse(width/2+(40*cos(j*PI/6)), height/2+(40*sin(j*PI/6)), 10, 10);
     ellipse(width/2+(60*cos(j*PI/6)), height/2+(60*sin(j*PI/6)), 10, 10);
     ellipse(width/2+(80*cos(j*PI/12)), height/2+(80*sin(j*PI/12)), 10, 10);
}
}  
  
}else{
//pizza 2
  push();
  strokeWeight(8);
  stroke(240, 203, 6)
  fill(246, 230, 149)
  rect(100,100,200,200)
  pop();
  
    //left_key for pineapple
if(keyIsDown(LEFT_ARROW)){
  translate(-5,-5);
stroke(0);
fill(243, 246, 9);
rect(160,160,20,20);  
rect(240,160,20,20);  
rect(160,240,20,20);  
rect(240,240,20,20);  
}        
  

if(mouseIsPressed==true) {
  for(let x=100;x<260;x++){
    x=x+20
  fill(246, 23, 9);
  ellipse(x,150,20,20)
    
    for(let x=100;x<260;x++){
    x=x+20
  fill(246, 23, 9);
  ellipse(x,200,20,20)
      
      for(let x=100;x<260;x++){
    x=x+20
  fill(246, 23, 9);
  ellipse(x,250,20,20)
        
  }
}
}
  }
}
}