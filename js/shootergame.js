var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var bullets = [];
var enemies = [];
var dead = false; /*dead was gameover*/
var die = [];
var requestId;
var isColliding;
var Start = document.getElementById("start");
var line = {
    xPos: 0,
    yPos: 500,
    height: 20,
    width: 400,
};
var wave1 = setInterval(function(){
    
    var tempRand = mycanvas.height;
    enemies.push(new Enemy(0, tempRand));

}, 1000);


Start.addEventListener("click", function(){
    clearInterval(wave1);
    wave1 = setInterval(function(){
    console.log("Game Started");
    var tempRand = Math.random() * mycanvas.width;
    enemies.push(new Enemy(tempRand - 10, 0));
    function Enemy(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = 50;
    this.width = 50;
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };
    this.move = function() {
        this.xPos -= 0;
        this.yPos -= -1;
        if(this.yPos > 500){
            this.toremove = true;
        }
    };
}
}, 1000);
        window.cancelAnimationFrame(requestId);
        enemies = [];
        bullets = [];
        player.xPos = 750;
        player.yPos = 325;
        player.shooting = false;
        player.goLeft = false;
        player.goRight = false;
        gameLoop();
});


var player = {
    xPos: 750,
    yPos: 325,
    height: 50,
    width: 50,
    background: "pictures/nvplayer.jpg",
    goLeft: false,
    goRight: false,
    goUp: true,
    goDown: true,
    shooting: false,
    die: false,
    canshoot: true,
    
    move: function() {

        if (player.goLeft && player.xPos > 750) {
            player.xPos -= 7;
        }
        if (player.goRight && player.xPos < 750) {
            player.xPos += 7;
        }
        if (player.goUp && player.yPos > 0) {
            player.yPos -= 7;
        }
        if (player.goDown && player.yPos < 650) {
            player.yPos += 7;
        }

    },
    shoot: function() {
        if (player.shooting && player.canshoot) {
            bullets.push(new Bullet(player.xPos, player.yPos));
            setTimeout(function(){
                player.canshoot = true;
            }, 300);
            player.canshoot = false;
        }
    },
    draw: function() {
        ctx.rect(player.xPos, player.yPos, this.width, this.height);
        ctx.stroke();
    }
};

function Bullet(xPos, yPos ) {
    this.yPos = yPos + 9;
    this.xPos = xPos;
    this.height = 2;
    this.width = 10;
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();

    };
    this.move = function() {
        this.xPos -= 10;
        if(this.xPos < -5){
            this.toremove = true;
            }
        
        if(this.xPos < 0){
            return false;
            
        } else {
            
        
        return true;
        }
        
    };
    this.toremove=false;
}

function Enemy(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = 30;
    this.width = 30;
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };
    this.move = function() {
        this.xPos -= -1;
        this.yPos -= 0;
        if(this.xPos > 850){
            this.toremove = true;
        }
    };
}
    
document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 37) {
        player.goLeft = true;
    }
    if (evt.keyCode === 38) {
        player.goUp = true;
    }
    if (evt.keyCode === 39) {
        player.goRight = true;
    }
    if (evt.keyCode === 40) {
        player.goDown = true;
    }
    if (evt.keyCode === 32) {
        player.shooting = true;
    }
    if (evt.keyCode === 80){
    }
        
    if (evt.keyCode === 82) {
        window.cancelAnimationFrame(requestId);
        dead = false;
        enemies = [];
        bullets = [];
        player.xPos = 750;
        player.yPos = 325;
        player.shooting = false;
        player.goLeft = false;
        player.goRight = false;
        gameLoop();
    }
});

document.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 37) {
        player.goLeft = false;
    }
    if (evt.keyCode === 38) {
        player.goUp = false;
    }
    if (evt.keyCode === 39) {
        player.goRight = false;
    }
    if (evt.keyCode === 40) {
        player.goDown = false;
    }
    if (evt.keyCode === 32) {
        player.shooting = false;
    }
    
    });

function garbagecollector(){
    for (var j = 0; j < bullets.length; j++) {
            if(bullets[j].toremove === true){
                bullets.splice(j, 1);
            }
    }
    for (var k = 0; k < enemies.length; k++){
        if(enemies[k].toremove === true){
            enemies.splice(k, 1);
        }
    }
}

function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    player.move();
    player.draw();
    player.shoot();
    
    for (var j = 0; j < bullets.length; j++) {
        bullets[j].move();
        bullets[j].draw();
        for(var k = 0; k < enemies.length; k++){
            if(isColliding(bullets[j], enemies[k])){
                enemies[k].toremove=true;
                bullets[j].toremove=true;
            } 
        }
        
    }
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].move();
        enemies[i].draw();
        if(isColliding(player, enemies[i])){
            dead = true;
            alert("Refresh to Restart.");
        }
        if(isColliding(line, enemies[i])){
            dead = true;
            alert("Refresh to Restart.");
        }
    }
    
    for (var i = 0; i < die.length; i++) {
        
    }
    
}
gameLoop();