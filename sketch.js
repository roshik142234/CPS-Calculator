var box, score;

var tie;
var cps;
var state;
function setup() {
  createCanvas(400,400);
  time=0;
  score=0;
  cps=0;
  state="new"
}

function draw() {
  background(0);  

  stroke("green");
  textAlign(CENTER);


  if(state="new") {
    text("Clicks: "+score, 200,200);


    if(frameCount%60===0){
      time=time+1;
    }

    text("Seconds: "+time,200,150);

    cps=Math.round(score/time/2);
    textSize(20);
    text("CPS: "+cps,200,250);
  }
  if(time===5) {
    if(frameCount%60===0){
      time=time+0;
    }
  }
  
  drawSprites();
}


function mouseReleased() {
  if(state ==="new") {
    score = score+1;
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    score = 0;
    time=0
  }
}
 



