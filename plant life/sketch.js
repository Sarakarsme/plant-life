
var player;
var player_walking;
var walking_anim;
var idle_anim;
var goToGame = false;


function preload() {
    walking_anim = loadAnimation (
    "sprites/walking/walking_1.png","sprites/walking/walking_2.png",
    "sprites/walking/walking_3.png","sprites/walking/walking_4.png",
    "sprites/walking/walking_5.png","sprites/walking/walking_6.png",
    "sprites/walking/walking_7.png","sprites/walking/walking_8.png",
    "sprites/walking/walking_9.png","sprites/walking/walking_10.png"
    )

    idle_anim = loadAnimation (
    "sprites/idle/1.png","sprites/idle/2.png","sprites/idle/3.png","sprites/idle/4.png",
    "sprites/idle/5.png","sprites/idle/6.png","sprites/idle/7.png","sprites/idle/8.png",
    "sprites/idle/9.png","sprites/idle/10.png","sprites/idle/11.png","sprites/idle/12.png",
    "sprites/idle/13.png","sprites/idle/14.png","sprites/idle/15.png","sprites/idle/16.png",
    "sprites/idle/17.png","sprites/idle/18.png","sprites/idle/19.png","sprites/idle/20.png",
    "sprites/idle/21.png","sprites/idle/22.png","sprites/idle/23.png","sprites/idle/24.png",
    "sprites/idle/25.png","sprites/idle/26.png","sprites/idle/27.png","sprites/idle/28.png",
    "sprites/idle/29.png","sprites/idle/30.png","sprites/idle/30.png","sprites/idle/32.png",
    "sprites/idle/33.png","sprites/idle/34.png")
}

function setup() {
    button_start_game = createSprite(width / 2, height / 2, 400, 90);
    button_start_game.shapeColor = color(0);
    button_start_game.onMousePressed = function () {
        this.shapeColor = color(128);
    }
    button_start_game.onMouseReleased = function () {
        goToGame = true;
    }

    player = createSprite(
        (windowWidth-width)/2,(windowHeight-height)/2, 100, 140);
        player.shapeColor = color(255);
        //player.addAnimation("default", idle_anim);
    /*
    player_walking = createSprite(
        (windowWidth-width)/2,(windowHeight-height)/2, 100, 140)*/
    }

function draw() {
    let cnv= createCanvas(800, 600,400,300);
    var x= (windowWidth-width)/2;
    var y=(windowHeight-height)/2;
    cnv.position((windowWidth-width)/2,(windowHeight-height)/2);

    if (goToGame) {
        Game();
    }

    background(50);
    
    drawSprites();
    movement();
    limits();
}