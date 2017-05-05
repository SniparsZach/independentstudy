var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var enemies = [];
var player = [];
var bullet = [];
var bulletspeed = 0;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


function enemy(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = 55;
    this.width = 55;
    this.draw = function() {
        ctx.beginPath();
        var amdImage = document.createElement("img");
        amdImage.src = "pictures/logos/amdlogo.png";
        ctx.drawImage(amdImage, this.xPos, this.yPos, this.width, this.height);
    };

    this.move = function() {
        this.xPos -= -2;
        this.yPos -= 0;
    };
}

var spawn = setInterval(function() {
    var tempRand = Math.random() * (myCanvas.height - 35);
    enemies.push(new enemy(0, tempRand));
}, 1000);

var player = {
    xPos: 800,
    yPos: 250,
    goUp: false,
    goDown: false,
    move: function() {
        if (player.goUp && player.yPos > 0) {
            this.yPos -= 5;
        }
        if (player.goDown && player.yPos < 455) {
            this.yPos += 5;
        }
    },
    draw: function() {
        ctx.beginPath();
        var nvidiaImage = document.createElement("img");
        nvidiaImage.src = "pictures/game/nvidiaplayer.jpg";
        ctx.drawImage(nvidiaImage, this.xPos, this.yPos, 45, 45);
    }
};

document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 87) {
        player.goUp = true;
    }
    if (evt.keyCode === 83) {
        player.goDown = true;
    }
});

document.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 87) {
        player.goUp = false;
    }
    if (evt.keyCode === 83) {
        player.goDown = false;
    }
});

var bullet = {
    xPos: player.xPos,
    yPos: player.yPos,
    goLeft: false,
    move: function() {
        if (bullet.goLeft) {
            this.xPos -= bulletspeed;
        }
    },
    draw: function() {
        ctx.rect(bullet.xPos, bullet.yPos, 20, 15);
        ctx.fillRect(bullet.xPos, bullet.yPos, 20, 15);
        ctx.stroke();
    }
};

document.addEventListener("spacebar", function(evt) {
    if (evt.keyCode === 32) {
        bullet.goLeft = true;
        bulletspeed = 1;
    }
});

function isColliding(bullet, enemies) {
    var isLeft = enemies.xPos + enemies.width < bullet.xPos;
    var isRight = enemies.xPos > bullet.xPos + bullet.width;

    var isBelow = enemies.yPos < bullet.yPos;
    var isAbove = enemies.yPos > bullet.yPos + bullet.height;
    return !(isRight || isLeft || isAbove || isBelow);
}



function death(player, enemies) {
    var isLeft = enemies.xPos + enemies.width < player.xPos;
    var isRight = enemies.xPos > player.xPos + player.width;

    var isBelow = enemies.yPos < player.yPos;
    var isAbove = enemies.yPos > player.yPos + player.height;
    return !(isRight || isLeft || isAbove || isBelow);

}

function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    console.log(enemies.length);

    player.move();
    player.draw();
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].move();
        enemies[i].draw();
        if (isColliding(enemies[i], bullet)) {
            enemies.splice(i, 1);
        }
        if (enemies.xPos == myCanvas.width) {
            enemies.splice(i, 1);
            console.log("Enemy spliced by going out of map");
        }
        if (death(enemies[i], player)) {
            alert("Game Over");
            player.splice(i, 1);
            return;
        }
    }

    window.requestAnimationFrame(gameLoop);
}

gameLoop();
