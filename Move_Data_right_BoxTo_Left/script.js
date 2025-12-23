var rightbox = document.getElementById('rightBox');
var leftbox = document.getElementById('leftBox');
var btnmoveRight = document.getElementById('moveRight');
var btnmoveLeft = document.getElementById('moveLeft');

// Move Right Function
btnmoveRight.addEventListener("click", function () {

    var inputs = leftbox.getElementsByTagName("input");

    var selectedCheckboxes = [];

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox" && inputs[i].checked) {
            selectedCheckboxes.push(inputs[i]);
        }
    }

    selectedCheckboxes.forEach(function (checkbox) {

        var text = checkbox.parentElement.textContent;
 
        var div = document.createElement("div");

        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.className = "checkbox";
        newCheckbox.value = checkbox.value;

        div.appendChild(newCheckbox);
        div.appendChild(document.createTextNode(text));

        rightbox.appendChild(div);

        leftbox.removeChild(checkbox.parentElement);
    });
});

// Move left function
btnmoveLeft.addEventListener("click", function () {

    var inputs = rightbox.getElementsByTagName("input");

    var selectedCheckboxes = [];

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox" && inputs[i].checked) {
            selectedCheckboxes.push(inputs[i]);
        }
    }

    selectedCheckboxes.forEach(function (checkbox) {

        var text = checkbox.parentElement.textContent;
        
        var div = document.createElement("div");

        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.className = "checkbox";
        newCheckbox.value = checkbox.value;

        div.appendChild(newCheckbox);
        div.appendChild(document.createTextNode(text));
       
        leftbox.appendChild(div);

        rightbox.removeChild(checkbox.parentElement);
    });
});     