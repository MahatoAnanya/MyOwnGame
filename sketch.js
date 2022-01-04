var boy,boyImg;
var zombies;
var ground,invisibleGround;
var groundImage;

var jungle;

var stoneImg,stone,stoneGroup;

var gameOver, restart;

var PLAY=1;
var gameState=1;
var END=0;
var score;
//var Text;

function preload(){
boyImg=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png")

zombiesImg=loadImage("zombies.png")

jungleImage = loadImage("jungle.png")


stoneImg=loadImage("stone.png")
restartImg=loadImage("restart.png")
gameOverImg=loadImage("gameOver.png")







}

function setup() {
createCanvas(600,600) 
//spookySound.loop();
stoneGroup=new Group()
boy=createSprite(200,200,50,50)
boy.scale=0.4
boy.addAnimation("boy",boyImg);
zombies=createSprite(200,200,50,50)
zombies.scale=0.4
zombies.addImage("zombies",zombiesImg);

jungle=createSprite(50,180,400,20)
jungle.scale=1.2
jungle.addImage("jungle",jungleImage);
jungle.x=jungle.width /2;

gameOver=createSprite(300,100);
gameOver.addImage(gameOverImg);
gameOver.visible=false;

restart=createSprite(300,100);
restart.addImage(restartImg);
restart.visible=false;

invisibleGround=createSprite(200,190,400,10)
invisibleGround.visible=false











}

function draw() {
  background(225)
   //Text("Score:"+ScreenOrientation,500,50)
  



    if(gameState===PLAY){

      if(keyDown("space")){
        boy.velocityY=-5
      }
      //gameOver.visible=false
      //restart.visible=false
      jungle.velocityX-=(4+3*score/100)
      score = score + Math.round(getFrameRate()/60)
      if(score%100===0&&score>0){

      }
      if(jungle.x < 0) {
        jungle.x=jungle.width/2;
      }
      
      boy.velocityY = boy.velocityY + 0.8
     // if(zombies.isTouching(stoneGroup)){
        //zombies.velocityY=-10
      //}

      
      if(zombies.isTouching(boy)){
        gameState=END
      }
      else {
        if(stoneGroup.isTouching(boy)){
          gameState = END
      }
    }  
if (gameState===END){
  gameOver.visible=true
  restart.visible=true
  jungle.velocityX=0


}

 







drawSprites()

}

function stoneGroup(){
  if (World.frameCount % 200 == 0){
    var stone = createSprite(Math.round(50,width-50),40,10,10);
    stone.addImage(stoneImg);
    stone.scale=0.12;
    stone.velocityY = 3;
    stone.lifetime = 150;
 
  }
}
}