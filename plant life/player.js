//player kan bevæge sig
function player(){
    movement();
    limits();
}

//ramme for skærmen
function limits() {
    console.log('x=' + player.position.x)
    if (player.position.x > width - 20) {
        player.position.x = width - 20;
    }
    else if (player.position.y > height - 20) {
        player.position.y = height - 20
    }
    else if (player.position.y < 20) {
        player.position.y = 0 + 20
    }
    else if (player.position.x < 20) {
        player.position.x = 0 + 20
    }
}

function movement() {
    player.setSpeed(0, 0);

    if (keyIsDown(68)) {
        player.setSpeed(2, 0)
    }
    else if (keyIsDown(65)) {
        player.setSpeed(2, 180)
        //player.addAnimation("default", walking_anim);
    }
}
