var Left_btn = document.getElementById("leftButton");
var Right_btn = document.getElementById("rightButton");
var box = document.getElementById("box");
var position=0;
var move;
var move1;


Left_btn.addEventListener("click", function () {
	move = setInterval(function(){

	if (position > 0)
	{
		box.style.left = position + "px";
		position--;
	}
	else{
		clearInterval(move);
	}
	
});
});

Right_btn.addEventListener("click", function() {
  move1 = setInterval(function() {

	  if (position<=window.innerWidth - 100)
	  {
		  box.style.left = position+"px";
			position++;
	  }
		else{
			clearInterval(move1);
		}
  });  
});