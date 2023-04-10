let num=200
let radius=10

function setup(){
  createCanvas(1000,1000)
  smooth()
  }

function draw(){  
  background(200,100,200,20)
  colorMode(HSB)
  noStroke()
  
  for (let i=num;i>0;i--){
    fill(i/4,200,200)
    let x=(width/2)+pow(sin((2*i+frameCount)/40),1)*400
    let y=(height/2)+pow(sin((2*i+frameCount)/20),1)*200
    ellipse(x,y,radius+i/3,radius+i/3)
    }
  }
