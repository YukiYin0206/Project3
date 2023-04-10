function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  background(255)
  noFill()
  strokeWeight(3)
  
  for(let s=0;s<width;s+=10){
    stroke(s/width*300,200,200)
    
    beginShape()
    vertex(s,0)
    bezierVertex(mouseX/4,mouseY,mouseX,height/2,s,height)
    endShape()
    }
  }

function mousePressed(){
  saveCanvas('sketch8','png')
  }