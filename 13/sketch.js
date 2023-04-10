let off=0

function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  background(0)
  let a=0.0063
  stroke(225,107,140)
  strokeWeight(7)
  
  for(let i=0;i<height;i+=15){
    let r = 250*sin(frameCount*0.02)
    line(width/2-r*sin(a*i+off),i,width/2+r*sin(a*i+off),i)
    }
  }