var box = document.getElementById("box");
box.addEventListener("click", changeText);

// function changeText() {
    
//     if (box.innerHTML == "X") {
//         box.innerHTML = "0";
//     }
//     else {
//         box.innerHTML = "X";
//     }
// }

box.innerText=" ";
function changeText() {
    if (box.style.display == " ") {
        box.style.display = "X";
        window.alert("Box clicked");
    } 
    
    if(box.style.display=="X"){
      window.alert("Box clicked");
    box.style.display = "0";
  }
  else{
    box.style.display = "X";
  }
}