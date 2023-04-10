function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  background(221,210,59)

  for(let i=0;i<width;i+=width/100){
    line(i,0,mouseX,mouseY)
    line(i,height,mouseX,mouseY)

    stroke(245,150,170)
    }
  }

function mousePressed(){
  saveCanvas('sketch05','png')
  }