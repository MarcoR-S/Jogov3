var principal, principalWalk;
var background, backgroundImg;
var lifeBar, lifeValue, lifeImg, lifeHud
var hungerBar, hungerValue, hungerImg, hungerHud
var sleepBar, sleepValue, sleepImg, sleepHud
var inventory, bag, bagImg


function preload(){
  //principalWalk = loadAnimation("Boneco1A.png","Boneco2A.png")
  principalWalk = loadImage ("./assets/Boneco1A.png")
  backgroundImg = loadImage("./assets/Cenário-Vila.png")
  lifeImg = loadImage("./assets/heart.png")
  hungerImg = loadImage ("./assets/comida.png")
  sleepImg = loadImage("./assets/lua.png")
  bagImg = loadImage("./assets/mochila.png")

}

function setup() {
  //createCanvas(500,500);
  createCanvas(windowWidth,windowHeight);
  


  background = createSprite(windowWidth, windowHeight)
  background.addImage("bgimg", backgroundImg)

  lifeBar = createSprite(50,50,120,13)
  lifeBar.shapeColor = "white"
  lifeValue = createSprite(50,50,117,10)
  lifeValue.shapeColor = "lime"
  lifeHud = createSprite(50,50)
  lifeHud.addImage(lifeImg)
  lifeHud.scale = 0.07

  hungerBar = createSprite(50,50,100,10)
  hungerBar.shapeColor = "white"
  hungerValue = createSprite(50,50,97,7)
  hungerValue.shapeColor = "brown"
  hungerHud = createSprite(50,50)
  hungerHud.addImage(hungerImg)
  hungerHud.scale = 0.08
  hungerHud.rotation = 45

  sleepBar = createSprite(50,50,80,7)
  sleepBar.shapeColor = "white"
  sleepValue = createSprite(50,50,77,4)
  sleepValue.shapeColor = "#000080"
  sleepHud = createSprite(50,50)
  sleepHud.addImage(sleepImg)
  sleepHud.scale = 0.07


  principal = createSprite(1658,706);
  principal.addImage("bonecoimg", principalWalk)
  principal.scale = 0.065

  inventory = createSprite(900,900)
  inventory.shapeColor = "#C5E3EC"
  inventory.opacity = 0.5
  bag = createSprite(50,50)
  bag.addImage(bagImg)
  bag.scale =0.16

  lifeBar.visible = false
  lifeHud.visible = false
  lifeValue.visible = false

  hungerBar.visible = false
  hungerValue.visible = false
  hungerHud.visible = false

  sleepBar.visible = false
  sleepValue.visible = false
  sleepHud.visible = false

  inventory.visible = false

 



  imageMode(CENTER)
}

function draw() {






  lifeBar.position.x = principal.position.x + 80
  lifeBar.position.y = principal.position.y - 30
  lifeValue.position.x = principal.position.x + 80
  lifeValue.position.y = principal.position.y-30
  lifeHud.position.x = principal.position.x+152
  lifeHud.position.y = principal.position.y-30

  hungerBar.position.x = principal.position.x +70
  hungerBar.position.y = principal.position.y-5
  hungerValue.position.x = principal.position.x+70
  hungerValue.position.y = principal.position.y-5
  hungerHud.position.x = principal.position.x + 130
  hungerHud.position.y = principal.position.y+1

  sleepBar.position.x = principal.position.x + 60
  sleepBar.position.y = principal.position.y + 15
  sleepValue.position.x = principal.position.x + 60
  sleepValue.position.y = principal.position.y + 15
  sleepHud.position.x = principal.position.x +114
  sleepHud.position.y = principal.position.y +15

  bag.position.x = camera.position.x +700
  bag.position.y = camera.position.y - 300

  inventory.position.x = principal.position.x
  inventory.position.y = principal.position.y


  


 stats();
  movement();
  drawSprites();
}

function movement(){

  //Movimento
  if(keyIsDown(37)){
    principal.position.x = principal.position.x -5
  }

  if(keyIsDown(38)){
    principal.position.y = principal.position.y -5
    
  }

  if(keyIsDown(39)){
    principal.position.x = principal.position.x +5
   
  }

  if(keyIsDown(40)){
    principal.position.y = principal.position.y +5
    
  }

  camera.position.y = principal.position.y
  camera.position.x = principal.position.x
  //Se cansar:
}

function stats(){
  if(keyIsDown(81)){
    lifeBar.visible = true
    lifeHud.visible = true
    lifeValue.visible = true

    hungerBar.visible = true
    hungerHud.visible = true
    hungerValue.visible = true

    sleepValue.visible = true
    sleepHud.visible = true
    sleepBar.visible = true
  }
  if(keyIsDown(69)){
    lifeBar.visible = false
    lifeHud.visible = false
    lifeValue.visible = false

    hungerBar.visible = false
    hungerHud.visible = false
    hungerValue.visible = false

    sleepValue.visible = false
    sleepHud.visible = false
    sleepBar.visible = false
  }
}




