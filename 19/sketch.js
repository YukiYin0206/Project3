let myFont

function preload(){
  myFont=loadFont('PressStart.otf')
  }

function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  background(155,144,194)
  points=myFont.textToPoints("X",100,1005,900)

  for(let i=0;i<points.length;i++){
    push()
    translate(points[i].x,points[i].y)
    let v=createVector(points[i].x-mouseX,points[i].y-mouseY)
    rotate(v.heading())

    stroke(232,122,144)
    strokeWeight(3)
    fill(249,191,69)
    rectMode(CENTER)
    rect(0,0,30,20)
    pop()
    }
  }