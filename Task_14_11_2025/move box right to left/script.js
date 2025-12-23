var box = document.getElementById('box');

var btn = document.createElement('Button');

// box Styling
box.className = "box";
box.style.height = "100px";
box.style.width = "100px";
box.style.background = "blue";
box.style.position = "relative";
box.style.marginBottom = "6px";
var position = 0;
box.style.left = "0px";

// button styling
btn.className = "btn";
btn.textContent = "Move Right";
btn.style.height = "30px";
btn.style.width = "100px";
btn.style.backgroundColor = "red";

// append the control id due to button will be visible into screen  
var control = document.getElementById('control');
control.appendChild(btn);

control.addEventListener('click', function () {

    // move right
    var rightId = setInterval(function () {

        if (position < window.innerWidth - box.offsetWidth) {
            box.style.left = position + "px";
            position++;
        } else {
            clearInterval(rightId);

            // move left starts ONLY after right ends
            var leftId = setInterval(function () {

                if (position > 0) {
                    box.style.left = position + "px";
                    position--;
                }
                else {
                    clearInterval(leftId);
                }

            });

        }

    });

});
