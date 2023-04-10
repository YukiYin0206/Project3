//Reference video tutorials from Youtube and Bilibili
let points=[]

function setup(){
  createCanvas(1000,1000)
  
  textSize(1200)
  textStyle(BOLD)
  textAlign(CENTER,CENTER)
  text("X",width/2-18,height/2+50)

  let step=30
  let i=0
  for (let x=0;x<width;x+=step){
    for (let y=0;y<height;y+=step){
       if(alpha(get(x,y))>0.5){
          points.push([x,y])
          }
        }
    }
  }

function draw(){
  background(0)
  frameRate(10)
  
  for(let i=0;i<points.length;i++){
    let x=points[i][0]
    let y=points[i][1]
    fill(random(255),random(255),random(255))
    circle(x,y,random(30))
    }
  }