function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  background(255,20)

  let x1=map(sin(frameCount*0.08),-1,1,width*0.1,width*0.9)
  let y1=map(sin(frameCount*0.08),-1,1,height*0.1,height*0.9)
  let x2=map(cos(frameCount*0.08),-1,1,width*0.1,width*0.9)
  let y2=map(cos(frameCount*0.08),1,-1,height*0.1,height*0.9)

  noStroke()
  ellipse(x1,y1,width*0.15,width*0.15)
  fill(100,200,100)
  
  ellipse(x2,y2,width*0.15,width*0.15)
  fill(200,100,200)
  }