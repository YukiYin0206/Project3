function setup(){
  createCanvas(1000,1000)
  background(88,178,220)
  }

function draw(){
  angleMode(DEGREES)
  stroke(165,222,228)
  strokeWeight(100)
  translate(width/2,height/2)

  push()
  rotate(-50)
  line(0,0,500,0)
  pop()

  push()
  rotate(50)
  line(0,0,500,0)
  pop()

  push()
  rotate(230)
  line(0,0,500,0)
  pop()

  push()
  rotate(130)
  line(0,0,500,0)
  pop()
  }
