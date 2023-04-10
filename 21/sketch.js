//Reference video tutorials from Youtube and Bilibili
let light=true
let col
let fr
let to

function setup(){
  createCanvas(1000,1000)
  fr=color(30,136,168)
  to=color(0,92,175)
  frameRate(5)
  }

function draw(){
  background(0)
  
  for (let i=0;i<=width;i+=30){
    for (let j=0;j<=height;j+=30){
      fill(255)
      
      if (abs(i-j)<125){
        if (random(1)<0.9){
          col=lerpColor(fr,to,i/width)
          fill(col)
          }
        }

      if (abs(width-i-j)<125){
        if (random(1)<0.9){
          col=lerpColor(fr,to,j/height)
          fill(col)
          }
        }

      circle(i,j,25)
      }
    }
  }