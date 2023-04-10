function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  background(25,50,150)
  translate(width/2,height/2)
  frameRate(55)

  let angle = map(sin(frameCount*0.1),-1,1,0,PI/3)/10
  noStroke()
  fill(map(angle,0,PI/3/10,75,175),100,200)

  for(let i=0;i<10;i++){
    push()
    rotate(angle*i)
    ellipse(0,0,30,800)
    pop()

    push()
    rotate(-angle*i)
    ellipse(0,0,30,800)
    pop()
    }
  }