var myCanvas = document.getElementById("myCanvas");
var player = [];
var amde = [];
var ctx = myCanvas.getContext("2d");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function Enemy(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = 12;
    this.width = 15;
    ctx.fillstyle = "#FFA500";
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };
    
    this.move = function() {
            this.xPos -= -1;
            this.yPos -= 0;           
    };
}

var wave1 = setInterval(function(){
    
    var tempRand = myCanvas.height;
    amde.push(new Enemy(0, tempRand));

}, 1500);

    var player = {
    xPos: 845,
    yPos: 325,
    goLeft: false,
    goRight: false,
    goUp: true,
    goDown: true,
    move: function(){

        if(player.goUp && player.yPos > 0){
            this.yPos -= 5;    
        }
        if(player.goDown && player.yPos < 650){
            this.yPos += 5;    
        }
        console.log(this.xPos);
    },
}

document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 37){
        player.goLeft = false;
    }
    if(evt.keyCode === 38){
        player.goUp = false;
    }
    if(evt.keyCode === 39){
        player.goRight = false;
    }
    if(evt.keyCode === 40){
        player.goDown = true;        
    }    
    
});

document.addEventListener("keyup", function(evt){
    if(evt.keyCode === 37){
        player.goLeft = false;
    }
    if(evt.keyCode === 38){
        player.goUp = true;
    }
    if(evt.keyCode === 39){
        player.goRight = false;
    }
    if(evt.keyCode === 40){
        player.goDown = false;        
    }    
})

function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    ctx.fillStyle = "#000000";
    player.move();
    player.draw();
    
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(300,100);

    for (var i = 0; i < amde.length; i++) {
        amde[i].move();
        amde[i].draw();
        if(isColliding(amde[i],player)){
            amde.splice(i,1);
        }
    }

    window.requestAnimationFrame(gameLoop)
}
