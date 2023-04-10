function setup(){
  createCanvas(1000,1000,WEBGL)
  }

function draw(){
  background(0)
  noStroke()

  ambientMaterial(255,50,255)
  ambientLight(150)
  directionalLight(255,255,255,width,0,-1)
    
  rotateX(frameCount*0.01)

  push()
  rotateZ(frameCount*0.01)
  box(100,600,100)
  pop()
  
  push()
  rotateZ(-frameCount*0.01)
  box(100,600,100)
  pop()
  }