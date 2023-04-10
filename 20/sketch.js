//Reference video tutorials from Youtube and Bilibili
function setup(){
  createCanvas(1000,1000,WEBGL)
  }

function draw(){
  background(200,20,130)
  noStroke()
  rectMode(CENTER)

  for(let i=-width/2;i<width/2;i+=51){
    for(let j=-height/2;j<height/2;j+=61){
      if(abs(abs(i)-abs(j))>75){
        fill(12,40,124)
        push()
        translate(i,j)
        if(i%2==0){
          rotateX(frameCount*0.01)
          rotateY(frameCount*0.01)
          }
        else{
          rotateY(-frameCount*0.01)
          rotateX(-frameCount*0.01)
          }
        rect(0,0,45,55)
        pop()
        }
      }
    }
  }