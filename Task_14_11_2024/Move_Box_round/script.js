var box = document.getElementById("box");
var startBtn = document.getElementById("startBtn");
var pauseBtn = document.getElementById("pauseBtn");

var posLeft = 0;
var posTop = 0;

var direction = "right";
var moveInterval;

var boxSize = 100;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

function moveBox() {

    var maxLeft = winWidth - boxSize;
    var maxTop = winHeight - boxSize;

    // Right direction
    if (direction == "right") {
        posLeft++;
        if (posLeft >= maxLeft) {
            direction = "down";
        }
    }
    // Down direction
    else if (direction == "down") {
        posTop++;
        if (posTop >= maxTop) {
            direction = "left";
        }
    }
    // Left direction
    else if (direction == "left") {
        posLeft--;
        if (posLeft <= 0) {
            direction = "up";
        }
    }
    // Up direction
    else if (direction == "up") {
        posTop--;
        if (posTop <= 0) {

            clearInterval(moveInterval);
            startBtn.disabled = false;
        }

    }

    box.style.left = posLeft + "px";
    box.style.top = posTop + "px";
}

startBtn.addEventListener('click', function () {
    clearInterval(moveInterval);
    moveInterval = setInterval(moveBox);
    startBtn.disabled = true;
});

pauseBtn.addEventListener('click', function () {
    clearInterval(moveInterval);
    startBtn.disabled = false;
});