function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  noFill()
  stroke(100,200,0)
  strokeWeight(3)
  background(220,30,100)
  translate(width/2,height/2)

  push()
  rotate(PI/4)
  for(let i=-height/2;i<height/2;i+=25){
    circle(0,i,sin(i*0.003+frameCount*0.01)*125)
    }
  pop()

  push()
  rotate(-PI/4)
  for(let i=-height/2;i<height/2;i+=25){
    circle(0,i,sin(i*0.003+frameCount*0.01)*125)
    } 
  pop()
  }