var mycanvas = document.getElementById("mycCnvas");
var ctx = mycanvas.getContext("2d");
var bullets = [];
var enemies = [];

var player = {
    xPos: 256,
    yPos: 490,
    height: 20,
    width: 20,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    shootDefault: false,
    canShoot: true,
}