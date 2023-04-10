let myFont

function preload(){
  myFont=loadFont('Coiny.otf')
  }

function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  background(255)
  frameRate(75)
  points=myFont.textToPoints("X",95,830,1000)

  for(let i=0;i<points.length;i++){
    fill(400*noise(i*0.1+frameCount*0.1),200,255)
    noStroke()
    circle(points[i].x,points[i].y,60)
    }
  }