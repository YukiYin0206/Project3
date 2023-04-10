function setup(){
  createCanvas(1000,1000)
  }

function draw(){
  background(255,237,200)
  translate(width/2,height/2)
  frameRate(5)

  rotate(PI/4)
  for(let y = -height*0.5;y<height*0.5;y+=10){
    for(let x = -width*0.1;x<width*0.1;x+=10){
      push()
      translate(x,y)
      stroke(240,150,170)
      strokeWeight(1.5)
      rotate(random(5))
      line(-10,5,10,5)
      pop()
      }
    }

  rotate(PI/2)
  for(let y = -height*0.5;y<height*0.5;y+=10){
    for(let x = -width*0.1;x<width*0.1;x+=10){
      push()
      translate(x,y)
      stroke(190,194,63)
      strokeWeight(1.5)
      rotate(random(5))
      line(-10,5,10,5)
      pop()
      }
    }
  }