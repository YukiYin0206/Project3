function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  background(235,122,119)
  translate(width*0.5,height*0.5)
  rotate(PI/4)

  myShape()
  rotate(PI/2)
  myShape()
  }

function myShape(){
  noStroke()
  fill(255,190,8)

  for(let i=-400;i<400;i+=15){
    ellipse(0,i,(1.25+sin(i*0.05+frameCount*0.05))*50,10)
    }
  }