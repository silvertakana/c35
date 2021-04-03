var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  var baloonpos = database.ref('baloon/pos/');
  baloonpos.on("value", readPosition, showError);
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
  control(5)
  

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon! ",40,40);
}
function control(speed){
  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
  }
    if(keyDown(LEFT_ARROW)){
      writePosition(-speed,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(speed,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-speed);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,speed);
    }
}
function writePosition(x,y){
  database.ref('baloon/pos/').set({
    'x': x + balloon.x,
    'y': y + balloon.y
  })
}

function readPosition(data){
 // console.log(position.x);
  balloon.x = data.val().x;
  balloon.y = data.val().y;
}

function showError(){
  console.log("Error in writing to the database");
}