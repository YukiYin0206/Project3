let img
let pixelsArray

function preload(){
  img=loadImage("img.jpg")
  }

function setup(){
  createCanvas(1000,1000)
  img.resize(width,height)
  img.loadPixels()
  }

function draw(){
  let x=int(random(width))
  let y=int(random(height))

  let color=img.get(x,y)
  let r=red(color)
  let g= green(color)
  let b=blue(color)
  let a=alpha(color)

  noStroke()
  fill(r,g,b,a*0.5)
  ellipse(x,y,60,60)
  }