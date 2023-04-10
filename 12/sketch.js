function setup(){
  createCanvas(1000,1000)
  background(15,37,64)
  }

function draw(){
  background(15,37,64,25)
  stroke(125,185,222)
  translate(width/2,height/2)

  push()
  rotate(PI/4)
  strokeWeight(75)
  line(0,-height/2.5,0,height/2.5)
  pop()
  
  rotate(-PI/4)
  strokeWeight(25)

  for(let i=0;i<20;i++){
    let r = frameCount*0.01+i*PI/10
    let x = 50*sin(r)
    let y = 450*cos(r)
    point(x,y)
    }
  }